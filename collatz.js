function collatz() {
  let counter = 0;
  let randomInteger = Math.floor(Math.random() * 101);
  while(randomInteger != 1) {
    if(randomInteger %2 === 0) {
      randomInteger /= 2;
    } else {
      randomInteger *= 3;
      randomInteger += 1;
    }
    counter += 1;
    console.log("Returned result of " + randomInteger + " on iteration " + counter + ".\n");
  }
  console.log("4-2-1 loop has been detected.");
};

function collatzRun(value) {
  let counter = 0;
  let result = value;
  while(result != 1) {
    if(result %2 === 0) {
      result /= 2;
    } else {
      result *= 3;
      result += 1;
    }
    counter += 1;
    console.log("Returned result of " + result + " on iteration " + counter + ".\n");
  }
  console.log("4-2-1 loop has been detected.");
};

collatz();
