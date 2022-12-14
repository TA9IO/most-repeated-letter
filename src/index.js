import "./styles.css";
const $ = window.console.log;
function moustRepeatedLetter(str) {
  let obj = {};
  let bigestValue = Number.MIN_SAFE_INTEGER;
  let winningLetter = "";

  for (let val of str) {
    obj[val] = (obj[val] || 0) + 1;
  }
  for (let key in obj) {
    if (obj[key] > bigestValue) {
      bigestValue = obj[key];
      winningLetter = key;
    }
    if (obj[key] === bigestValue && key !== winningLetter) {
      winningLetter += key;
    }
  }
  if (winningLetter.length > 1) {
    return `moust Repeated Letters are '${winningLetter}', repeated ${bigestValue} times`;
  }
  return `moust Repeated Letter is '${winningLetter}', repeated ${bigestValue} times`;
}

// just generating a random string not part of the ssolution
const random = (l) => {
  return [...Array(l)]
    .map(() => String.fromCharCode(~~(Math.random() * 20) + 97))
    .join("");
};
$(random(1000));
$(moustRepeatedLetter(random(100)));
