const mongoose = require("mongoose");
const User = require("./models/User");

async function run() {
  await mongoose.connect("mongodb://127.0.0.1:27017/testdb");

  const user = new User({
    name: "Anoushka",
    addresses: [{ city: "Hyderabad" }]
  });

  await user.save();

  const users = await User.find();
  console.log(users);

  mongoose.disconnect();
}

run();