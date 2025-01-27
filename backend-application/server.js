import express from "express";
import cors from "cors";
import mysql from "mysql";
import http from "http";

const app = express();
const server = http.createServer(app);

app.use(cors({
    credentials : true,
    origin: "*"
}));

app.use(express.json());

let studentInformation = [
    {
        name : "John",
        age: 24,
        location: "Mumbai"
    },
    {
        name : "William",
        age: 25,
        location: "Delhi"
    },
]

//http://localhost:5000/api/load/user
app.get("/api/load/user", (request, response) => {
  response.status(200).send(studentInformation);
});

//http://localhost:5000/api/create/user
app.post("/api/create/user", (request, response) => {
    console.log(request.body);
});

const portNumber = 5000;
server.listen(portNumber, () => {
    console.log("Node JS is running in port ", portNumber);
});

/*
Status Code:
2x - 200, 201, 202, 204 (Sucess Code)
4x - 400, 401, 404 (Error Code - Client Error)
5x - 500, 501, 502 (Error Code - Server Error)
*/