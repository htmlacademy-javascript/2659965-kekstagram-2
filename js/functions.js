function checkStringLength(str, maxLength) {
  return console.log(str.length <= maxLength);
}

function checkPalindrome (str) {
  let normalizedString;
  let reverseString = "";
  normalizedString = str.toLowerCase().replaceAll(" ", "");
  for (let i = normalizedString.length-1; i>=0; i--){
    reverseString += normalizedString[i];
  }
  return console.log(normalizedString===reverseString);
}

function checkPalindromeTwoPointers(str) {
  let normalizedString;
  let leftPointer = 0;
  let rightPointer;
  normalizedString = str.toLowerCase().replaceAll(" ","");
  rightPointer = normalizedString.length-1;
    while (leftPointer < rightPointer) {
      if (normalizedString[leftPointer] !== normalizedString[rightPointer]) return false;
      leftPointer ++;
      rightPointer --;
}
	return true;
}

function chooseNumbers (str) {
  let numberString = "";
  if (typeof str === "number") {
    str = str.toString();
  }
  for (let i =0; i<= str.length-1; i++){
    if (!isNaN(parseInt(str[i]))) {
      numberString += str[i];
    }
  }
  return numberString ? Number(numberString) : NaN;
}






