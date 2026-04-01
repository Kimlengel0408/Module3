const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

const perth = {
  name: "Perth",
  population: 2_100_000,
  state: "WA",
  founded: "12 August 1829",
  timezone: "Australia/Perth",
};

function forLoop(city) {
  for (let place in city) {
    console.log(`${place}: ${city[place]}`);
  }
  console.log(`-------------------------`);
}

forLoop(sydney);
forLoop(perth);
