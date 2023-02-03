function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let applesinrange = 0;
    let orangesinrange = 0;
    const between = (x, min, max) => {
    return x >= min && x <= max;
    }
    
    for(let i=0; i<apples.length; i++) {
        let falldistance = 0;
        falldistance = a + apples[i];
        
        if(between(falldistance, s, t)) {
            applesinrange += 1;
        }
        
    }
    
        for(let i=0; i<oranges.length; i++) {
        let falldistance = 0;
        falldistance = b + oranges[i];
        if(between(falldistance, s, t)) {
            orangesinrange += 1;
        }
    }
    
    console.log(applesinrange)
    console.log(orangesinrange)
}










function findDigits(n) {
    // Write your code here
    let num = " ", count = 0;
    num = n.toString();
    
    for (let i = 0; i < num.length; i++){
        if (num[i] !=0 && n % num[i] ===0){
            count += 1;
        }
    }
return count;
}