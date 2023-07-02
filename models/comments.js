const {Schema,model}=require("mongoose");


const commentSchema=new Schema({
   
    blogId:{
        type:Schema.Types.ObjectId,
        ref:"blog"
        
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"user"
    },
    content:{
        type:String,
      required:true
    },
},{timestamps:true});

const Comment=model('comment',commentSchema);
module.exports=Comment;