// import the model 

const Todo = require("../models/Todo");

// define the routes

exports.createTodo = async(req, res) => {
    try{
        // extract title and description from request body
        const {title, description} = req.body;
        // create a new todo obj and insert in db 
        const response = await Todo.create({title, description});
        // send json response 
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry created succesfully",
            }
        );
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
