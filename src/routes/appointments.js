const express = require('express')
const axios = require('axios')
const router = express.Router()

const {
    readJsonFile
} = require('../toJsonFile')

const url = 'https://select.nextech-api.com/api'
const nx_practice_id = '49cc8b62-2415-4fc4-9a2d-b2aeefa4f7d5'

router.get('/appointment-type', async (req, res) => {
    readJsonFile(async (err, data) => { 
        const response = await axios.get(`${url}/appointment-type`, {
            headers: {
                'Authorization': `Bearer ${data.access_token}`,
                'nx-practice-id': `${nx_practice_id}`
            }
        })

        res.json(response.data)
    })
})

router.get('/appointment-purpose', async (req, res) => {
    readJsonFile(async (err, data) => {
        const response = await axios.get(`${url}/appointment-purpose`, {
            headers: {
                'Authorization': `Bearer ${data.access_token}`,
                'nx-practice-id': `${nx_practice_id}`
            }
        })
    
        res.json(response.data)
    })
})

router.get('/appointment-status', async (req, res) => {
    readJsonFile(async (err, data) => {
        const response = await axios.get(`${url}/appointment-status`, {
            headers: {
                'Authorization': `Bearer ${data.access_token}`,
                'nx-practice-id': `${nx_practice_id}`
            }
        })
    
        res.json(response.data)
    })
})

module.exports = router