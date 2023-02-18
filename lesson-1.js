const colors = require("colors/safe");
let a = +process.argv[2];
let n = +process.argv[3];
let keyColor = 0;

if(isNaN(a) || isNaN(n)) {
    console.log(colors.red("Веведите положительные числа"));
    return false;
}

nextPrime:
for (let i = a; i <= n; i++) {
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  switch (keyColor) {
    case 0:
        console.log(colors.green(i) );
        break;
    case 1:
        console.log(colors.yellow(i) );
        break;
    case 2:
        console.log(colors.red(i) );
        break;
  };
  
  if(keyColor == 2) keyColor = 0;
  else keyColor++;
}