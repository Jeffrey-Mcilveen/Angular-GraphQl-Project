const mongoose = require("mongoose")

const userbookingSchema = new mongoose.Schema({
    listing_id:{
        type: String,
        required:[true,"Please enter listing_id"],
    },
    booking_date:{
        type: Date,
        default: Date.now,
        required:[true,"Please enter booking date"],
    },
    booking_start:{
        type: Date,
        required:[true,"Please enter booking start"],
    },
    booking_end:{
        type: Date,
        required:[true,"Please enter booking end"],
    },
    username:{
        type: String,
        required:[true,"Please enter username"],
    }
})

const userbooking = mongoose.model("userbooking", userbookingSchema)
module.exports = userbooking