  
  1. Find the Maximum of Three Numbers
  
    function maxOfThree(a, b, c) {
  let max;

  if (a >= b && a >= c) {
    max = a;
  } else if (b >= c) {
    max = b;
  } else {
    max = c;
  }
  return max;
}

---

2. **Check if a Number is Positive, Negative, or Zero**


function checkPositiveOrNegative(num = 0) {
  if (num > 0) {
    return 'Positive';
  } else if (num < 0) {
    return 'Negative';
  }
  return 'Zero';
}



---

3. **Calculate Electricity Bill**
const ElectricityBill = (units) =>{
total=0;
if(units<=100){
    total = units *5
} else if(units<=200){
    total = (100*5)+(units-100)*7
  }else if(units<=300){
    total = (100*5)+(100*7)+(units-200)*10
  }else{
    total = (100*5)+(100*7)+(100*10)+(units-300)*12
  }
  return total
}


4. **Check if a Character is a Vowel or Consonant**


function checkVowel(char = '0') {
  if ('aeiou'.includes(char.toLowerCase()) && char !== '') {
    return 'Vowel';
  } else if (/[a-z]/.test(char.toLowerCase())) {
    return 'Consonant';
  }
  return 'Not a valid alphabet';
}
console.log(checkVowel('e'));
  

  
5. **Check if a Year is a Leap Year**

function isLeapYear(year){
  if((year%4===0 && year%100 !==0) || year % 400 === 0){
    return true;
  }else{
    return false;
  }
}
console.log(isLeapYear(2024));




### 🏠 **Homework / Practice Challenge**

1. **Check if a Character is Uppercase, Lowercase, Digit, or Special Character**

function checkCase(ch){
    const code=ch.charCodeAt(0);
    if(code>=65 && code<=90){
        return "Uppercase Letter"
    }else if(code >= 97 && code <= 122){
        return "Lowercase Letter"
    }else if(code >= 48 && code <= 57){
        return "Digits";
    }else{
        return "Specail Character"
    }
}

console.log(checkCase("a"));

---

2. **Check Triangle Type Using Sides and Angles**


function typeOfTriangle(a,b,c){

const sq = (x)=>Math.round(x**2);
const isRightAngled = sq(a)+ sq(b)=== sq(c) ||  sq(a)+ sq(c)=== sq(b) || sq(c)+ sq(b) === sq(a);
const isEquilateral =  a===b && b===c;
const isIsosceles = a===b || b===c || c===a;

  if (isRightAngled && isIsosceles) {
    return "It is a right-angled isosceles triangle";
  } else if (isRightAngled) {
    return "It is a right-angled triangle";
  } else if (isEquilateral) {
    return "It is an equilateral triangle";
  } else if (isIsosceles) {
    return "It is an isosceles triangle";
  } else {
    return "It is a scalene triangle";
  }

}

console.log(typeOfTriangle(3, 4, 5));
