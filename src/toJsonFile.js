const fs = require('fs'); // file system
const path = require('path');
const express = require('express')
// const app = express()
// const port = 3000

const filePath = path.resolve(__dirname, 'localData.json');

// Read and parse the JSON file
const checkJSONFileForKeys = (requiredKeys) => {
    try {
        const rawData = fs.readFileSync(filePath);
        const jsonData = JSON.parse(rawData);

        // Check for the required keys
        return requiredKeys.every(key => key in jsonData);
    } catch (error) {
        console.error('Error reading or parsing file:', error);
        return false;
    }
};

// Function to save data to a JSON file
function saveToJsonFile(data) {
    // Convert the data object to a JSON string
    const jsonData = JSON.stringify(data, null, 2);  // `null, 2` adds indentation for readability

    // Write the JSON data to the file, overwriting the file if it exists
    fs.writeFile(filePath, jsonData, (err) => {
        if (err) {
            console.error('Error writing to JSON file:', err);
        } else {
            console.log('Data saved to JSON file successfully.');
        }
    });
}

// Function to update JSON file
function updateJsonFile(newData) {
    // Read the current content of the file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            return;
        }

        // Parse the existing JSON data
        let jsonData = JSON.parse(data);

        // Modify the JSON data
        Object.assign(jsonData, newData);  // Merges newData into the existing jsonData

        // Write the updated JSON data back to the file
        fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                console.error('Error writing to JSON file:', err);
            } else {
                console.log('JSON file updated successfully.');
            }
        });
    });
}

function readJsonFile(callback) {
    fs.readFile(filePath, 'utf8', (err, jsonData) => {
        if (err) {
            // If there’s an error, return it via the callback
            return callback(err, null);
        }

        // If successful, parse the JSON and return it via the callback
        try {
            const data = JSON.parse(jsonData);
            callback(null, data);
        } catch (parseError) {
            // Handle JSON parsing errors
            callback(parseError, null);
        }
    });
}

// app.get('/sample/save', (req, res) => {
//     const {
//         query: { firstname, lastname }
//     } = req

//     const data = {
//         firstname: firstname,
//         lastname: lastname
//     }

//     saveToJsonFile(data)
//     console.log(firstname, lastname)

//     res.json(data)
// })

// app.get('/sample/update', (req, res) => {
//     const {
//         query: { firstname, lastname }
//     } = req

//     const data = {
//         firstname: firstname,
//         lastname: lastname
//     }

//     updateJsonFile(data)
//     console.log(firstname, lastname)

//     res.json(data)
// })

// app.get('/sample/getlist', (req, res) => {

//     readJsonFile((err, data) => {
//         if (err) return;

//         console.log(data.firstname)

//         res.json(data)
//     })

// })

// app.get('/expire', (req, res) => {
//     // 1723909147
//     // const expiryDate = new Date()
//     // expiryDate.getTime(1723909147 * 1000)

//     var timestamp = new Date(1723909147 * 1000).getTime();
//     var formattedDate = new Date(timestamp);
//     console.log(formattedDate);

//     // console.log(expiryDate)

//     res.send(formattedDate)
// })

// app.get('/convert-time', (req, res) => {
//     const dateTime = '2024-08-17T15:39:07.000Z'
//     const [splitDate, splitTime] = dateTime.split('T');

//     console.log(splitTime.split('Z')[0])
//     console.log(splitDate)

//     res.send(splitTime)
// })

// app.get('/sample', (req, res) => {
//     if (res.status(200)) res.redirect('/appointment/login')
// })

// app.listen(port)

module.exports = {
    saveToJsonFile, updateJsonFile, readJsonFile, checkJSONFileForKeys
}