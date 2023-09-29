import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    items: items,
  });
});

app.post("/", (req, res) => {
  items.push(req.body["item"]);
  console.log(items);
  res.render("index.ejs", {
    items: items,
  });
});

app.get("/work", (req, res) => {
  res.render("work.ejs", {
    itemsWork: itemsWork,
  });
});

app.post("/work", (req, res) => {
  itemsWork.push(req.body["item"]);
  console.log(itemsWork);
  res.render("work.ejs", {
    itemsWork: itemsWork,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

let items = [];
let itemsWork = [];
