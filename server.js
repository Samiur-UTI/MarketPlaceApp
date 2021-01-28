const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"view","index.html"))
})


const PORT = 3000;
app.listen(PORT, () => console.log(`server is running at ${PORT}`));