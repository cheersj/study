Function.prototype.myCall = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window
  context.fn = this
  const args = [...arguments].slice(1)
  const result = context.fn(...args)
  delete context.fn
  return result
}

const func = function (a,b) {console.log(a,b)}
const test = function (a, b) {
  func.myCall(this, a, b)
  console.log(a + b)
}
test(1, 2)
