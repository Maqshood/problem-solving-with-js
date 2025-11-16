function checkVowel(char){
if('aeiou'.includes(char.toLowerCase() && char!=="")){
  return "Vowel"
}else if(/[a-z]/.test(char.toLowerCase())){
  return 'Consonant';
}
return 'Not a valid a number'
}

console.log(checkVowel('e'));
  