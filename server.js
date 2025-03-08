const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Import the routes for Contact and User
// const contactRoutes = require("./routes/contactRoutes");
// const userRoutes = require("./routes/userRoutes");

// Load environment variables from the .env file
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
const connectDB = async () => {
  try {
    // Connect to MongoDB using Mongoose
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");
  } catch (err) {
    // Error handling if MongoDB connection fails
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit if MongoDB connection fails
  }
};

// Call the MongoDB connection function
connectDB();

// Middleware to parse incoming JSON data in requests
app.use(express.json());

// Use the routes for contacts and users
app.use("/contact", contactRoutes);
app.use("/user", userRoutes);

// Basic route to check if the server is running
app.get("/", (req, res) => {
  res.send("<h1>Welcome to My Portfolio Backend Server with MongoDB</h1>");
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
