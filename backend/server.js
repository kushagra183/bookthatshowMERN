const express = require("express"); //imported express 
const mongoose = require("mongoose"); //imported mongoose
mongoose.set('strictQuery', false); //set mongoose strictQuery to false

const cors = require("cors");//importes CORS for cross origin resource sharing
const app = express(); //initialised the express app
const router = require("./routes/routes"); //imported routes 
const port = process.env.PORT || 8080; //setting port to 8080 for for initial use and when deploying it will take process.env.port
const connectionString = "mongodb://Kushagra:V432km1@ac-wlfh8pz-shard-00-00.ipb9orv.mongodb.net:27017,ac-wlfh8pz-shard-00-01.ipb9orv.mongodb.net:27017,ac-wlfh8pz-shard-00-02.ipb9orv.mongodb.net:27017/?ssl=true&replicaSet=atlas-127egj-shard-0&authSource=admin&retryWrites=true&w=majority";


//required middlewares
app.use(cors());
app.use(express.json());
app.use("/api",router)

//connected to the database using mongoose.connect and started the server at PORT
mongoose.connect(connectionString).then(()=>console.log("db connected"))
.then(()=>app.listen(port,()=>{console.log(`Listening on Port ${port}!`)}))
.catch((err)=>console.log(err));