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
})


