// bUSINESS LOGIC

const User = require("../models/userModel");

exports.home = (req,res) =>{
    res.send("hello Piyush");
};

exports.createUser = async(req,res) =>{
 
    try{
        const {name,email} = req.body;
         if(!name || !email)
         {
            throw new Error("Name and Email are Required");
         }
         const userExists = await User.findOne({email})
          if(userExists){
            throw new Error("Email Already Exists");
          }
              // inserting into the database
        const user = await User.create({name,email});
        res.status(201).json({
            success:true,
            message:"User created Successfully",
            user,
        });

    } catch(error){
          console.log(error);
    }
}
