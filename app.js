import express from 'express';

import "./db/connect.js"
import cookieParser from "cookie-parser";
import dontEnv from 'dotenv' ;
import cors from 'cors';
import router from './routes/router.js'

dontEnv.config();

const app = express() ;
const PORT = process.env.PORT || 8009 ;

//Router
app.use(express.json()); // to parse data in json format
app.use(cookieParser());
app.use(cors());
app.use(router);

app.get("/" , (req , res) =>{
    res.send("server start");
});

app.listen(PORT , () =>{
    console.log(`Server is running at localhost:${PORT}`);
})