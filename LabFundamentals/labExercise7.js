const basketballGame = {
  score: 0,
  foul: 0,
  freeThrow() {
    this.score ++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  foulCounter() {
    this.foul ++;
    return this;
  },
  halfTime() {
    console.log("Halftime score is " + this.score + ", and the number of fouls is " + this.foul);
    return this;
  },
  fullTime(){
    console.log(`Final score is ${this.score}! But the number of fouls is ${this.foul}`);
    return this;
  }
};
//modify each of the above object methods to enable function chaining as below:
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .foulCounter()
  .threePointer()
  .halfTime()
  .foulCounter()
  .foulCounter()
  .fullTime();
