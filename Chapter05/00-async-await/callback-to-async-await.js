"use strict";

// JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration
// console.log("1");
// setTimeout(() => console.log("2"), 1000);
// console.log("3");

// Synchronous callback
// function printImmediately(print) {
//   print();
// }
// printImmediately(() => console.log("hello"));

// Asynchronous callback
// function printWithDelay(print, timeout) {
//   setTimeout(print, timeout);
// }
// printWithDelay(() => console.log("async callback"), 2000);

// Callback Hell example
// class UserStorage {
//   loginUser(id, password) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (
//           (id === "OverFlowBIN" && password === "qwer1234!@") ||
//           (id === "coder" && password === "academy")
//         ) {
//           resolve(id);
//         } else {
//           reject(new Error("not found"));
//         }
//       }, 2000);
//     });
//   }

//   getRoles(user) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (user === "OverFlowBIN") {
//           resolve({ name: "OverFlowBIN", role: "admin" });
//         } else {
//           reject(new Error("no access"));
//         }
//       }, 1000);
//     });
//   }
// }

class UserStorage {
  async delay() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }

  async loginUser(id, password) {
    await this.delay();
    if (
      (id === "OverFlowBIN" && password === "qwer1234!@") ||
      (id === "coder" && password === "academy")
    ) {
      return id;
    } else {
      // return console.log("not found async/await!!");
      throw "not found async/await!!";
    }
  }

  async getRoles(user) {
    await this.delay();
    if (user === "OverFlowBIN") {
      return { name: user, role: "admin" };
    } else {
      return console.log("no access async/await!!");
    }
  }
}

const userStorage = new UserStorage();
console.log("userStorage: ", userStorage);

const id = prompt("enter your id");
const password = prompt("enter your passrod");
// userStorage
//   .loginUser(id, password)
//   .then(userStorage.getRoles)
//   .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
//   .catch(console.log);

// callback transfer async/awit
async function access() {
  const user = await userStorage.loginUser(id, password);

  const userRole = await userStorage.getRoles(user);

  return userRole;
}

access()
  .then(console.log)
  .catch((err) => {
    console.log("error!");
    console.log(err);
  });
