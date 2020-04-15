const mongoose = require('mongoose');
const connection = "mongodb+srv://mohit:mohit.1234@cluster0-s4lnc.mongodb.net/users?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected"))
    .catch(err => console.log(err));