import express from "express";
import bodyParser from "body-parser"

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/", (req, res) => {
    items.push(req.body["item"]);
    console.log(items);
    res.render("index.ejs", {
        items: items
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

let items = [];