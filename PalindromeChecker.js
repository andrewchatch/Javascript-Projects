function palindrome(str) {
  str = str.replace(/\W|_/g, "");
  str = str.toLowerCase();

  let arr = str.split("");
  for(let i = 0; i < arr.length/2; i++) {
    if(arr[i] !== arr[arr.length-1-i]) {
      return false;
    }
  }
  return true;
}



palindrome("eye");
