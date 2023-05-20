function promiseTimeout(ms) {
  return new Promise((resolve, reject) => {
    console.log('Initiating timeOut... ', ms, 'ms');
    setTimeout(resolve, ms);
  });
}

promiseTimeout(3000)
  .then(() => {
    console.log('then 1 started!!');
    return promiseTimeout(2000);
  }).then(() => {
    console.log('then 2 started - not timeOut!!');
    return Promise.resolve(42);
  }).then((result) => {
    console.log('then 3 started!! printing result from previous resove ' + result);
  }).then(() => {
    console.log('then 4 forcing Error');
    promiseTimeout(1000);
    const obj = { a: 3 };
    obj = { b: 5 } // not allowed
  }).catch(() => {
    console.log('Error!');
  });