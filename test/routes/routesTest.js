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



/*
var newUser = new User({
    name: "test",
    username: "test",
    email: "test@test.com",
    password: "test"
})
describe('When POST to add User', () => {

    it('should Add a user', (done) => {
        chai.request(Patient_URI)
            .post('/register')
            .type('form')
            .send(User.addUser(newUser, (err, user) => { console.log(err) }))
            .then((res) => {
                //expect(res.name).to.equal('Test')
                expect(res).to.have.status(201);
                done();
            })
            .catch((err) => done(err))

    })
})*/


/*
describe('When POST user to Authenticate', () => {
    it('should return JWT', (done) => {
        chai.request(Patient_URI)
            .post('/authenticate')
            .send({ username: "test", password: "test" })
            .then((res) => {
                expect(res).to.have.status(403);
            }).then(() => done()).catch((err) => done(err));
    })
})*/

describe('Patient Test', () => {
    describe('When GET all patient request with no Token', () => {
        it('should return HTTP 401', (done) => {
            chai.request(Patient_URI)
                .get('/patients')
                .then((res) => {
                    expect(res).to.have.status(401);
                }).then(done()).catch(err => done(err));
        });
    });

});

