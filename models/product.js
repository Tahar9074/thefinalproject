const mongoose=require("mongoose")
const schema=mongoose.Schema

const ProductSchema=new schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:Number

    }

})

module.exports=Product=mongoose.model("Product",ProductSchema)