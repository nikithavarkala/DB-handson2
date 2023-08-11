const {database}=require('../config/db')
const student_collection=database.collection('student-record')

// const array=[]
const addData=async (req,res)=>{
    const data=req.body;
    const result=await student_collection.insertOne(data)
    // array.push(data)
    res.send({msg:"sucess!!!",data:result})
}

const addManyData=async(req,res)=>{
    const data=req.body;
    const result=await student_collection.insertMany(data)
    res.send({msg:"succesfully added",data:result})
}

const fetchData= async(req,res)=>{
    const result=await student_collection.find().toArray();
    res.send(result)
}

const Salary=async (req,res)=>{
    const result=await student_collection.find({"salary":{"$gt":"30000"}}).toArray()
    res.send(result)
}

const Exp=async (req,res)=>{
    const result=await student_collection.find({"overallExp":{"$gt":"2"}}).toArray()
    res.send(result)
}

const Graduate=async (req,res)=>{
    const result=await student_collection.find({"yearGrad":{"$gt":"2015"}},{"overallExp":{"$gt":'1'}}).toArray()
    res.send(result)
}

const setSalary=async (req,res)=>{
    const result=await student_collection.updateMany({"salary":{"$lt":"30000"}},{"$set":{"salary":"65000"}})
    res.send(result)
}

const dlt=async (req,res)=>{
    const result=await student_collection.deleteMany({"lastCompany":{"$gt":'Y'}})
    res.send(result)
}

module.exports={addData,addManyData,fetchData,Salary,Exp,Graduate,setSalary,dlt}
