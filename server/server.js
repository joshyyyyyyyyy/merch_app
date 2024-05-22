const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

//localhost:3000
//localhost:4000

app.get("/adduser", (req, res) => {
    console.log(req.query);
    res.send("Response Received " + JSON.stringify(req.query));
});

app.listen(4000, () => console.log("server on localhost:4000"));
