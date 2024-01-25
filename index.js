import express, { request, response } from "express";
import routes from "./src/routes/crmRoutes";
import bodyParser from "body-parser";
import dbConfig from "./config/db.config";
import serverConfig from "./config/server.config";

const app = express();

// mongoose connection
dbConfig.connect();

//body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/", (request, response) => {
  response.send(
    `Node js application running on http://localhost:${serverConfig.port}`
  );
});

app.listen(serverConfig.port, () => {
  console.log(`Application running at http://localhost:${serverConfig.port}`);
});
