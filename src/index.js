const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

const url = 'https://select.nextech-api.com/api'
const nx_practice_id = '49cc8b62-2415-4fc4-9a2d-b2aeefa4f7d5'

app.use(express.json())

const {
    readJsonFile
} = require('./toJsonFile')

app.get('/patients', async (req, res) => {
    /*
        firt name = given ; last name = family
        email and cellphone = telecom
    */
   
    // if (res.status(403)) res.redirect('/authenticate/login')

    readJsonFile(async (err, data) => {
        const {
            query: { family, telecom }
        } = req

        const response = await axios.get(`${url}/Patient`, {
            headers: {
                'Authorization': `Bearer ${data.access_token}`,
                'nx-practice-id': `${nx_practice_id}`
            },
            params: {
                family, telecom
            }
        })
    
        res.json(response.data)
    })
})

const appointmentRoute = require('./routes/appointments')
const authRoute = require('./routes/authenticate')

app.use('/appointments', appointmentRoute)
app.use('/authenticate', authRoute)

app.listen(port)

