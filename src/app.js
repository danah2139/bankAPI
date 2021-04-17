const express = require("express");
const app = express();

app.use(express.json());

const {
  getAllUsers,
  createUser,
  getUser,
  depositMoney,
  withdrawMoney,
  updateUserCredit,
  transferMoney,
  filterUsers,
} = require("./utils");

// get all users
app.get("/api/users", (req, res) => {
  let users = getAllUsers();
  //console.log(users);
  res.json(users);
});

// filter with query
app.get("/api/filter/query", (req, res) => {
  try {
    const { query, ...fields } = req.query;
    const users = filterUsers(query, fields);
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send({ message: e.message });
  }
});

// filter with params
app.get("/api/filter/params", (req, res) => {
  try {
    const users = filterUsers(req.query);
    res.status(200).send(users);
  } catch (e) {
    console.log(e);
    res.status(400).send({ message: e.message });
  }
});
// get user
app.get("/api/users/:id/", (req, res) => {
  const { id } = req.params;
  const user = getUser(id);
  res.status(200).send(user);
});

// create a user
app.post("/api/users", (req, res) => {
  try {
    const user = createUser(req.body);
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

//update user cash
app.put("/api/users/:id/desposit", (req, res) => {
  try {
    const { id } = req.params;
    const cash = req.body;
    depositMoney(id, cash);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.put("/api/users//:id/withdraw", (req, res) => {
  try {
    const { id } = req.params;
    const cash = req.body;
    withdrawMoney(id, cash);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

// update user credit
app.put("/api/users/:id/credit", (req, res) => {
  const { id } = req.params;
  const credit = req.body;
  updateUserCredit(id, credit);
});

//transfer money
app.put("/api/users/transfer/:from/:to", (req, res) => {
  try {
    const users = transferMoney(req.params.to, req.params.from, req.body.cash);
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("listening..");
});
