const mongoose = require('mongoose')


const citySchema = new mongoose.Schema({ 
        
        name: {
            type: String,
            required: true,
            unique: true
        },
        country: {
            type: String,
            required: true
        },
        imgage: {
            type: String,
        },
})

module.exports = mongoose.model('city', citySchema)