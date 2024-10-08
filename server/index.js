import express from "express";
import  dotenv from "dotenv";
import connectdb from "./db/db.js";
import Route from "./router/router.js";
import errormiddleware from "./middleware/error.middleware.js";

dotenv.config();


const app = express();
app.use(express.json());


app.use("/api", Route);

app.use(errormiddleware);

const port = process.env.PORT || 5000;



app.listen(port, ()=>{
    connectdb();
    console.log(`server is runing on port ${port}`);
})
