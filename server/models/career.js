const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const careerSchema = new Schema({
    title: {
        type: String,
    },
    salary: {
        type: Number,
    },
    location: {
        type: String,
    }
}, { timestamps: true });

const Career = mongoose.model('Career', careerSchema);

module.exports = Career;