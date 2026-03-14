function makeCounter(currentCount, incrementBy) {
  // let currentCount = 0;
  return function () {
    currentCount += incrementBy;
    console.log(`${currentCount} I added ${incrementBy}!!!`);
    return currentCount;
  };
}
let counter1 = makeCounter(3, 2);
let counter2 = makeCounter(4, 1);
counter1(); // 1
counter1(); // 2

counter2(); // 1
counter2(); // 2

// makeCounter below is a decorator function which creates and returns a function that
// increments a counter.
// a) Create a second counter counter2 using the makeCounter function and test to see if
// it remains independent to counter1
// b) Modify makeCounter so that it takes an argument startFrom specifying where the
// counter starts from (instead of always starting from 0)
// c) Modify makeCounter to take another argument incrementBy, which specifies how
// much each call to counter() should increase the counter value by.