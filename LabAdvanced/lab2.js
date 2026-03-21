const delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
}
setTimeout(delayMsg, 1000, "#1: Delayed by 1000ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg('#4: Not delayed at all'); // Will come out first
setTimeout(delayMsg, 10000, "#5: Delayed by 10000ms");

let cancelledTimerId = setTimeout(delayMsg, 2000, 'timeout cancelled so never prints')
clearTimeout(cancelledTimerId); // printMessage function is cancelled before delay of 1 second

// The following delayMsg function is intended to be used to delay printing a message until
// some time has passed.
// a) What order will the four tests below print in? Why?
// b) Rewrite delayMsg as an arrow function
// c) Add a fifth test which uses a large delay time (greater than 10 seconds)
// d) Use clearTimeout to prevent the fifth test from printing at all.