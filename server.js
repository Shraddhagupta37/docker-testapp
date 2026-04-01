const express = require("express");
const app = express();
const path = require("path");
const MongoClient = require("mongodb").MongoClient;

const PORT = 5050;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const MONGO_URL = "mongodb://mongoadmin:secret@mongo:27017";
const client = new MongoClient(MONGO_URL);

let db;

// Connect once at startup
async function connectDB() {
    while (true) {
        try {
            await client.connect();
            console.log("Connected to MongoDB");
            db = client.db("user");
            break;
        } catch (err) {
            console.log("Mongo not ready, retrying in 2 sec...");
            await new Promise(res => setTimeout(res, 2000));
        }
    }
}

connectDB();

//GET all users
app.get("/getUsers", async (req, res) => {
    const data = await db.collection('users').find({}).toArray();

    res.send(data);
});

//POST new user
app.post("/addUser", async (req, res) => {
    const userObj = req.body;
    console.log(req.body);
   
    const data = await db.collection('users').insertOne(userObj);
    res.send("User added");

    console.log(data);
    console.log("data inserted in DB");
});


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});