let values = [];
function push() {
  let inValue = Number(document.getElementById('inVal').value)
  values.push(inValue);
  values.sort(function (a, b) { return a - b });
  document.getElementById('outputArray').innerHTML = values;
  let mean = 0;
  values.forEach(element => {
    mean += element;
  });
  mean /= values.length;
  mean = mean.toFixed(2);
  document.getElementById('mean').innerHTML = mean;
  let minVal = values[0];
let maxVal = values[values.length-1];
let data5 = [];
data5.push(minVal);
data5.push(quartils(values));
data5.push(maxVal);
document.getElementById('data5').innerHTML = data5;
}
function quartils(input) {
  let inLeng = input.length;
  let Q1 = 0;
  let Q1Arr = [];
  let Q2 = 0;
  let Q2Arr = [];
  let Q3 = 0;
  let Q3Arr = [];
  let stateFirst = String(isEven(inLeng));
  let checkNum1 = checknum(stateFirst, inLeng);
  function isEven(inputVal) {
    if (inputVal % 2 == 0) {
      return "Even";
    }
    else {
      return "Odd";
    }
  }
  function checknum(inputState, inputLenght){
  let checkNum = 0;
  if (inputState === "Even") {
    checkNum = (inputLenght - 2) / 2;
  }
  else if (inputState === "Odd") {
    checkNum = (inputLenght - 1) / 2;
  }
  return checkNum;
}
  
  for (i = 0; i < checkNum1; i++) {
    Q1Arr.push(input[i]);
  }
  if (stateFirst === "Even") {
    for (i = checkNum1; i < checkNum1 + 2; i++) {
      Q2Arr.push(input[i]);
    }
    for(i = checkNum1+2; i<inLeng; i++){
      Q3Arr.push(input[i]);
    }
  }
  else if (stateFirst === "Odd") {
    Q2Arr.push(input[checkNum1]);
    for(i = checkNum1+1; i<inLeng; i++){
      Q3Arr.push(input[i]);
    }
  }
  Q2Arr.forEach(element => {
    Q2 += element;
  });
  Q2 /= Q2Arr.length;
  let stateQ1 = String(isEven(Q1Arr.length));
  let 