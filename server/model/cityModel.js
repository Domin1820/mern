const mongoose = require('mongoose')


const CitySchema = new mongoose.Schema({ 
    name: {
        type: String,
    },
    country: {
        type: String,
    },
    image: {
        type: String,
    }
})

module.exports = mongoose.model('city', CitySchema)