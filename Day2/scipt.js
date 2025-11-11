
function maxofthree(a,b,c){
    let max;
    if(a>b && a>c){
        max=a;
    }else if(b>a && b>c){
        max=b;
    }else if(c>a && c>b){
        max=c
    }
    return max;
}

console.log(maxofthree(10,20,5))