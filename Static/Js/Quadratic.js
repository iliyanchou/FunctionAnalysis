let lang = localStorage.getItem(language);
function languages() {
  console.log(lang);
  if (lang === 'en') {
    document.getElementById('page-title-quad').innerHTML = "Quadratic solver"
    document.getElementById('title-quad').innerHTML = "Quadrtaic Solver"
    document.getElementById('quad-a-1').innerHTML = "Differentiation"
    document.getElementById('quad-a-2').innerHTML = "Home"
    document.getElementById('quad-a-3').innerHTML = "Statistics"
    document.getElementById('short-desc-quad').innerHTML = "The Quadratic must be in standart form ax<sup>2</sup>‎ + bx + c = 0 where a ≠ 0"
    document.getElementsByName('a')[0].placeholder = "Coefficient a"
    document.getElementsByName('b')[0].placeholder = "Coefficient b"
    document.getElementsByName('c')[0].placeholder = "Coefficient c"
    document.getElementById('solve-btn-quad').innerHTML = "Solve"


  }
  if (lang === 'bg') {
    document.getElementById('page-title-quad').innerHTML = "Калкулатор за квадратни уравнения"
    document.getElementById('title-quad').innerHTML = "Калкулатор за квадратни уравнения"
    document.getElementById('quad-a-1').innerHTML = "Производна на функция"
    document.getElementById('quad-a-2').innerHTML = "Главна страница"
    document.getElementById('quad-a-3').innerHTML = "Статистика"
    document.getElementById('short-desc-quad').innerHTML = "Квадратния тричлен трябва да е в прост вид ax<sup>2</sup>‎ + bx + c = 0 където a ≠ 0";
    document.getElementsByName('a')[0].placeholder = "Коефициент a";
    document.getElementsByName('b')[0].placeholder = "Коефициент b";
    document.getElementsByName('c')[0].placeholder = "Коефициент c";
    document.getElementById('solve-btn-quad').innerHTML = "Реши";

  }
}

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
  switch (lang) {
    case "en":

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
      break;
    case "bg":
      if (a === 0) {
        document.getElementById('state').innerHTML = "a трябва да е ≠ 0"
      }
      else {
        let D = (b * b) - (4 * a * c);
        let sqrtD = Math.sqrt(D);
        let x_1 = ((-b) - sqrtD) / (2 * a);
        let x_2 = ((-b) + sqrtD) / (2 * a);
        if (D < 0) {
          document.getElementById('state').innerHTML = "Квадратния тричлен няма реални корени"
        }
        else if (sqrtD !== NaN && sqrtD === 0) {
          document.getElementById('state').innerHTML = `Квадратния тричлен има един двукратен корен и той е: x = ${x_1}`
        }
        else if (sqrtD !== NaN && sqrtD !== 0) {
          document.getElementById('state').innerHTML = `Квадратния тричлен има две различни реални решения и те са: x = ${x_1} и x = ${x_2} .`
        }

      }

  }



}


