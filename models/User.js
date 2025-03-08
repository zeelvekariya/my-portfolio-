const mongoose = require("mongoose");

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: [100, "Name cannot exceed 100 characters"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 characters long"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the User model using the schema
const User = mongoose.model("User", userSchema);

module.exports = User;
