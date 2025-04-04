let languageSelect = localStorage.getItem(language)
if (languageSelect === null) {
  languageSelect = 'en';
}
document.getElementById('lang-select').value = languageSelect;
if (languageSelect === 'en') {
  document.getElementById('page-title-index').innerHTML = "Math Analysis"
  document.getElementById('index-title').innerHTML = "Math Analysis"
  document.getElementById('index-anc-1').innerHTML = "Differentiation"
  document.getElementById('index-anc-2').innerHTML = "Quadratic solver"
  document.getElementById('index-anc-3').innerHTML = "Statistics"
}
if (languageSelect === 'bg') {
  document.getElementById('page-title-index').innerHTML = "Математически Анализ"
  document.getElementById('index-title').innerHTML = "Математически Анализ"
  document.getElementById('index-anc-1').innerHTML = "Производна на функция"
  document.getElementById('index-anc-2').innerHTML = "Калкулатор за квадратни уравнения"
  document.getElementById('index-anc-3').innerHTML = "Статистика"
}
function language() {
  let lang = document.getElementById('lang-select').value;
  if (lang === 'en') {
    document.getElementById('page-title-index').innerHTML = "Math Analysis"
    document.getElementById('index-title').innerHTML = "Math Analysis"
    document.getElementById('index-anc-1').innerHTML = "Differentiation"
    document.getElementById('index-anc-2').innerHTML = "Quadratic solver"
    document.getElementById('index-anc-3').innerHTML = "Statistics"
  }
  if (lang === 'bg') {
    document.getElementById('page-title-index').innerHTML = "Математически Анализ"
    document.getElementById('index-title').innerHTML = "Математически Анализ"
    document.getElementById('index-anc-1').innerHTML = "Производна на функция"
    document.getElementById('index-anc-2').innerHTML = "Калкулатор за квадратни уравнения"
    document.getElementById('index-anc-3').innerHTML = "Статистика"
  }
  localStorage.setItem(language, lang);
  window.location.reload();
}


