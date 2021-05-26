const express = require("express");
const cors = require("cors");
require("./db/mongoose");
const path = require("path");
const port = process.env.PORT || 5555;
const app = express();

app.use(cors());
app.use(express.json());

const CharacterRouter = require("./routes/characterRouter");

app.use("/api/character", CharacterRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => console.log(`application start at ${port}`));
