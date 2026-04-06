let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
// 0.2 + 0.1 = 0.30000000000000004

// let fixedTwenty = twentyCents;
// let fixedTen = tenCents;
// console.log(parseFloat(fixedTwenty + fixedTen).toFixed(2)); //why is this not working?

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen); //why is this not working?

function currencyAddition(float1, float2) {
  let result = (float1) + (float2);
  return ((result).toFixed(2));
}

function currencyOperation(float1, float2, operation) {
    let result;
  switch (operation) {
    case "+":
      result = ((float1) + (float2));
      return result.toFixed(2);
      break;
    case "-":
      result = ((float1) - (float2));
      return result.toFixed(2);
      break;
    case "*":
      result = ((float1) * (float2));
      return result.toFixed(2);
      break;
    case "/":
      result = ((float1) / (float2));
      return result.toFixed(2);
      break;
  }
}

console.log(0.30 == currencyAddition(0.1, 0.2)); // true
console.log(0.30 == currencyOperation(0.1, 0.2, '/')); // true
