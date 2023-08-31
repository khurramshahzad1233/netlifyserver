import app from "../app"
import dotenv from "dotenv"
import serverless from "serverless-http"

if(process.env.NODE_ENV!=="PRODUCTION"){
    dotenv.config({path:"netlify/config.env"})
};


// const port=process.env.PORT || 3000

// app.listen(port,"0.0.0.0",()=>{
//     console.log(`server is running on port ${port}`)
// })
export const handler=serverless(app)