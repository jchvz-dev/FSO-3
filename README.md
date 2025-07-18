# Exercise 3.10 - 3.11 (Full Stack Phonebook)
base url: https://phonebook-backend-cris.onrender.com

## Requests
Retrieve all items:

[GET] https://phonebook-backend-cris.onrender.com/api/persons


Retrieve only specified ID item:

[GET] https://phonebook-backend-cris.onrender.com/api/persons/1


Delete specified ID item:

[DELETE] https://phonebook-backend-cris.onrender.com/api/persons/1


Create new item:

[POST] https://phonebook-backend-cris.onrender.com/api/persons

> Specify content as JSON and include in request's body using the following format:
> 
> {
    "name": "Gleify Brauley",
    "number": "123456789"
}
