const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/f8_education_dev');
        console.log('Connect successfully');
    } catch (error) {
        console.log('connect fail');
    }
}
module.exports = { connect };
