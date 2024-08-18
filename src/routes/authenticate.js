const express = require('express')
const router = express.Router()
const axios = require('axios')
const qs = require('querystring')

const authURL = 'https://login.microsoftonline.com/nextech-api.com/oauth2/token'

router.use(express.urlencoded({ extended:true }))

const { 
    saveToJsonFile, 
    updateJsonFile, 
    readJsonFile,
    checkJSONFileForKeys
} = require('../toJsonFile')

router.get('/login', async (req, res) => {
    const data = {
        grant_type: 'password',
        client_id: '7d6097cb-f0e7-43f7-a9eb-52ecd1bad6b5',
        username: 'd7a6b4f1-3bb0-431b-9077-60ad6b18ed20@nextech-api.com',
        password: 'A!Wellness1$',
        resource: 'https://select.nextech-api.com/api',
    }

    const response = await axios.post(authURL, qs.stringify(data), {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        }
    })   

    let authenticate = {
        expires_on: response.data.expires_on,
        not_before: response.data.not_before,
        access_token: response.data.access_token,
        refresh_token: response.data.refresh_token
    }

    const hasKeys = checkJSONFileForKeys(Object.keys(authenticate))

    if (hasKeys) {
        updateJsonFile(authenticate)
    } else {
        saveToJsonFile(authenticate)
    }

    res.json(response.data)
})

router.get('/refresh', async (req, res) => {
    readJsonFile(async (err, data) => {
        if (err) return;

        let refresh_data = {
            grant_type: 'refresh_token',
            client_id: '7d6097cb-f0e7-43f7-a9eb-52ecd1bad6b5',
            refresh_token: data.refresh_token
        }

        const response = await axios.post(authURL, qs.stringify(refresh_data), {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        })  

        let authenticate = {
            expires_on: response.data.expires_on,
            not_before: response.data.not_before,
            access_token: response.data.access_token,
            refresh_token: response.data.refresh_token
        }
        
        updateJsonFile(authenticate)

        res.json(authenticate)
    })
})

module.exports = router