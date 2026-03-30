const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose
  .connect("mongodb+srv://devink_db_user:WmOkAIdM604gy4C2@cluster0.repjbtw.mongodb.net/testdb?appName=Cluster0")
  .then(() => console.log("Connected to mongodb..."))
  .catch((err) => console.error("could not connect to mongodb...", err));

const schema = new mongoose.Schema({
  name: String,
});

const Message = mongoose.model("Message", schema);

async function createMessage() {
  const message = new Message({
    name: "Hello World",
  });
  const result = await message.save();
  console.log(result);
}

createMessage();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
