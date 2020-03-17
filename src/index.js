module.exports = function check(str, bracketsConfig) {
  let arr = bracketsConfig.map(item => item.join(''));
  for (let i = 0; i < bracketsConfig.length;) {
    if (str.includes(arr[i])) {
      str = str.replace(arr[i], '');
      i = 0;
    } else i++;
  }
  if (str.length == 0) {
    return true;
  } else return false;
};
