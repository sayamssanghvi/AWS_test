const mongoose=require('mongoose');

var Data=mongoose.model('data',{
    id:{
        type:String
        },
    certificate_number:{
        type:Number
    },
    business_name:{
        type:String
    },
    date:{
        type:String
    },
    result:{
        type:String
    },
    sector:{
        type:String
    },
    address:{
        city:{  
            type:String
        },
        zip:{
            type:Number
        },
        street:{
            type:String
        },
        number:{
            type:Number
        }
    }
},'data');

module.exports=Data;