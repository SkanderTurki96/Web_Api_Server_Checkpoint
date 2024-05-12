const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    UserName : {
        type : String,
        required : true
    },
    Mail : {
        type : String,
        required : true
    },
    Password : {
        type : String,
        required : true
    },
    LinkImage : {
        type : String,
        required : true
    },
    
});
module.exports = mongoose.model("User" , UserSchema);