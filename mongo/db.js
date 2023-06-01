var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27018');
// mongoose.connect('mongodb://admin:secret@localhost:27017/ecomm', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
// });

var dburl = "mongodb://admin:secret@localhost:27017/ecomm";

mongoose.connect(dburl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        authSource: 'admin'
        }).then(() => {
                console.log("Conexão estabelecida com sucesso");
        }).catch((error) => {
                console.error('Erro ao conectar: ', error);
});