import { config } from 'dotenv'
import express from 'express'
import { connectDB } from './dbConfig.js'
import router from './Routes/routes.js'
const app = express()
config()


let port = process.env.PORT || 3000;


app.use(express.json())
app.use("/api/github",router)
connectDB().then(()=>{
    app.listen(port,()=>{
    console.log(`Server is running @http://localhost:${port}`)
    })
}).catch((err)=>{
    console.log(err.msg);
})

