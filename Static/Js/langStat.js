let lang = localStorage.getItem(language);
function languages() {
    if (lang === 'en') {
      document.getElementById('page-title-stat').innerHTML = "Statistics"
      document.getElementById('title-stat').innerHTML = "Statistics"
      document.getElementById('stat-a-1').innerHTML = "Home"
      document.getElementById('stat-a-2').innerHTML = "Differentiation"
      document.getElementById('stat-a-3').innerHTML = "Quadratic Solver"
      document.getElementById('inputLabelStat').innerHTML = "Insert data (for accruate 5-type data use at least 3 data inputs)(Min,Q1,Q2,Q3,Max):"
      document.getElementById('input-label').innerHTML = "Input data:"
      document.getElementsByName('inValStat')[0].placeholder = "Data values...."
      document.getElementById('statPushBtn').innerHTML = "Insert"
      document.getElementById('outputValLabel').innerHTML = "Data:"
      document.getElementById('labelsOutStat').innerHTML = "Aritmetic mean:"
      document.getElementById('5typeOutLabel').innerHTML = "5-type data is:"
      document.getElementById('harmonicLabel').innerHTML = "Harmonic mean:"
      document.getElementById('geometricLabel').innerHTML = "Geometric mean:"
      document.getElementById('quadraticLabel').innerHTML = "Quadratic mean:"
      document.getElementById('swingLabel').innerHTML = "Swing:"
    }
    if (lang === 'bg') {
      document.getElementById('page-title-stat').innerHTML = "Статистика"
      document.getElementById('title-stat').innerHTML = "Статистика"
      document.getElementById('stat-a-1').innerHTML = "Производна на функция"
      document.getElementById('stat-a-2').innerHTML = "Главна страница"
      document.getElementById('stat-a-3').innerHTML = "Калкулатор за квадратни уравнения"
      document.getElementById('inputLabelStat').innerHTML = "Въведете данни (за точно 5-числено представяне на данните въведете поне 3 входни данни)(Min,Q1,Q2,Q3,Max)"
      document.getElementById('input-label').innerHTML = "Входни данни:"
      document.getElementsByName('inValStat')[0].placeholder = "Стойности на данни..."
      document.getElementById('statPushBtn').innerHTML = "Въведи"
      document.getElementById('outputValLabel').innerHTML = "Данни:"
      document.getElementById('labelsOutStat').innerHTML = "Средноаритметичното:"
      document.getElementById('5typeOutLabel').innerHTML = "5-численото представяне :"
      document.getElementById('harmonicLabel').innerHTML = "Среднохармонично:"
      document.getElementById('geometricLabel').innerHTML = "Средногеометрично:"
      document.getElementById('quadraticLabel').innerHTML = "Средноквадратично:"
            document.getElementById('swingLabel').innerHTML = "Размах:"
  
    }
  }
languages();