const express=require('express')
const connectDB=require('./config/database')
const router=require('./config/routes')
const cors=require('cors')

const app=express()
const port=3100

app.use(express.json())
connectDB()

app.use(cors())


app.use('/',router)

app.listen(port,function() {
    console.log('listening port:',port)
})