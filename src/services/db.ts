const Connection = require('tedious').Connection;
const config = {
    server: 'A-LUM-11',
    authentication: {
        type: 'default',
        options: {
            username: '46214658',
            password: 'DF46214658'
        }
    },
    options: {
        database: 'ProyectoFinal'
    }
};
const connection = new Connection(config);
connection.on('connect', function (err) {
    console.log("Connected");
});

connection.connect();