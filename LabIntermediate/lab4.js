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

console.log(camelCaseLoop('margin-left-and-right-and-up-and-down')) // marginLeft
console.log(camelCaseLoop('background-image')) // backgroundImage
console.log(camelCaseLoop('display')) // display