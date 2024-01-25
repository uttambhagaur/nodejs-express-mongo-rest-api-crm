import { addNewContact, getContacts } from "../controllers/crmController";

const routes = (app) => {
  app.route("/contact").get(getContacts).post(addNewContact);

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
