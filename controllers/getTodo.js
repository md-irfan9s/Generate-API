// import the model 

const Todo = require("../models/Todo");
// const { param } = require("../routes/Todos");

exports.getTodo = async(req, res) => {
    try{
        const todos = await Todo.find({});

        res.status(200).json(
            {
                success:true,
                data:todos,
                message:"Entry created succesfully",
            }
        )
    }

    catch(err) {
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message
        })
    }
}


exports.getTodoById = async(req, res) => {

    try{

        const id = req.params.id
        const todo = await Todo.findById({_id: id});

        if(!todo) {
            return res.status(404).json( {
                success:false,
                message:"No data Found"
            })
        }

        res.status(200).json({
            success:true,
            data:todo,
            message:`todo ${id} is succesfully fetch`

        })

    }

    catch(error) {

        console.log(error);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message
        })

    }

}