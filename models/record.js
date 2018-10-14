const mongoose = require('mongoose');
const config = require('../config/database');

const RecordSchema = mongoose.Schema({

    date: {
        type: String,
        required: true
    },
    nurse_name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    reading1: {
        type: String,
    },
    reading2: {
        type: String,
    },
    food_allergy: {
        type: String,
        required: true
    },
    bp: {
        type: String,
        required: true
    },
    diabetic: {
        type: String,
        required: true
    },
    heart_disease: {
        type: String,
        required: true
    },
    surgery: {
        type: String,
        required: true
    },
    accident: {
        type: String,
        required: true
    },
});
const record = module.exports = mongoose.model('Record', RecordSchema);

module.exports.getRecordById(id, callback){
    record.findById(id, callback);
}