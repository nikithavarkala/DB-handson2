const {MongoClient}=require('mongodb')

const url='mongodb://0.0.0.0:27017'
// const url='mongodb+srv://nikithav:Nikitha1504@cluster0.p2v99sl.mongodb.net/?retryWrites=true&w=majority'

const mongoClient=new MongoClient(url)
try{
    mongoClient.connect()
    console.log('server connected vth db')
}
catch(err){
    console.log("error msg",err)
}

const database=mongoClient.db("Testing_db")

module.exports={database}
