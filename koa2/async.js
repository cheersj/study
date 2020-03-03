// function getSth() {
//   return 'something'
// }

// async function testAsync() {
//   return 'Hello async'
// }

// async function test() {
//   const v1 = await getSth()
//   const v2 = await testAsync()
//   console.log(v1, v2);
// }

// const result = testAsync()
// console.log(result)

// test()

function takeLongTime() {
  return new Promise(resolve => {
    setTimeout(()=>resolve('long_time_value'), 1000)
  })
}

async function test2() {
  const res = await takeLongTime()
  console.log(res);
}

test2();