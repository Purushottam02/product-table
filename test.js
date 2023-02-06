function getOpenapplicaitons(cmds) {
  const result = [];
  cmds.forEach(function (command) {
    console.log(command);
    const cmd = command.split(" ");
    if (cmd[0] === "open") {
      result.push(cmd[1]);
    } else if (cmd[0] === "close") {
      for (var i = 0; i < Number(cmd[1]); i++) {
        result.pop();
      }
    }
  });
  return result;
}
console.log(
  getOpenapplicaitons(["open a", "open b", "open c", "close 3", "open d"])
); // ["a","d"]
function isPallindrome(str) {
  let result = false;
  let j = str.length - 1;
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[j]) {
      break;
    } else {
      result = true;
    }
    j--;
  }
  return result;
}
console.log(isPallindrome("nitini"));
function reverse(str) {
  let result = [];
  for (let j = str.length - 1; j >= 0; j--) {
    result.push(str[j]);
  }
  return result.join("");
}
console.log(reverse("ramrt"));
