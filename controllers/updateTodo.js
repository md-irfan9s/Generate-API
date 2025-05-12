// import models
const Todo = require("../models/Todo")


// define update routes 

exports.updateTodo = async(req, res) => {
    try{

        const {id} = req.params; 
        const {title, description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title, description, upadtedAt:Date.now()},
             
        )

        res.status(200).json(
            {
                success:true,
                data:todo,
                message:"data is successfully updated",
            }
        )

    }

    catch(err) {
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"internal server error",
                message:err.message
            }
        )

    }
}