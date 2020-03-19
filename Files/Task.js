var mongoose=require('./mongoose');

var Task=mongoose.model('task',{
    name:{
        type:String,
        required:true
    }
});

module.exports={
    Task
}