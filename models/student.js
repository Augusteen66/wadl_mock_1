const mongoose = require("mongoose")

const studentmarks = mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    rollNo: {
        type: Number,
        required:true
    },
    AI: {
        type:Number,
        required:true
    },
    WAD: {
        type:Number,
        required:true
    },
    CNS: {
        type:Number,
        required:true
    },
    DSBDA: {
        type:Number,
        required:true
    }
});

const StudentMarks = mongoose.model("StudentMarks", studentmarks)

module.exports = StudentMarks