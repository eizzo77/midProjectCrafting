const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://ItayZaguri:togZzih3VqZBqthG@cluster0.3gnvx.mongodb.net/Game-Data?retryWrites=true&w=majority",
  (err) => {
    if (err) throw err;
    console.log("connected to MongoDB");
  }
);
