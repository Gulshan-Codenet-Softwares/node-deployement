    import express from 'express'
    import { API_URL } from './helper/manageUrl.js';
    import dotenv from 'dotenv';

    
    dotenv.config();
    const app = express();


    app.get('/',(req, res)=>{
        res.send("HOME ROUTE")
    })

    const baseURL = API_URL();
    console.log("baseURl...............",baseURL)
    

    app.listen(process.env.PORT,()=>{
        console.log(`App is running on  - http://localhost:${process.env.PORT || 5000}`)
    })