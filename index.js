import express, { request, response } from "express";

const app = express();
const PORT = 3000;

app.get("/", (request, response) => {
  response.send(`Node js application running on http://localhost:${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Application running at http://localhost:${PORT}`);
});
