const express = require("express");
const router = new express.Router();
const User = require("../models/user");
const Transaction = require("../models/transaction");

// get all users
router.get("/api/users", async (req, res) => {
  try {
    const result = await User.find({});
    res.send(result);
  } catch (e) {
    res.status(400).send(e.massage);
  }
});

// get user
router.get("/api/users/:id/", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

// create a user
router.post("/api/users", async (req, res) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.status(201).send(result);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

//update user cash
router.put("/api/users/:id/desposit", (req, res) => {
  try {
    const { id } = req.params;
    const cash = req.body;
    if (typeof cash === "undefined") return res.status(400).send({ error: "You need to pass an amount for the deposit" });
        const account = await User.findOne({ id, isActive: true });
        if (!account) return res.status(404).send(`No active user with passport id ${id} was found`);
        account.cash += cash;
        const transaction = new Transaction({ actionType: "deposit", fromId: account._id, amount: cash });
        await account.save();
        await transaction.save();
        res.status(200).send(account);

  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

router.put("/api/users/:id/withdraw", (req, res) => {
  try {
    const { id } = req.params;
    const cash = req.body;
    if (typeof cash === "undefined") return res.status(400).send({ error: "You need to pass an amount for the deposit" });
    const account = await User.findOne({ id, isActive: true });
    if (!account) return res.status(404).send(`No active user with passport id ${id} was found`);
    account.cash -= cash;
    const transaction = new Transaction({ actionType: "withdraw", fromId: account._id, amount: cash });
    await account.save();
    await transaction.save();
    res.status(200).send(account);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

// update user credit
router.put("/api/users/:id/credit", async (req, res) => {
  const { id } = req.params;
  const credit = req.body;
  if (typeof credit === "undefined")
    return res
      .status(400)
      .send({ error: "you need to have the new credit in the request body" });
  try {
    const account = await User.findOneAndUpdate(
      { id, isActive: true },
      { credit },
      { new: true, runValidators: true }
    );
    if (!account)
      return res
        .status(404)
        .send(`No active user with passport id ${id} was found`);
    const transaction = new Transaction({
      actionType: "updateCredit",
      fromId: _id,
      amount: credit,
    });
    await transaction.save();
    res.status(200).send(account);
  } catch (error) {
    res.status(500).send(error);
  }
});

//transfer money
router.put("/api/users/transfer/:from/:to", (req, res) => {
  try {
    const { from ,to } = req.params;
    const cash = req.body;
    const fromAccount = await User.findOne({ _id: from, isActive: true });
      const toAccount = await User.findOne({ _id: req.to, isActive: true });
      if (!fromAccount) return res.status(404).send(`No active user with passport id ${from} was found`);
      if (!toAccount) return res.status(404).send(`No active user with passport id ${to} was found`);
      fromAccount.cash -= cash;
      toAccount.cash += cash;
      const transaction = new Transaction({
        actionType: "transfer",
        fromId: fromAccount._id,
        toId: toAccount._id,
        amount: cash,
      });

      await fromAccount.save();

      await toAccount.save();

      await transaction.save();

      res.status(200).send({ fromAccount, toAccount });


  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});
