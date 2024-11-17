function languages() {
  let lang = localStorage.getItem(language);
  if (lang === 'en') {
    document.getElementById('page-title-diff').innerHTML = "Differentiation"
    document.getElementById('title-diff').innerHTML = "Differentiation"
    document.getElementById('diff-anc-1').innerHTML = "Home"
    document.getElementById('diff-anc-2').innerHTML = "Quadratic Solver"
    document.getElementById('diff-anc-3').innerHTML = "Statistics"
    document.getElementById('insf-diff').innerHTML = "Insert Function"
    document.getElementById('shortDesc-diff').innerHTML = "Use standart notation such as '^' for exponent, sqrt() for square root all arguments of functions must be in Parentheses like sin(x) and etc..."
    document.getElementsByName('functionInput')[0].placeholder = "Function"
    document.getElementsByName('functionVar')[0].placeholder = "With respect to?"
    document.getElementById('diff-btn').innerHTML = "Differentiate"
    document.getElementById('shortDesc-diff_2').innerHTML = "The Derivative is :"
  }
  if (lang === 'bg') {
    document.getElementById('page-title-diff').innerHTML = "Производна на функция"
    document.getElementById('title-diff').innerHTML = "Производна на функция"
    document.getElementById('diff-anc-1').innerHTML = "Главна страница"
    document.getElementById('diff-anc-2').innerHTML = "Калкулатор за квадратни уравнения"
    document.getElementById('diff-anc-3').innerHTML = "Статистика"
    document.getElementById('insf-diff').innerHTML = "Въведете функция"
    document.getElementById('shortDesc-diff').innerHTML = "Използвайте стандартно означение като например '^' за степенуване, 'sqrt' за корен квадратен и тн... , всички аргументи на функции трябва да бъдат в скоби! напр... sin(x)"
    document.getElementsByName('functionInput')[0].placeholder = "Функция"
    document.getElementsByName('functionVar')[0].placeholder = "Спрямо?"
    document.getElementById('diff-btn').innerHTML = "Ди