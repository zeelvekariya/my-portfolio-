const Contact = require("../models/Contact");

// Create a new contact
exports.createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Contact saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error saving contact" });
    const Contact = require("../models/Contact");

    // Create a new contact
    exports.createContact = async (req, res) => {
      try {
        const { name, email, message } = req.body;

        const newContact = new Contact({ name, email, message });
        await newContact.save();

        res.status(201).json({ message: "Contact saved successfully" });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error saving contact" });
      }
    };

    // Get all contacts
    exports.getAllContacts = async (req, res) => {
      try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error retrieving contacts" });
      }
    };

    // Get contact by ID
    exports.getContactById = async (req, res) => {
      try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
          return res.status(404).json({ message: "Contact not found" });
        }
        res.status(200).json(contact);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error retrieving contact" });
      }
    };

    // Update contact by ID
    exports.updateContact = async (req, res) => {
      try {
        const updatedContact = await Contact.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true } // Return the updated contact
        );
        if (!updatedContact) {
          return res.status(404).json({ message: "Contact not found" });
        }
        res.status(200).json(updatedContact);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error updating contact" });
      }
    };

    // Delete contact by ID
    exports.deleteContact = async (req, res) => {
      try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        if (!deletedContact) {
          return res.status(404).json({ message: "Contact not found" });
        }
        res.status(200).json({ message: "Contact deleted successfully" });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error deleting contact" });
      }
    };
  }
};

// Get all contacts
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error retrieving contacts" });
  }
};

// Get contact by ID
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error retrieving contact" });
  }
};

// Update contact by ID
exports.updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated contact
    );
    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json(updatedContact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error updating contact" });
  }
};

// Delete contact by ID
exports.deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error deleting contact" });
  }
};
