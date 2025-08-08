import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({

    orderId : {
        type:String,
        required : true,
        unique : true
    },
    date : {
        type:Date,
        required : true,
        default: Date.now
    },
    email : {
        type:String,
        required : true,
    },
    name : {
        type:String,
        required : true,
    },
    address : {
        type:String,
        required : true,
    },
    phoneNumber  : {
        type:String,
        required : true,
    },
    billItems  : {
        type:[
            {
                ProductId : String,
                productName : String,
                image : String,
                quantity : Number,
                price : Number
            }
        ],
        required : true,
    },
    total : {
        type : Number,
        required : true
    }
})
const Order = mongoose.model("orders",OrderSchema)
export default Order;