import express, { request, response } from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:37017/CRMdb", { useNewurlParser: true });

//body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/", (request, response) => {
  response.send(`Node js application running on http://localhost:${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Application running at http://localhost:${PORT}`);
});
