export function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

export function checkPalindrome (str) {
  const normalizedString = str.toLowerCase().replaceAll(' ', '');
  let reverseString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--){
    reverseString += normalizedString[i];
  }
  return normalizedString === reverseString;
}

export function checkPalindromeTwoPointers(str) {
  const normalizedString = str.toLowerCase().replaceAll(' ','');
  let leftPointer = 0;
  let rightPointer;
  rightPointer = normalizedString.length - 1;
  while (leftPointer < rightPointer) {
    if (normalizedString[leftPointer] !== normalizedString[rightPointer]) {
      return false;
    }
    leftPointer ++;
    rightPointer --;
  }
  return true;
}

export function chooseNumbers (str) {
  let numberString = '';
  if (typeof str === 'number') {
    str = str.toString();
  }
  for (let i = 0; i <= str.length - 1; i++){
    if (!isNaN(parseInt(str[i],10))) {
      numberString += str[i];
    }
  }
  return numberString ? Number(numberString) : NaN;
}


