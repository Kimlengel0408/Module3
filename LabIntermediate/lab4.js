function camelCase(cssProp) {
    cssProp = cssProp.split("-");
    let cssProptemp = cssProp[1].slice(1);
    cssProp[1] = cssProp[1][0].toUpperCase() + cssProptemp;
    return cssProp.join("");
}

function camelCaseLoop(cssProp) {
  cssProp = cssProp.split("-");
  word = [];
  for (let css of cssProp) {
    if (css !== cssProp[0]) {
      let cssProptemp = css.slice(1);
      css = css[0].toUpperCase() + cssProptemp;
      word.push(css);
    } else {
        word.push(css);
    }
  }
  return word.join("");
}

function camelCaseNonConditional(cssProp) {
  cssProp = cssProp.split("-");
  word = [];
  for (let css of cssProp) {
    word.push(css);
  }
  let cssProptemp = word[1].slice(1);
  word[1] = word[1][0].toUpperCase() + cssProptemp;
  return word.join("");
}

console.log(camelCaseNonConditional('margin-left-and-right-and-up-and-down')) // marginLeft
console.log(camelCaseNonConditional('background-image')) // backgroundImage
console.log(camelCaseLoop('display')) // display
