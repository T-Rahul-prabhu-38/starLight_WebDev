const mongoose = require("mongoose");

const mongo_url = "mongodb+srv://<trahulprabhu38>:<4xacZKrle97zddTW>@cluster0.8vi2o.mongodb.net/TEST?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error: ", err);
  });
