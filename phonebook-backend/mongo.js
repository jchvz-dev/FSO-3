const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('missing password as argument')
    process.exit(1)
} else if (process.argv.length > 5) {
    console.log('too many arguments')
    process.exit(1)
} else if (process.argv.length === 4) {
    console.log('missing arguments (name || number)')
    process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://admin:${password}@fso.sohze4q.mongodb.net/?retryWrites=true&w=majority&appName=FSO`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const contactSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Contact = mongoose.model('Contact', contactSchema)

if (process.argv.length === 3) {

    console.log('phonebook:')

    Contact.find({}).then(result => {
        result.forEach(contact => {
            console.log(contact)
        })
        mongoose.connection.close()
    })

} else {

    const name = process.argv[3]
    const number = process.argv[4]
    const contact = new Contact({
        name: name,
        number: number,
    })
    
    contact.save().then(result => {
        console.log('contact saved!')
        mongoose.connection.close()
    })

}