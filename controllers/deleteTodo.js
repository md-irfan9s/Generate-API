// import model 

const Todo = require("../models/Todo");

// define the routes

exports.deleteTodo = async(req, res) => {

    try{    
        const {id} = req.params;

        await Todo.findByIdAndDelete(id);
        // const {title, description} = req.body;
        // const  todos = await Todo.findByIdAndDelete(
        //     {_id:id},
        //     {title, description, updatedAt:Date.now()},
        // )

        res.status(200).json(
            {
                success:true,
                // data:todos,
                message:"data deleted successfully by Id"
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