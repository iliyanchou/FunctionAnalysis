function solve() {
  let a = document.getElementById('a').value;
  let b = document.getElementById('b').value;
  let c = document.getElementById('c').value;
  let checkA = a.length;
  let checkB = b.length;
  let checkC = c.length;
  if (checkA === 0) {
    a = 0;
  }
  if (checkB === 0) {
    b = 0;
  }
  if (checkC === 0) {
    c = 0;
  }
  if (a === 0) {
    document.getElementById('state').innerHTML = "a has to be ≠ 0"
  }
  else {
    let D = (b * b) - (4 * a * c);
    let sqrtD = Math.sqrt(D);
    let x_1 = ((-b) - sqrtD) / (2 * a);
    let x_2 = ((-b) + sqrtD) / (2 * a);
    if (D < 0) {
      document.getElementById('state').innerHTML = "This Quadratic has no real roots."
    }
    else if (sqrtD !== NaN && sqrtD === 0) {
      document.getElementById('state').innerHTML = `This Quadratic has one dobule real root and it's x = ${x_1}`
    }
    else if (sqrtD !== NaN && sqrtD !== 0) {
      document.getElementById('state').innerHTML = `This Quadratic has two different real roots and they are x = ${x_1} and x = ${x_2} .`
    }

  }



}


