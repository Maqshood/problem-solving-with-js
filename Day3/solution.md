1. **Print Right-Angled Star Triangle**

const row = 5;

for (let i = 1; i <= row; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}

2. **Print Inverted Right-Angled Triangle**

const row = 5;

for(let i=row;i>=1;i--){
    let str="";
    for(let j=i;j>=1;j--){
        str+="*"
    }
    console.log(str);
    
}

3. **Print Pyramid Pattern**