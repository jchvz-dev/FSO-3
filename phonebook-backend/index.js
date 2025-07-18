const express = require('express')
const morgan = require('morgan')
const Contact = require('./models/contact')

const app = express()
app.use(express.json())
app.use(express.static('dist'))
// app.use(morgan('tiny'))
morgan.token('body', (req) => JSON.stringify(req.body))
app.use(morgan(':method :url :status - :response-time ms - :body'))
  
app.get('/api/persons', (request, response) => {
    Contact.find({}).then(contacts => {
        response.json(contacts)
    })
})

app.get('/info', (request, response) => {
    const now = new Date()
    response.send(`
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${now}</p>
    `)
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = persons.find(person => person.id === id)
    
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
})
  
app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({ 
            error: 'content missing' 
        })
    }

    const contact = new Contact({
        name: body.name,
        number: body.number,
    })
    
    contact.save().then(result => {
        console.log('contact saved!')
        response.json(contact)
    })
})
  
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})