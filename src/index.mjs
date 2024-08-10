const express = require('express');
const app = express();
const routes = require('./routes');
const config = require('./config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});




/*const app = express();

app.use(express.json()); //need to be called in every app

const loggingMiddleware = (request, response, next) => {
    console.log(`${request.method} - ${request.url}`);
    next();


};

const resolveIndexByUserId =() =>{

}

const PORT = process.env.PORT || 4000;

const patients = [
    { id: 1 , name: "Anthon", patientType: "new", patientStatus: "new", phone: "123456789", email: "abc@gmail.com"},
    { id: 2 , name: "Mark", patientType: "new", patientStatus: "new", phone: "123456789", email: "def@gmail.com"},
    { id: 3 , name: "John", patientType: "new", patientStatus: "new", phone: "123456789", email: "ghi@gmail.com"}
]

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});*/

/*app.get(
    "/", 
    (request, response,next) => {
        console.log("Base URL 1");
        next();
},
(request, response,next) => {
    console.log("Base URL 2");
    next();
},  
(request, response) => {
    response.status(201).send({msg: "Hello"});

});*/

/*app.get('/api/users', (request, response) => {
    console.log(request.query);
    const { query: { filter, value}, } = request;

    // when filter and value are undefined
    if (!filter && !value) return response.send(patients);
    if (!filter && !value) return response.send(
        patients.filter((user) => user[filter].includes(value))
    );
});
//POST*/
/*app.post('/api/users', (request, response, next) => {
    console.log(request.body);
    const {body} = request;
    const newUser= { id: patients[patients.length - 1].id + 1, ...body };
    patients.push(newUser);
    return response.status(201).send(newUser);
})*/

//GET

/*app.get('/api/users/:id', (request, response) => {
    console.log(request.params);
    const parsedId = parseInt(request.params.id);
    console.log(parsedId);
    if (isNaN(parsedId)) 
        return response.status(400).send({msg: "Bad Request. Invalid ID."});

    const findUser = patients.find((user) =>user.id === parsedId);
    if (!findUser) return response.sendStatus(404);
    return response.send(findUser);
});*/



//PUT - updating entuire resource
/*app.put('/api/users/:id', (request,response) => {
    const {
        body, 
        params:{id},
    } = request;

    const parsedId = parseInt(id);
    if (isNaN(parsedId)) return response.sendStatus(400);
    const findUserIndex = patients.findIndex(
        (user) =>user.id === parsedId
    );

    if (findUserIndex === -1) return response.sendStatus(404);

    patients[findUserIndex] = { id: parsedId,  ...body };
    return response.sendStatus(200);

});
//PATCH - updating one field at a time

//Delete*/

