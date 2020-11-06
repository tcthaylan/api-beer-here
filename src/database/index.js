const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/noderest', { useMongoCliente: true });
// mongoose.createConnection('mongodb://localhost/noderest', { useNewUrlParser:true });

// Conectar ao Banco de Dados
// const uri = 'mongodb://localhost/epouBear';
// process.env.MONGO_URL
mongoose.connect("mongodb+srv://tcthaylan:teste123@cluster0-snjxr.mongodb.net/BeerHere?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

// Indica a classe de Promise que o Mongoose vai utilizar
mongoose.Promise = global.Promise;

module.exports = mongoose