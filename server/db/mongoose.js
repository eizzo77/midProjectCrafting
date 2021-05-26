const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://ItayZaguri:togZzih3VqZBqthG@cluster0.3gnvx.mongodb.net/Rpg-Game?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("connected to DB"));
