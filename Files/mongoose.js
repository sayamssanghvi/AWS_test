const mongoose=require('mongoose');
const validator=require('validator');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/AWS_test', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true}
    );
var db =mongoose.connection;

db.on("error",(error)=>{
    console.log("Error in COnnecting to Database:",error);
})
db.once("open",()=>{
    console.log("Connection to database established");
})
module.exports={
    mongoose
}