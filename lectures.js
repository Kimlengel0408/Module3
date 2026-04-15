const meetup = {
  title: "Strategy Conference",
  participants: ["Chris", "Tina"],
  date: "2023-06-01",
};
const meetupString = JSON.stringify(meetup); // convert object to string
const meetupParsed = JSON.parse(meetupString, (key, value) => {
  // convert string to object
  if (!isNaN(Date.parse(value))) return new Date(value); // if valid date, create Date object
  return value;
});
console.log(meetupParsed); // { title, participants: (as above), date: 2023-06-01T00:00:00.000Z }
