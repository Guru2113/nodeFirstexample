const mongoose= require("mongoose")

let ds=new mongoose.Schema({
    "usr":{
        required:true,
        type:String
    },
    "pass":{
        required:true,
        type:String
    }
});

module.exports =mongoose.model("node_js",ds);