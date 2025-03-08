const mongoose = require("mongoose");

// Define the schema for the Contact model
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
  },
  message: {
    type: String,
    required: true,
    minlength: [10, "Message should be at least 10 characters long"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Contact model using the schema
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
