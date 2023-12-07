import "dotenv/config";
import express from "express";
import routes from "./routes.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use("/todos", routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(process.env.DATABASE_URL);
});
