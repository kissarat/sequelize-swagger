const http = require('http');
const { sequelize, User } = require('./models')

const server = http.createServer(function(req, res) {
    res.write(JSON.stringify(Object.keys(User)));
    res.end();
})

const port = +process.env.HTTP_PORT || 3000;
sequelize.sync().then(function() {
    server.listen(port, function() {
        console.log(`Listen at http://localhost:${port}`);
    })
})

