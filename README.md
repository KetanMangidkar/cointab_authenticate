# cointab_authenticate / backend

Backend API for a Authentication for website, built using NodeJS, Express, Mongoose, MongoDB.

## Documentation for API?

## For start the server go to backend folder and run command "npm start",

## Register
- Method : POST
- URL : http://localhost:9555/user/register
- req body example : {"name": "ketan", "email" : "ketan@gmail.com", "password": "ketan@123"}
- In response you will get a bearer token that you have to use in all requests

## Login
- Method : POST
- URL : http://localhost:9555/user/login
- req body example : {"email" : "ketan@gmail.com", "password": "ketan@123"}
- In response you will get a bearer token that you have to use in all requests
