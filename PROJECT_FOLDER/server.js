const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

var corOptions = {
    origin: 'https://localhost:8081'
}

// middleware

app.use(cors(corOptions))

// app.use(bodyParser.json());

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// routers
const employee_router = require('./routes/employeeRouter.js')
const employeeProfile_router = require('./routes/employeeProfileRouter.js')
const education_router = require('./routes/educationRouter.js')
const employeeFamily_router = require('./routes/employeeFamilyRouter.js')

app.use('/api/employees', employee_router)
app.use('/api/employeeProfiles', employeeProfile_router)
app.use('/api/educations', education_router)
app.use('/api/employeeFamilys', employeeFamily_router)

// testing api

app.get('/', (req, res) => {
    res.json({ message: 'hello from api' })
})

// port

const PORT = process.env.PORT || 8080

// server
app.listen(PORT, ()=> {
    console.log(`server is runnning on port ${PORT}`)
})