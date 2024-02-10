const mongoose = require('mongoose');
const dbConnect = () => {
    mongoose.connect("mongodb+srv://tejasvi210303:tejasvi@cluster0.otuhf0n.mongodb.net/?retryWrites=true&w=majority", {
        // useFindAndModify:true,
        useUnifiedTopology: true,
        // useCreateIndex:true,
        useNewUrlParser: true,
    })
        .then(() => console.log('Database Connected'))
        .catch(err => console.log(err));

}

module.exports = dbConnect;

//mongodb+srv://20302:abhay@cluster0.czuegcc.mongodb.net/?retryWrites=true&w=majority