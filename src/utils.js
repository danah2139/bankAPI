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
    for(let field in fields){
        if(user[field]===)
    }
  });
};

const createUser = (newUser) => {
  if (!user.id) {
    throw new Error("please insert id");
  }
  let users = loadUsers();
  let checkUser = users.find((user) => user.id === newUser.id);
  if (checkUser) {
    throw new Error("user already exist!");
  }
  users.push(newUser);
  saveUsers(users);
};

const getUser = (id) => {
  let users = loadUsers();
  return users.find((user) => user.id === id);
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

  saveUsers(updateUsers);
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
  if (!to||!from) {
    throw new Error("please insert id");
  }
  if(!cash){
    throw new Error("please insert cash to deposit");
  }
  const users = loadUsers();



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
