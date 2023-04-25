"use strice";

// 1, Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work(network, read files, ...)
  console.log("doing something...");
  setTimeout(() => {
    resolve("OverFlowBIN");
    // reject(new Error("not network"));
  }, 2000);
});

// 2. Consumer: then, catch, finally(값을 받아오기)
promise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("finally");
  });

// 3, Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2) // then은 값 또는 promise 객체를 전달한다
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(num - 1);
      }, 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(`${hen} => 🥚`);
      reject(new Error(`${hen} => 🥚`)), 1000;
    });
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

// getHen()
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((meal) => console.log(meal));

// callback 함수 처리할때 받아오는 값이 하나고, 동일한 이름으로 넣게되는 경우 다음곽 같이 생략할 수 있다.
getHen() //
  .then(getEgg)
  .catch((err) => "🥖") // 🥖 => 🍳 catch는 중간중간에 넣을 수 있다.
  .then(cook)
  .then(console.log) // '🐓 => 🥚 => 🍳'
  .catch(console); // Error: 🐓 => 🥚
