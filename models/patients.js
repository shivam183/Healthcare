const mongoose = require('mongoose');
const config = require('../config/database');

const PatientSchema = mongoose.Schema({

    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    DOB: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    department: {
        type: String
    },
    doctor: {
        type: String
    }

});

const Patient = module.exports = mongoose.model("Patient", PatientSchema);