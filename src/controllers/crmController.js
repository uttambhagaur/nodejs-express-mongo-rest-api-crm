import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model("Contact", ContactSchema);

export const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);

  newContact
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
  // old way not supported
  //   newContact.save((err, contact) => {
  //     if (err) {
  //       res.send(err);
  //     }
  //     res.json(contact);
  //   });
};

export const getContacts = (req, res) => {
  Contact.find({})
    .select("firstName lastName company phone")
    .catch((err) => {
      res.send(err);
    })
    .then((data) => {
      res.json(data);
    });
};
