const rExp = require('./data/recurringExpenses.json')
let total = 0;

for (const key in rExp) {
  if (rExp.hasOwnProperty(key)) {
    total += rExp[key]
    console.log(`${key} - $${rExp[key].toFixed(2)}`)
  }
}

console.log(`Total - $${total.toFixed(2)}`)