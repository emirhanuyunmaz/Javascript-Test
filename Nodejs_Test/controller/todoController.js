// import TodoModel from "../model/todoModel.js"
const TodoModel = require("../model/todoModel");

const getTodo = async (req,res) => {
    try{
        // console.log("Todo list ");
        const datas = await TodoModel.find().sort("-createAt")        
        res.status(201).json({succes:true,data:datas})
    }catch(err) {
        console.log("ERR",err);
        
        res.status(404).json({message:err,succes:false})
    }
}

const addTodo = async (req,res) => {
    try{
        console.log("REQ:",req.body)
        console.log("Todo ekleme işlemi.");
        const newTodo = new TodoModel(req.body)
        await newTodo.save()
        res.status(201).json({succes:true})
    }catch(err) {
        res.status(404).json({message:err,succes:false})
    }
}

const deleteTodo = async(req,res) => {
    try{
        console.log("Todo silme işlemi.");
        const id = req.params.id
        console.log("TODOD SİL ID:",id);
        
        await TodoModel.findByIdAndDelete(id)
        res.status(201).json({succes:true})
    }catch(err) {
        res.status(404).json({message:err,succes:false})
    }
}

const updateTodo = async(req,res) => {
    try{
        console.log("Todo güncelleme işlemi.");
        const id = req.params.id        
        const data = req.body.data
        console.log("DATA:::",req.body);
        
        await TodoModel.findByIdAndUpdate(id,req.body)
        res.status(201).json({succes:true})
    }catch(err) {
        console.log("HATA:",err);
        
        res.status(404).json({message:err,succes:false})
    }
}



module.exports = {addTodo,deleteTodo,updateTodo,getTodo}