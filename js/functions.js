
export const checkStringLength = (str, maxLength) => str.length <= maxLength;

export const checkPalindrome = (str) => {
  const normalizedString = str.toLowerCase().replaceAll(' ', '');
  let reverseString = '';
  for (const char of [...normalizedString].reverse()){
    reverseString += char;
  }
  return normalizedString === reverseString;
};

export const checkPalindromeTwoPointers = (str) => {
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
};

export const chooseNumbers = (str) => {
  let numberString = '';
  if (typeof str === 'number') {
    str = str.toString();
  }
  for (const char of [...str]){
    if (!isNaN(parseInt(char,10))) {
      numberString += char;
    }
  }
  return numberString ? Number(numberString) : NaN;
};


