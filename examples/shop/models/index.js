const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

// fix 64 bytes numbers
require('pg').defaults.parseInt8 = true;

const basename = path.basename(__filename);

const DBConfigs = {
  dialect: 'postgres',
  operatorsAliases: '0',
  host: process.env.DB_HOST,
  port: 5432,
  pool: { min: 0, max: 4, acquire: 20000, idle: 20000 },
  define: {
    underscored: true,
    freezeTableName: true,
    timestamps: true,
    deletedAt: false,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    paranoid: false
  },
  logging: process.env.NODE_ENV === 'local'
    ? string => console.log(string)
    : false
};

if (['local', 'production'].includes(process.env.NODE_ENV)) {
  DBConfigs.benchmark = true;
}

const appName = 'example_shop'
const sequelize = new Sequelize(
  process.env.DB_NAME || appName,
  process.env.DB_USER || appName,
  process.env.DB_PASSWORD || appName,
  DBConfigs
);

/**
 * checking connection to DB
 */
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Postgres connected!');
  } catch (error) {
    console.log(`Postgres connecting error: ${error}`);
    process.exit(1);
  }
})();

/**
 *
 */
const db = {};

const exclude = [basename, 'index.js']
fs.readdirSync(`${__dirname}`)
  .filter(file => file.indexOf('.') !== 0 && exclude.indexOf(file) < 0 && file.slice(-3) === '.js')
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

function relations(db) {
  db.User.hasOne(db.User, {
    as: 'parent',
    foreignKey: 'parentId'
  });
  db.User.hasMany(db.User, {
    as: 'children',
    foreignKey: 'id',
    sourceKey: 'parentId'
  });
}

relations(db);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Op = Sequelize.Op;

module.exports = db;
