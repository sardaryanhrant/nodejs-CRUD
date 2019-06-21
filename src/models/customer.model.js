let mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const database = 'rest-api-workshop'
const password = 'passwoord'
const server = 'localhost:27017'
const user = 'admin'

mongoose.connect(`mongodb://${server}/${database}`,  { useNewUrlParser: true })

let CustomerShema = new mongoose.Schema({
    name: String,
    email: {
        type:       String,
        required:   true,
        unique:     true
    }
})

module.exports = mongoose.model('Customer', CustomerShema)