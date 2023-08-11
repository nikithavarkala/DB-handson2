const express=require('express')
const route=require('./Routes/routes')
const {database}=require('./config/db')
const app=express()


app.use(express.json())

app.use('/api',route)
app.get('/',(req,res)=>{
    res.send({"msg":"Welcome to DB!!!"})
})

app.listen(3001,()=>{
    console.log('server is running on 3001')
})