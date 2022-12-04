const express = require("express");
const connect = require("./src/configs/db");
const cors = require("cors");
const userController = require("./src/controllers/user.controller");

// const { register, login } = require("./src/controllers/auth.controller");
const authController = require("./src/controllers/auth.controller");

const app = express();

app.use(cors());
app.use(express.json());

// app.use("/users", userController);

// Post method with Register Route...
// app.post("/register", register);

// Post method with login Route...
// app.post("/login", login);

app.use("/user", authController);

app.listen(9555, async () => {
  try {
    await connect();
    console.log("listening to port 9555");
  } catch (err) {
    console.log(err.message);
  }
});
