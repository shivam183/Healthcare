const mongoose = require('mongoose');
const config = require('./database');
mongoose.Promise = global.Promise;
mongoose.set('debug', process.env.NODE_ENV == 'test');

function open() {
    return new Promise((resolve, reject) => {
        if (process.env.NODE_ENV == 'test') {
            let Mockgoose = require('mockgoose').Mockgoose;
            let mockgoose = new Mockgoose(mongoose);
            mockgoose.helper.setDbVersion('3.2.14');
            mockgoose.prepareStorage().then(() => {
                mongoose.connect(config.database, { useNewUrlParser: true }, (err, res) => {
                    if (err) {
                        return reject(err);
                    }
                    else {
                        console.log('Mockgoose Connected')
                    }
                    resolve();
                });
            }).catch(reject);
        }
        else {
            mongoose.connect(config.database, { useNewUrlParser: true }, (err, res) => {
                if (err) return reject(err);
                else {
                    console.log('Mongoose Connected')
                }
                resolve();
            })
        }
    })
}

function close() {
    return mongoose.disconnect()
}

module.exports = { open, close }