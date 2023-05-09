'use strict';

// JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration

// // Callback Hell example
// class UserStorage {
//   loginUser(id, password) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (
//           (id === 'overflowbin' && password === 'qwer1234') ||
//           (id === 'coder' && password === 'academy')
//         ) {
//           resolve(id);
//         } else {
//           reject(new Error('not found'));
//         }
//       }, 2000);
//     });
//   }

//   getRoles(user) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (user === 'overflowbin') {
//           resolve({ name: 'overflowbin', role: 'admin' });
//         } else {
//           reject(new Error('no access'));
//         }
//       }, 1000);
//     });
//   }
// }

// transfer callback to async/await here
class UserStorage {
  async delay(ms) {
    return new Promise(function (res) {
      setTimeout(res, ms);
    });
  }

  async loginUser(id, password) {
    await this.delay(1000);

    if (
      (id === 'overflowbin' && password === 'qwer1234') ||
      (id === 'coder' && password === 'academy')
    ) {
      return id;
    }
    throw new Error('아이디와 비밀번호를 확인하세요.');
  }

  async getRoles(user) {
    await this.delay(1000);

    if (user === 'overflowbin') return { name: user, role: 'admin' };
    throw 'access denied';
  }
}

const userStorage = new UserStorage();

const id = prompt('enter your id');
const password = prompt('enter your passrod');

const start = async (id, password) => {
  const user = await userStorage.loginUser(id, password);
  return await userStorage.getRoles(user);
};

start(id, password)
  .then((res) => alert(`Hello ${res.name}, you have a ${res.role} role`))
  .catch(console.log);
