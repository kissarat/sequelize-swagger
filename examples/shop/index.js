const http = require('http');
const { sequelize } = require('./models');
const describe = require('../../src/sequelize/describe');

const server = http.createServer(function(req, res) {
    const definitions = {};
    for(const model of Object.values(sequelize.models)) {
        definitions[model.name] = describe(model)
    }
    res.write(JSON.stringify({
        definitions
    }));
    res.end();
})

const port = +process.env.HTTP_PORT || 3000;
sequelize.sync().then(function() {
    server.listen(port, function() {
        console.log(`Listen at http://localhost:${port}`);
    })
})
