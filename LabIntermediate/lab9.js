let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

function sumSalaries(salary) {
  // let result = 0;
  // for (let key in salary) {
  //     result += salary[key];
  // }
  // return result;
  const totalSalaries = Object.values(salaries).reduce(
    (currentTotal, currentEmployee) => currentTotal + currentEmployee,
  );
  return totalSalaries;
}

function topEarners(salary) {
  const top = Object.entries(salary).reduce((high, current) =>
    current[1] > high[1] ? current : high,
  );
  return top[0];
}

console.log(sumSalaries(salaries));
console.log(topEarners(salaries));
