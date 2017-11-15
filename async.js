// this tutorial based on this: https://codeburst.io/javascript-es-2017-learn-async-await-by-example-48acc58bad65


// normal function

function add(x, y) {
  return x + y
}

// async function

async function add(x, y) {
  return x + y 
}

// example when we want to solve 
// x = 1 + doubleAfter2Seconds(10) + doubleAfter2Seconds(100) + doubleAfter2Seconds(1000)

// using a lot of promise
function doubleAfter2Seconds(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('doubleAfter2Seconds for x =', x)
      if (typeof x === 'number') {
        resolve(x * 2);
      } else {
        reject('error nih')
      }
    }, 2000);
  });
}

// doubleAfter2Seconds(1)
// .then((result) => {
//   console.log(result)
// })

function addPromise(x) {
  return new Promise ((resolve, reject) => {
    doubleAfter2Seconds(10).then((a) => {
      doubleAfter2Seconds(100).then((b) => {
        doubleAfter2Seconds(1000).then((c) => {
          resolve(x + a + b + c)
        })
      })
    })
  })
}

// addPromise(1).then((result) => console.log(result))

// using async and await

async function addAsync(x) {
  let a = await doubleAfter2Seconds('xx')
  let b = await doubleAfter2Seconds(100)
  let c = await doubleAfter2Seconds(1000)
  console.log('baru mulai jalan')
  console.log(`a: ${a}, b: ${b}, c: ${c}`)
  // callback(x + a + b + c)
  return x + a + b + c
}

// addAsync(10, (result) => {
//   console.log('hasil daripada callback',result)
// })

// addAsync(100)
// .then(result => {
//   console.log('hasil dari promise', result)
// })
// .catch(error => {
//   console.log('error', error)
// })

// try {
//   addAsync(100)
//   .then(result => {
//     console.log('hasil dari promise')
//   })
  
// } catch (error) {
//   console.log('catch', error)
// }