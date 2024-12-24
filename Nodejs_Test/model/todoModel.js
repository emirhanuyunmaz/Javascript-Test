const mongoose = require("mongoose")


const todoSchema = mongoose.Schema({
    text:String,
    done:Boolean,
    createAt:{
        type:Date,
        default:Date.now()
    }
})

const TodoModel = mongoose.model("Todo",todoSchema)

module.exports = TodoModel