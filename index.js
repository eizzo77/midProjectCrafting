const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const port = process.env.PORT || 5555;
const app = express();

app.use(cors());
app.use(express.json());

const CharacterRouter = require("./server/routes/characterRouter");

app.use("/api/character", CharacterRouter);

if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static("client/build"));

  // Express serve up index.html file if it doesn't recognize route
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//connect to db with mongoose
mongoose
  .connect(
    "mongodb+srv://ItayZaguri:togZzih3VqZBqthG@cluster0.3gnvx.mongodb.net/Game-Data?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("database connect");
  });

app.listen(port, () => console.log(`application start at ${port}`));
