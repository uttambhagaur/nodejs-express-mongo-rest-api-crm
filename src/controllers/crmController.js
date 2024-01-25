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

export const getContact = (req, res) => {
  Contact.findById(req.params.contactId)
    .select("-__v") //exclude field from response
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

export const updateContact = (req, res) => {
  Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, {
    new: true,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.send(err));
};

export const deleteContact = (req, res) => {
  Contact.deleteOne({ _id: req.params.contactId })
    .then(() => {
      res.json(`Contact ${req.params.contactId} is deleted successfully`);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};
