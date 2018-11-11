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

