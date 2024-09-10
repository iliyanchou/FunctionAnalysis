
let languageSelect = localStorage.getItem(language)
if (languageSelect === null) {
  languageSelect = 'en';
}
if (languageSelect === 'en') {
  document.getElementById('page-title-index').innerHTML = "Math Analysis"
  document.getElementById('index-title').innerHTML = "Math Analysis"
  document.getElementById('index-anc-1').innerHTML = "Differentiation"
  document.getElementById('index-anc-2').innerHTML = "Quadratic solver"
}
if (languageSelect === 'bg') {
  document.getElementById('page-title-index').innerHTML = "Математически Анализ"
  document.getElementById('index-title').innerHTML = "Математически Анализ"
  document.getElementById('index-anc-1').innerHTML = "Производна на функция"
  document.getElementById('index-anc-2').innerHTML = "Калкулатор за квадратни уравнения"
}
 function language() {
  let lang = document.getElementById('lang-select').value;
  if (lang === 'en') {
    document.getElementById('page-title-index').innerHTML = "Math Analysis"
    document.getElementById('index-title').innerHTML = "Math Analysis"
    document.getElementById('index-anc-1').innerHTML = "Differentiation"
    document.getElementById('index-anc-2').innerHTML = "Quadratic solver"
  }
  if (lang === 'bg') {
    document.getElementById('page-title-index').innerHTML = "Математически Анализ"
    document.getElementById('index-title').innerHTML = "Математически Анализ"
    document.getElementById('index-anc-1').innerHTML = "Производна на функция"
    document.getElementById('index-anc-2').innerHTML = "Калкулатор за квадратни уравнения"
  }
  localStorage.setItem(language, lang);
}

