const mongoose = require("mongoose");

module.exports = {
  connect: function () {
    const dbURI = process.env.MONGODB_URI || "mongodb://localhost:37017/CRMdb"; // Default URI

    // Connect to MongoDB
    mongoose
      .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch((err) => {
        console.error("Error connecting to MongoDB:", err.message);
      });

    // Handling connection events
    mongoose.connection.on("connected", () => {
      console.log("Mongoose connected to " + dbURI);
    });

    mongoose.connection.on("error", (err) => {
      console.error("Mongoose connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("Mongoose disconnected");
    });

    // Graceful shutdown
    process.on("SIGINT", () => {
      mongoose.connection.close(() => {
        console.log("Mongoose disconnected through app termination");
        process.exit(0);
      });
    });
  },
};
