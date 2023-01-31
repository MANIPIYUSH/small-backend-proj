const mongoose = require("mongoose");

const connectToDB = () =>{
    mongoose.connect(process.env.MONGODB_URL).then(
        (con)=>{
            console.log(`Connected DB : ${con.connection.host}`);
        }
    ).catch((err)=>{
            console.log(err.message);
            process.exit(1);
    });
};

module.exports = connectToDB;