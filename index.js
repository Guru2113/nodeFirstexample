const express=require("express");

const app=express();

app.use(express.json());

app.use(express.urlencoded({
    extended:true,
}));

const mongoose =require("mongoose");

//scheme import
const dscheme=require("./signup")

const uri="mongodb+srv://guruprasath0211:Guru0211@cluster0.0uslxsy.mongodb.net/?retryWrites=true&w=majority"


const connectDB = async () => {
    try {
      const conn = await mongoose.connect(uri, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
  connectDB();


const sign=[]

//post SignUp
app.post("/api/signUp", async (req,res)=>{
   // console.log(req.body);

    try {
        const{usr, pass} = req.body;   
        const d = new dscheme({usr, pass});

        await d.save();
    
    res.status(200).json({
        'Msg':d,
    });
    } catch (error) {
        res.status(500).json({
            'error':error.message
        })
    }
   
})

//get data
app.get("/api/getData",(req,res)=>{
    // if(sign.length>0){
    //     res.status(200).send({
    //         "status_code":200,
    //         "msg":"success",
    //         "data":sign
    //     })
    // }
    // else{
    //     res.status(200).send({
    //         "status_code":200,
    //         "msg":"success",
    //         "data":[]
    //     }) 
    // }
})


app.listen(2000,()=>{
    console.log("success");
});