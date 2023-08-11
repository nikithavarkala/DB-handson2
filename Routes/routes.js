const route= require("express").Router()
const { addData, addManyData,fetchData, Salary, Exp, Graduate, setSalary, dlt } = require("../controller/student")

route.post("/addData",addData)
route.post("/addManyData",addManyData)
route.get("/fetchData",fetchData)
route.get('/salary',Salary)
route.get('/exp',Exp)
route.get('/graduated',Graduate)
route.post('/setsalary',setSalary)
route.get('/dlt',dlt)

module.exports=route