const fs = require("fs");

const loadUsers = () => {
  try {
    const dataBuffer = fs.readFileSync("users.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveUsers = (users) => {
  const dadaJSON = JSON.stringify(users);
  fs.writeFileSync("users.json", dadaJSON);
};

const getAllUsers = () => {
  return loadUsers();
};

const filterUsers = (fields) => {
  const users = loadusers();
  return users.filter((user) => {
    for (let field in fields) {
      if (user[field] === fields[field]) {
        return user;
      }
    }
  });
};

const createUser = ({ id, credit = 0, cash = 0 }) => {
  if (!id) {
    throw new Error("please insert id");
  }
  let users = loadUsers();
  let checkUser = users.find((user) => user.id === id);
  if (checkUser) {
    throw new Error("user already exist!");
  }
  let user = { id, credit, cash };
  users.push(user);
  saveUsers(users);
};

const getUser = (id) => {
  if (!id) {
    throw new Error("please insert id");
  }
  let users = loadUsers();
  let user = users.find((user) => user.id === id);
  if (!user) throw new Error("user not exist");
  return user;
};

const updateUserCredit = (id, newCredit) => {
  if (!id) {
    throw new Error("please insert id");
  }
  const users = loadUsers();
  let flag = true;
  for (let i = 0; i < users.length && flag; i++) {
    if (users[i].id === id) {
      users[i].credit = newCredit;
      flag = true;
    }
  }
  if (flag) {
    throw new Error("user not exist!");
  }
  saveUsers(users);
};

const depositMoney = (id, newCash) => {
  if (!user.id) {
    throw new Error("please insert id");
  }
  const users = loadUsers();
  let flag = true;
  for (let i = 0; i < users.length && flag; i++) {
    if (users[i].id === id) {
      users[i].cash += newCash;
      flag = true;
    }
  }
  if (flag) {
    throw new Error("user not exist!");
  }

  saveUsers(users);
};

const withdrawMoney = (id, newCash) => {
  if (!user.id) {
    throw new Error("please insert id");
  }
  const users = loadUsers();
  let flag = true;
  for (let i = 0; i < users.length && flag; i++) {
    if (users[i].id === id) {
      let exceptedCash = users[i].cash - newCash;
      if (exceptedCash < -user.credit) {
        throw new Error("there is not enough cash in the account");
      }
      user.cash = exceptedCash;
      flag = true;
    }
  }
  if (flag) {
    throw new Error("user not exist!");
  }

  saveUsers(updateUsers);
};

const transferMoney = (to, from, cash) => {
  if (!to || !from) {
    throw new Error("please insert id");
  }
  if (!cash) {
    throw new Error("please insert cash to deposit");
  }
  const users = loadUsers();
  let giverIndex = users.findIndex((user) => user.id === from);
  let recieverIndex = users.findIndex((user) => user.id === to);
  if (recieverIndex === -1 || giverIndex === -1) {
    throw new Error("one of the users not exist");
  }
  let exceptedCash = users[giverIndex].cash - newCash;
  if (exceptedCash < -users[gverIndex].credit) {
    throw new Error("there is not enough cash in the account");
  }
  users[giverIndex].cash = exceptedCash;
  users[recieverIndex].cashr += cash;
  saveUsers(users);
};

// const sortUsersByCash = () => {
//   const users = loadusers();

//   const sortUsers = users.sort((a, b) => {
//     return a.cash - b.cash;
//   });
//   saveusers(sortUsers);
// };

module.exports = {
  getAllUsers,
  createUser,
  getUser,
  depositMoney,
  withdrawMoney,
  transferMoney,
  updateUserCredit,
  filterUsers,
};
