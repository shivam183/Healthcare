process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const Mockgoose = require('mockgoose').Mockgoose;
const config = require('../../config/database');
const routes = require('../../routes/routes');
const assert = require('chai').assert;
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const patient = require('../../models/patients');
const User = require('../../models/user');
var mockgoose = new Mockgoose(mongoose);
var server = require('../../server')
const conn = require('../../config/databaseConnection');


const Patient_URI = 'http://localhost:3000/api'

chai.use(chaiHttp);

before((done) => {
    conn.open().then(() => done()).catch(done);
})

after((done) => {

    conn.close().then(() => done()).catch(done);
})

var token = null;
var patientID = null;
var Patient_For_Record = null;
var RecordID = null;
var Random_NoN_valid_ID = new mongoose.mongo.ObjectId();

describe('===>>Authentication Test', () => {
    describe('1) When POST to add User', () => {
        it('should Add a user', (done) => {
            chai.request(Patient_URI)
                .post('/register')
                .send({
                    name: "test",
                    username: "test",
                    email: "test@test.com",
                    password: "test"
                })
                .then((res) => {
                    expect(res).to.have.status(201);
                    done();
                })
                .catch((err) => done(err))

        })
    })

    describe('2) When POST to add Invalid User', () => {
        it('should return 422 status', (done) => {
            chai.request(Patient_URI)
                .post('/register')
                .send({
                    name: "test",
                    email: "test@test.com",
                    password: "test"
                })
                .then((res) => {
                    expect(res).to.have.status(422);
                    done();
                })
                .catch((err) => done(err));
        })
    })

    describe('3) When POST wrong user to Authenticate', () => {
        it('should return 404 status', (done) => {
            chai.request(Patient_URI)
                .post('/authenticate')
                .send({ username: "any", password: "any" })
                .then((res) => {
                    expect(res).to.have.status(404);
                    done();
                }).catch((err) => done(err));
        })
    })
    describe('4) When POST user with valid credentials to Authenticate', () => {
        it('should return 200 status', (done) => {
            chai.request(Patient_URI)
                .post('/authenticate')
                .send({ username: "test", password: "test" })
                .then((res) => {
                    expect(res).to.have.status(200)
                    token = res.body.token;
                    done();
                }).catch((err) => done(err));
        })
    })
    describe('5) When POST user with Invalid credentials to Authenticate', () => {
        it('should return 422 status', (done) => {
            chai.request(Patient_URI)
                .post('/authenticate')
                .send({ username: "test" })
                .then((res) => {
                    expect(res).to.have.status(422)
                    done();
                }).catch((err) => done(err));
        })
    })
})

describe('===>>Patient Test', () => {
    describe('1) When GET all patient request with no Token', () => {
        it('should return 401 status', (done) => {
            chai.request(Patient_URI)
                .get('/patients')
                .then((res) => {
                    expect(res).to.have.status(401);
                    done();
                }).catch(err => done(err));
        });
    });

    describe('2) When GET single patient request with no Token', () => {
        it('should return 401 status', (done) => {
            chai.request(Patient_URI)
                .get('/patient/' + patientID)
                .then((res) => {
                    expect(res).to.have.status(401);
                    done();
                }).catch(err => done(err));
        });
    });

    describe('3) When POST patient with no Token', () => {
        it('should return 401 status', (done) => {
            chai.request(Patient_URI)
                .post('/patients')
                .send({
                    first_name: "Test",
                    last_name: "Test",
                    DOB: "18-03-1997",
                    email: "test@test.com",
                    address: "1 yonge street",
                    city: "Toronto",
                    province: "ON",
                    postal_code: "M9W6B4",
                    phone: "6479368241",
                    department: "test",
                    doctor: "test"
                })
                .then((res) => {
                    expect(res).to.have.status(401);
                    done();
                })
                .catch(err => done(err));
        })
    })

    describe('4) When PUT patient with no Token', () => {
        it('should return 401 status', (done) => {
            chai.request(Patient_URI)
                .put('/patient/' + patientID)
                .send({
                    first_name: "Test",
                    last_name: "Test",
                    DOB: "18-03-1997",
                    email: "test@test.com",
                    address: "1 yonge street",
                    city: "Toronto",
                    province: "ON",
                    postal_code: "M9W6B4",
                    phone: "6479368241",
                    department: "test",
                    doctor: "test"
                })
                .then((res) => {
                    expect(res).to.have.status(401);
                    done();
                })
                .catch(err => done(err));
        })
    })

    describe('5) When DEL patient with no Token', () => {
        it('should return 401 status', (done) => {
            chai.request(Patient_URI)
                .del('/patient/' + patientID)
                .then((res) => {
                    expect(res).to.have.status(401);
                    done();
                })
                .catch(err => done(err));
        })
    })

    describe('6) When POST patient with Token', () => {
        it('should return add Patient', (done) => {
            chai.request(Patient_URI)
                .post('/patients')
                .set('Authorization', token)
                .send({
                    first_name: "Test",
                    last_name: "Test",
                    DOB: "18-03-1997",
                    email: "test@test.com",
                    address: "1 yonge street",
                    city: "Toronto",
                    province: "ON",
                    postal_code: "M9W6B4",
                    phone: "6479368241",
                    department: "test",
                    doctor: "test"
                })
                .then((res) => {
                    expect(res.body.success).to.equal(true);
                    expect(res).to.have.status(201);
                    done();
                })
                .catch(err => done(err));
        })
    })

    describe('7) When POST patient with invalid data', () => {
        it('should return 422 status', (done) => {
            chai.request(Patient_URI)
                .post('/patients')
                .set('Authorization', token)
                .send({
                    first_name: "Test",
                    last_name: "Test",
                    DOB: "18-03-1997",
                    email: "test@test.com",
                    address: "1 yonge street",
                    city: "Toronto",
                    postal_code: "M9W6B4",
                    phone: "6479368241",
                    department: "test",
                    doctor: "test"
                })
                .then((res) => {
                    expect(res).to.have.status(422);
                    done();
                })
                .catch(err => done(err));
        })
    })

    describe('8) When GET all patient with Token', () => {
        it('should return all Patients', (done) => {
            chai.request(Patient_URI)
                .get('/patients')
                .set('Authorization', token)
                .then((res) => {
                    patientID = res.body[0]._id;
                    expect(res).to.have.status(200);
                    done();
                })
                .catch(err => done(err));
        })
    })

    describe('9) When GET single patient with Token', () => {
        it('should return Single Patient', (done) => {
            chai.request(Patient_URI)
                .get('/patient/' + patientID)
                .set('Authorization', token)
                .then((res) => {
                    expect(res).to.have.status(200);
                    done();
                })
                .catch(err => done(err));
        })
    })

    describe('10) When PUT patient with Token', () => {
        it('should update Patient', (done) => {
            chai.request(Patient_URI)
                .put('/patient/' + patientID)
                .set('Authorization', token)
                .send({
                    first_name: "Test",
                    last_name: "Test",
                    DOB: "18-03-1997",
                    email: "test@test.com",
                    address: "1 yonge street",
                    city: "Toronto",
                    province: "ON",
                    postal_code: "M9W6B4",
                    phone: "6479368241",
                    department: "test",
                    doctor: "test"
                })
                .then((res) => {
                    expect(res.body.success).to.equal(true);
                    expect(res).to.have.status(200);
                    done();
                })
                .catch(err => done(err));
        })
    })

    describe('11) When PUT patient with invalid data', () => {
        it('should return 422 status', (done) => {
            chai.request(Patient_URI)
                .put('/patient/' + patientID)
                .set('Authorization', token)
                .send({
                    first_name: "Test",
                    last_name: "Test",
                    DOB: "18-03-1997",
                    email: "test@test.com",
                    address: "1 yonge street",
                    city: "Toronto",
                    postal_code: "M9W6B4",
                    phone: "6479368241",
                    department: "test",
                    doctor: "test"
                })
                .then((res) => {
                    expect(res).to.have.status(422);
                    done();
                })
                .catch(err => done(err));
        })
    })
    describe('12) When DEL patient with Token', () => {
        it('should return 200 status', (done) => {
            chai.request(Patient_URI)
                .del('/patient/' + patientID)
                .set('Authorization', token)
                .then((res) => {
                    expect(res).to.have.status(200);
                    done();
                })
                .catch(err => done(err));
        })
    })

});

describe('===>>Record', () => {

    before((done => {
        chai.request(Patient_URI)
            .post('/patients')
            .set('Authorization', token)
            .send({
                first_name: "Test",
                last_name: "Test",
                DOB: "18-03-1997",
                email: "test@test.com",
                address: "1 yonge street",
                city: "Toronto",
                province: "ON",
                postal_code: "M9W6B4",
                phone: "6479368241",
                department: "test",
                doctor: "test"
            })
            .then((res) => {
                expect(res.body.success).to.equal(true);
                expect(res).to.have.status(201);
            })
        chai.request(Patient_URI)
            .get('/patients')
            .set('Authorization', token)
            .then((res) => {
                Patient_For_Record = res.body[0]._id;
                done();
            }).catch(err => done(err));

    }))

    describe('1) When GET all records for a patient request with no Token', () => {
        it('should return 401 status', (done) => {
            chai.request(Patient_URI)
                .get('/patient/' + patientID + '/records')
                .then((res) => {
                    expect(res).to.have.status(401);
                    done();
                }).catch(err => done(err));
        });
    });

    describe('2) When GET single record for a patient request with no Token', () => {
        it('should return 401 status', (done) => {
            chai.request(Patient_URI)
                .get('/patient/' + Patient_For_Record + '/record/' + RecordID)
                .then((res) => {
                    expect(res).to.have.status(401);
                    done();
                }).catch(err => done(err));
        });
    });

    describe('3) When POST record for a patient with no Token', () => {
        it('should return 401 status', (done) => {
            chai.request(Patient_URI)
                .post('/patient/' + patientID + '/records')
                .send({
                    patient_id: patientID,
                    date: "2018-10-20",
                    nurse_name: "test",
                    type: "TEST",
                    category: "BLOOD",
                    reading1: "11",
                    reading2: "-",
                    food_allergy: "NO",
                    bp: "17/25",
                    diabetic: "NO",
                    heart_disease: "NO",
                    surgery: "YES",
                    accident: "YES"
                })
                .then((res) => {
                    expect(res).to.have.status(401);
                    done();
                })
                .catch(err => done(err));
        })
    })

    describe('4) When PUT patient with no Token', () => {
        it('should return 401 status', (done) => {
            chai.request(Patient_URI)
                .put('/patient/' + Patient_For_Record + '/record/' + RecordID)
                .send({
                    patient_id: Patient_For_Record,
                    date: "2018-10-20",
                    nurse_name: "test",
                    type: "TEST",
                    category: "BLOOD",
                    reading1: "11",
                    reading2: "-",
                    food_allergy: "NO",
                    bp: "17/25",
                    diabetic: "NO",
                    heart_disease: "NO",
                    surgery: "YES",
                    accident: "YES"
                })
                .then((res) => {
                    expect(res).to.have.status(401);
                    done();
                })
                .catch(err => done(err));
        })
    })

    describe('5) When DEL patient with no Token', () => {
        it('should return 401 status', (done) => {
            chai.request(Patient_URI)
                .del('/patient/' + Patient_For_Record)
                .then((res) => {
                    expect(res).to.have.status(401);
                    done();
                })
                .catch(err => done(err));
        })
    })

    describe('6) When POST record for patient with Token', () => {
        it('should add Record', (done) => {
            chai.request(Patient_URI)
                .post('/patient/' + Patient_For_Record + '/records')
                .set('Authorization', token)
                .send({
                    patient_id: Patient_For_Record,
                    date: "2018-10-20",
                    nurse_name: "test",
                    type: "TEST",
                    category: "BLOOD",
                    reading1: "11",
                    reading2: "-",
                    food_allergy: "NO",
                    bp: "17/25",
                    diabetic: "NO",
                    heart_disease: "NO",
                    surgery: "YES",
                    accident: "YES"
                })
                .then((res) => {
                    expect(res.body.success).to.equal(true);
                    expect(res).to.have.status(201);
                    done();
                })
                .catch(err => done(err));
        })
    })

    describe('7) When GET all records for patient with Token', () => {
        it('should return get all Records', (done) => {
            chai.request(Patient_URI)
                .get('/patient/' + Patient_For_Record + '/records')
                .set('Authorization', token)
                .then((res) => {
                    RecordID = res.body[0]._id;
                    expect(res).to.have.status(200);
                    done();
                })
                .catch(err => done(err));
        })
    })

    describe('8) When GET single record for patient with Token', () => {
        it('should return single Record', (done) => {
            chai.request(Patient_URI)
                .get('/patient/' + Patient_For_Record + '/record/' + RecordID)
                .set('Authorization', token)
                .then((res) => {
                    expect(res).to.have.status(200);
                    done();
                })
                .catch(err => done(err));
        })
    })

    describe('9) When PUT on record for patient with Token', () => {
        it('should update single Record', (done) => {
            chai.request(Patient_URI)
                .put('/patient/' + Patient_For_Record + '/record/' + RecordID)
                .set('Authorization', token)
                .send({
                    patient_id: Patient_For_Record,
                    date: "2018-10-20",
                    nurse_name: "test",
                    type: "TEST",
                    category: "BLOOD",
                    reading1: "11",
                    reading2: "-",
                    food_allergy: "NO",
                    bp: "17/25",
                    diabetic: "NO",
                    heart_disease: "NO",
                    surgery: "YES",
                    accident: "YES"
                })
                .then((res) => {
                    expect(res).to.have.status(200);
                    done();
                })
                .catch(err => done(err));
        })
    })
    describe('10) When POST record for patient with invalid data', () => {
        it('should return 422 Status', (done) => {
            chai.request(Patient_URI)
                .post('/patient/' + Patient_For_Record + '/records')
                .set('Authorization', token)
                .send({
                    patient_id: Patient_For_Record,
                    date: "2018-10-20",
                    nurse_name: "test",
                    type: "TEST",
                    category: "BLOOD",
                    reading1: "11",
                    food_allergy: "NO",
                    bp: "17/25",
                    diabetic: "NO",
                    heart_disease: "NO",
                    surgery: "YES",
                    accident: "YES"
                })
                .then((res) => {
                    expect(res).to.have.status(422);
                    done();
                })
                .catch(err => done(err));
        })
    })

    describe('11) When PUT record for patient with invalid data', () => {
        it('should return 422 Status', (done) => {
            chai.request(Patient_URI)
                .put('/patient/' + Patient_For_Record + '/record/' + RecordID)
                .set('Authorization', token)
                .send({
                    patient_id: Patient_For_Record,
                    date: "2018-10-20",
                    nurse_name: "test",
                    type: "TEST",
                    category: "BLOOD",
                    reading1: "11",
                    food_allergy: "NO",
                    bp: "17/25",
                    diabetic: "NO",
                    heart_disease: "NO",
                    surgery: "YES",
                    accident: "YES"
                })
                .then((res) => {
                    expect(res).to.have.status(422);
                    done();
                })
                .catch(err => done(err));
        })
    })

    describe('12) When GET all records for patient with Wrong PatientID', () => {
        it('should return 404 Status', (done) => {
            chai.request(Patient_URI)
                .get('/patient/' + Random_NoN_valid_ID + '/records')
                .set('Authorization', token)
                .then((res) => {
                    expect(res.body.success).to.equal(false);
                    expect(res).to.have.status(404);
                    done();
                })
                .catch(err => done(err));
        })
    })
    describe('13) When GET single record for patient with Wrong PatientID', () => {
        it('should return 404 Status', (done) => {
            chai.request(Patient_URI)
                .get('/patient/' + Random_NoN_valid_ID + '/record/' + RecordID)
                .set('Authorization', token)
                .then((res) => {
                    expect(res.body.success).to.equal(false);
                    expect(res).to.have.status(404);
                    done();
                })
                .catch(err => done(err));
        })
    })
    describe('14) When POST single record for patient with Wrong PatientID', () => {
        it('should return 404 Status', (done) => {
            chai.request(Patient_URI)
                .post('/patient/' + Random_NoN_valid_ID + '/records')
                .set('Authorization', token)
                .send({
                    patient_id: Random_NoN_valid_ID,
                    date: "2018-10-20",
                    nurse_name: "test",
                    type: "TEST",
                    category: "BLOOD",
                    reading1: "11",
                    reading2: "-",
                    food_allergy: "NO",
                    bp: "17/25",
                    diabetic: "NO",
                    heart_disease: "NO",
                    surgery: "YES",
                    accident: "YES"
                })
                .then((res) => {
                    expect(res.body.success).to.equal(false);
                    expect(res).to.have.status(404);
                    done();
                })
                .catch(err => done(err));
        })
    })
    describe('15) When PUT single record for patient with Wrong PatientID', () => {
        it('should return 404 Status', (done) => {
            chai.request(Patient_URI)
                .post('/patient/' + Random_NoN_valid_ID + '/records')
                .set('Authorization', token)
                .send({
                    patient_id: Random_NoN_valid_ID,
                    date: "2018-10-20",
                    nurse_name: "test",
                    type: "TEST",
                    category: "BLOOD",
                    reading1: "11",
                    reading2: "-",
                    food_allergy: "NO",
                    bp: "17/25",
                    diabetic: "NO",
                    heart_disease: "NO",
                    surgery: "YES",
                    accident: "YES"
                })
                .then((res) => {
                    expect(res.body.success).to.equal(false);
                    expect(res).to.have.status(404);
                    done();
                })
                .catch(err => done(err));
        })
    })
    describe('16) When DEL single record for patient with Wrong PatientID', () => {
        it('should return 404 Status', (done) => {
            chai.request(Patient_URI)
                .del('/patient/' + Random_NoN_valid_ID + '/record/' + RecordID)
                .set('Authorization', token)
                .then((res) => {
                    expect(res.body.success).to.equal(false);
                    expect(res).to.have.status(404);
                    done();
                })
                .catch(err => done(err));
        })
    })
    describe('17) When DEL single record for patient', () => {
        it('should return 404 Status', (done) => {
            chai.request(Patient_URI)
                .del('/patient/' + Patient_For_Record + '/record/' + RecordID)
                .set('Authorization', token)
                .then((res) => {
                    expect(res.body.ok).to.equal(1);
                    expect(res).to.have.status(200);
                    done();
                })
                .catch(err => done(err));
        })
    })
})

