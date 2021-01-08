import mongoose from 'mongoose'

// Mongo connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/contacts', {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
})

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  company: {
    type: String,
  },
})

const Contacts = mongoose.model('contacts', contactSchema)

export { Contacts }
