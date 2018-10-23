const express = require('express');
const router = express.Router();
const Patient = require('../models/patients');
const User = require('../models/user');
const Record = require('../models/record');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

//Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to Register User' });
        }
        else {
            res.json({ success: true, msg: 'Registered Sucessfully' });
        }
    })
})

//Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if (err) { console.log(err) }
        if (!user) {
            return res.json({ sucess: false, msg: 'user not found' });
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) { console.log(err) }
            if (isMatch) {
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800

                });

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.name,
                        email: user.email
                    }
                });
            }
            else {
                return res.json({ success: false, msg: 'Wrong Password' })

            }
        })
    })

});

//Profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    res.send({ user: req.user });
});

//Get all Patients
router.get('/patients', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Patient.find((err, patients) => {
        if (err) {
            res.json({ success: false, msg: "Something Went Wrong" });
        }
        if (!patients) {
            res.json({ success: false, msg: "No Patients" });
        }
        else {
            res.json(patients)
        }

    });
});

//Get Patient by ID
router.get('/patient/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Patient.findOne({ _id: req.params.id }, (err, patient) => {
        if (err) {
            res.json({ success: false, msg: "Something Went Wrong" });
        }
        if (!patient) {
            res.json({ success: false, msg: "Patient doesnot exist" });
        }
        else {
            res.json(patient)
        }
    })
});

//Add Patient
router.post('/patients', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    let newPatient = new Patient({

        first_name: req.body.first_name,
        last_name: req.body.last_name,
        DOB: req.body.DOB,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        province: req.body.province,
        postal_code: req.body.postal_code,
        phone: req.body.phone,
        department: req.body.department,
        doctor: req.body.doctor
    });


    newPatient.save((err, patient) => {
        if (err) {
            console.log(err);
            res.json({ success: false, msg: 'Failed to Add Patient' });
        }
        else {
            res.json({ success: true, msg: 'Patient Added Sucessfully' });
        }
    });

});


//Update Patient
router.put('/patient/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    let Patient = ({

        first_name: req.body.first_name,
        last_name: req.body.last_name,
        DOB: req.body.DOB,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        province: req.body.province,
        postal_code: req.body.postal_code,
        phone: req.body.phone,
        department: req.body.department,
        doctor: req.body.doctor
    });

    Patient.findByIdAndUpdate({ _id: req.params.id }, Patient, { new: true }, (err, patient) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to Update the Patient' })
        }
        if (!patient) {
            res.json({ success: false, msg: 'No Patient with that ID is Found' })
        }
        else {
            res.json({ success: true, msg: 'Patient Updated Sucessfully' })
        }
    })
});

//Delete patient
router.delete('/patient/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    Patient.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });

});

//Get Record for a patient
router.get('/patient/:id/records', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    Record.find({ patient_id: req.params.id }, (err, records) => {
        if (err) {
            res.json({ success: false, msg: "Something Went Wrong" });
        }
        if (!records) {
            res.json({ success: false, msg: "No Records Found" });
        }
        else {
            res.json(records)
        }

    });
})

//Add record for a Patient
router.post('/patient/:id/records', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    let newRecord = new Record({
        patient_id: req.body.patient_id,
        date: req.body.date,
        nurse_name: req.body.nurse_name,
        type: req.body.type,
        category: req.body.category,
        reading1: req.body.reading1,
        reading2: req.body.reading2,
        food_allergy: req.body.food_allergy,
        bp: req.body.bp,
        diabetic: req.body.diabetic,
        heart_disease: req.body.heart_disease,
        surgery: req.body.surgery,
        accident: req.body.accident
    })
    newRecord.save((err, record) => {
        if (err) {
            console.log(err);
            res.json({ success: false, msg: 'Failed to add Record' })
        }
        else {
            console.log(record);
            res.json({ success: true, msg: 'Record added Sucessfully' })
        }
    })

})

//Delete Record
router.delete('/patient/:pid/record/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Record.deleteOne({ _id: req.params.id }, (err, result) => {
        if (err) {
            console.log(err)
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});

//Get Record By ID
router.get('/patient/:pid/record/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Record.getRecordById({ _id: req.params.id }, (err, record) => {
        if (err) {
            console.log(err);
            res.json(err);
        }
        if (!record) {
            res.json({ success: false, msg: 'No Record Found' })
        }
        else {
            res.json(record);
        }
    })
})

module.exports = router;