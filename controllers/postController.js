const postModel = require("../models/postModel");

exports.addPost =async (req, res) => {
    try {
        const { title , body } = req.body ;
        if(!title) {
            return res.status(200).json({ status : false , message : "title Is Missing!" })
        }
        if(!body) {
            return res.status(200).json({ status : false , message : "body Is Missing!" })
        }
        const addData = await postModel.create({ title , body });
        if(!addData){            
            return res.status(200).json({ status : false , message : "post is not created yet."  })
        }
        return res.status(201).json({ status : true , message : "Add Post Successfully.", post : addData })
    } catch (error) {
        console.log(`Error From addPost :: ${error}`);
        return res.status(500).json({ status : false , message : "Internal Server Error" })
    }
}

exports.getPost =async (req, res) => {
    try {
        const findData = await postModel.find({})
        if(!findData){            
            return res.status(200).json({ status : false , message : "No Post Found." })
        }
        return res.status(200).json({ status : true , message : "Get Post Successfully." , post : findData })
    } catch (error) {
        console.log(`Error From getPost :: ${error}`);
        return res.status(500).json({ status : false , message : "Internal Server Error" })
    }
}

exports.updatePost =async (req, res) => {
    try {
        const {id} = req.params;
        if(!id){            
            return res.status(200).json({ status : false , message : "Id Is Missing In Params." })
        }
        const { title , body } = req.body ;
        const updateData = await postModel.findOneAndUpdate({_id : id} , { title , body });
        if(!updateData){            
            return res.status(200).json({ status : false , message : "post is not updated yet." })
        }
        return res.status(200).json({ status : true , message : "Update Post Successfully."  , post : { id, title, body}});
    } catch (error) {
        console.log(`Error From updatePost :: ${error}`);
        return res.status(500).json({ status : false , message : "Internal Server Error" })
    }
}

exports.deletePost =async (req, res) => {
    try {
        const { id } = req.params ;
        if(!id) {
            return res.status(200).json({ status : false , message : "Id Is Missing!" })
        }
        const deleteData = await postModel.deleteOne({_id : id});
        if(!deleteData){            
            return res.status(200).json({ status : false , message : "post is Already deleted." })
        }
        return res.status(200).json({ status : true , message : "Post Deleted Successfully." })
    } catch (error) {
        console.log(`Error From deletePost :: ${error}`);
        return res.status(500).json({ status : false , message : "Internal Server Error" })
    }
}