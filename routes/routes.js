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
            console.log(err);
            res.json({ success: false, msg: 'Failed to Register User' });
        }
        else {
            console.log(`-> User ${user.name} Created`);
            res.sendStatus = 201;
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
            console.log('->No User Exist');
            return res.json({ sucess: false, msg: 'Authentication Failed' });
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) { console.log(err) }
            if (isMatch) {
                console.log(`->${user.name} Logged In`);
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
                console.log('->Wrong Password');
                return res.json({ success: false, msg: 'Authentication Failed' })

            }
        })
    })

});

//Profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    console.log('->User Requested');
    res.send({ user: req.user });
});

//Get all Patients
router.get('/patients', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Patient.find((err, patients) => {
        if (err) {
            console.log(err)
            res.json({ success: false, msg: "Something Went Wrong" });
        }
        if (!patients) {
            console.log('->No Patient Found')
            res.json({ success: false, msg: "No Patients" });
        }
        else {
            console.log('->Requested All Patients')
            res.json(patients)
        }

    });
});

//Get Patient by ID
router.get('/patient/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Patient.findOne({ _id: req.params.id }, (err, patient) => {
        if (err) {
            console.log(err);
            res.json({ success: false, msg: "Something Went Wrong" });
        }
        if (!patient) {
            console.log(`->No Patient Found with ID [${patient._id}]`)
            res.status(404).json({ success: false, msg: "Patient doesnot exist" });
        }
        else {
            console.log(`->Requested Single Patient ID [${req.params.id}]`);
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
            console.log(`->New Patient Added, ID:[${patient._id}]`);
            res.status(201).json({ success: true, msg: 'Patient Added Sucessfully' });
        }
    });

});


//Update Patient
router.put('/patient/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    let patient = ({

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

    Patient.findByIdAndUpdate({ _id: req.params.id }, patient, { new: true }, (err, patient) => {
        if (err) {
            console.log(err);
            res.json({ success: false, msg: 'Failed to Update the Patient' })
        }
        if (!patient) {
            console.log('->No Patient Found to Update');
            res.json({ success: false, msg: 'No Patient with that ID is Found' })
        }
        else {
            console.log(`->Patient with ID [${patient._id}] Updated`);
            res.json({ success: true, msg: 'Patient Updated Sucessfully' })
        }
    });
});

//Delete patient
router.delete('/patient/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    Patient.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            console.log(err);
            res.json(err);
        }
        else {
            console.log(`->Patient with ID [${req.params.id}] deleted`);
            res.json(result);
        }
    });

});

//Get Record for a patient
router.get('/patient/:id/records', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    Patient.findById({ _id: req.params.id }, (err, patient) => {
        if (err) {
            console.log(err);
            res.json(err);
        }
        if (!patient) {
            console.log(`No patient with ID ${req.params.id} found`);
            res.status(404).json({ success: false, msg: "No Patient Found" })
        }
        else {
            Record.find({ patient_id: req.params.id }, (err, records) => {
                if (err) {
                    console.log(err);
                    res.json({ success: false, msg: "Something Went Wrong" });
                }
                if (!records) {
                    console.log('No Records Found')
                    res.status(404).json({ success: false, msg: "No Records Found" });
                }
                else {
                    console.log(`->Requested All Records for Patient [${req.params.id}]`)
                    res.json(records)
                }

            });

        }
    })

});

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
    });

    Patient.findById({ _id: req.params.id }, (err, patient) => {
        if (err) {
            console.log(err);
            res.json(err);
        }
        if (!patient) {
            console.log(`->No Patient with ID ${req.params.id} found`);
            res.status(404).json({ success: false, msg: "No Patient Found" })
        }
        else {
            newRecord.save((err, record) => {
                if (err) {
                    console.log(err);
                    res.json({ success: false, msg: 'Failed to add Record' })
                }
                else {
                    console.log(`->Record with ID [${record._id}] Added for Patient ID [${req.params.id}]`);
                    res.status(201).json({ success: true, msg: 'Record added Sucessfully' })
                }
            });

        }
    })


});

//Delete Record
router.delete('/patient/:pid/record/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    Patient.findById({ _id: req.params.pid }, (err, patient) => {
        if (err) {
            console.log(err);
            res.json(err);
        }
        if (!patient) {
            console.log(`->No Patient with ID [${req.params.pid}] Found`);
            res.status(404).json({ success: false, msg: "No Patient Found" })
        }
        else {
            Record.deleteOne({ _id: req.params.id }, (err, result) => {
                if (err) {
                    console.log(err);
                    res.json(err);
                }
                else {
                    console.log(`->Record ID [${req.params.id}] Deleted for Patient ID [${req.params.pid}]`)
                    res.json(result);
                }
            });
        }
    })

});

//Get Record By ID
router.get('/patient/:pid/record/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Patient.findById({ _id: req.params.pid }, (err, patient) => {
        if (err) {
            console.log(err);
            res.json(err);
        }
        if (!patient) {
            console.log(`->No Patient with ID [${req.params.pid}] Found`);
            res.status(404).json({ success: false, msg: "No Patient Found" })
        }
        else {
            Record.getRecordById({ _id: req.params.id }, (err, record) => {
                if (err) {
                    console.log(err);
                    res.json(err);
                }
                if (!record) {
                    console.log(`->No Record with ID [${req.params.id}] Found`)
                    res.status(404).json({ success: false, msg: 'No Record Found' })
                }
                else {
                    console.log(`->Single Record [${req.params.id}] Requested for Patient ID [${req.params.pid}]`)
                    res.json(record);
                }
            });
        }
    })

});

router.put('/patient/:pid/record/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    let record = ({
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
    });
    Patient.findById({ _id: req.params.pid }, (err, patient) => {
        if (err) {
            console.log(err);
            res.json(err);
        }
        if (!patient) {
            console.log(`->No Patient with ID [${req.params.pid}] Found`);
            res.status(404).json({ success: false, msg: "No Patient Found" })
        }
        else {
            Record.findByIdAndUpdate({ _id: req.params.id }, record, { new: true }, (err, record) => {
                if (err) {
                    console.log(err);
                    res.json({ success: false, msg: 'Failed to Update the Record' })

                }
                if (!record) {
                    console.log(`->No Record with ID [${req.params.id}] Found`);
                    res.status(404).json({ success: false, msg: 'No Record Found' })

                }
                else {
                    console.log(`->Record with ID [${req.params.id}] Updated For Patient [${req.params.pid}]`)
                    res.json({ success: true, msg: 'Record Updated Successfully' })
                }
            });
        }
    });

});

module.exports = router;