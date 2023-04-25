// 3. Promise.allSettled

/*
fetch를 사용해 여러 사람의 정보를 가져오고 있다고 해봅시다.
여러 요청 중 하나가 실패해도 다른 요청 결과는 여전히 필요합니다.

이럴 때 Promise.allSettled를 사용할 수 있습니다.
*/

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/Violet-Bora-Lee',
  'https://no-url',
];

Promise.allSettled(urls.map((url) => fetch(url)))
  .then((results) => {
    results.forEach((result) =>
      console.log('================== Promise ================', result)
    );
    return results;
  })

  .then((results) => {
    results.forEach((result, num) => {
      if (result.status == 'fulfilled') {
        console.log(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status == 'rejected') {
        console.log(`${urls[num]}: ${result.reason}`);
      }
    });

    return results;
  })
  .then((results) => {
    console.log('============= .then =============', results);
    return results;
  }) // [...promises...]
  .catch((results) => {
    console.log('============= .catch =============', results);
    return results;
  }) // 작동 X
  .finally((results) =>
    console.log('============= .finally =============', results)
  ); // undefined
