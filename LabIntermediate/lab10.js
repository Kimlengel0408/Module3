const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");
console.log(
  today.getMinutes() +
    today.getHours() * 60 +
    " minutes have passed so far today",
);
console.log(
  today.getSeconds() +
    (today.getMinutes() + today.getHours() * 60) * 60 +
    " seconds have passed so far today",
);
