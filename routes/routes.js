const express = require('express');
const router = express.Router();
const Patient = require('../models/patients');
const User = require('../models/user');
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
            return res.json({ sucess: false, msg: 'user no find' });
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
        else {
            res.json(patients)
        }

    });
});

//Get Patient by ID
router.get('/patient/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Patient.findOne({ _id: req.params.id }, (err, patient) => {
        if (err) {
            res.json({ success: false, msg: "Patient doesnot exist" });
        }
        else {
            res.json(patient)
        }
    })
});

//Add Patient
router.post('/patient', passport.authenticate('jwt', { session: false }), (req, res, next) => {

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
            console.log(patient);
            res.status(200).json(patient);
        }
    });

});


//Update Patient
router.put('/patient/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {

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

    newPatient.update()
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

module.exports = router;