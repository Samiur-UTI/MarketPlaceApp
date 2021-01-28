const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req,res) => {
    res.render("index")
    //res.sendFile(path.join(__dirname,"view","index.html"))
})
app.post("/", (req,res) => {
    console.log("Data: ", req.body)
    res.json({message: "This is how we email!"})
})


const PORT = 3000;
app.listen(PORT, () => console.log(`server is running at ${PORT}`));