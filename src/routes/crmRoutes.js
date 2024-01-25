import { addNewContact } from "../controllers/crmController";

const routes = (app) => {
  app
    .route("/contact")
    .get((req, res) => {
      res.send("Get request successful");
    })
    .post(addNewContact);

  app
    .route("/contact/:contactId")
    .put((req, res) => {
      res.send("Put request successful");
    })
    .delete((req, res) => {
      res.send("Delete request successful");
    });
};
export default routes;
