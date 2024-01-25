import {
  addNewContact,
  deleteContact,
  getContact,
  getContacts,
  updateContact,
} from "../controllers/crmController";

const routes = (app) => {
  app.route("/contact").get(getContacts).post(addNewContact);

  app
    .route("/contact/:contactId")
    .get(getContact)
    .put(updateContact)
    .delete(deleteContact);
};
export default routes;
