function languages(){
    let lang = localStorage.getItem(language);
    console.log(lang);
   if(lang === 'en'){
     document.getElementById('page-title-diff').innerHTML = "Differentiation"
   }
   if(lang === 'bg'){
     document.getElementById('page-title-diff').innerHTML = "Производна на функция"
     document.getElementById('title-diff').innerHTML = "Производна на функция"
     document.getElementById('diff-anc-1').innerHTML = "Главна страница"
     document.getElementById('diff-anc-2').innerHTML = "Калкулатор за квадратни уравнения"
     document.getElementById('insf-diff').innerHTML = "Въведете функция"
     document.getElementById('shortDesc-diff').innerHTML = "Използвайте стандартно означение като например '^', 'sqrt' за корен квадратен , всички аргументи на функции трябва да бъдат в скоби!"
     document.getElementsByName('functionInput')[0].placeholder = "Функция"
     document.getElementsByName('functionVar')[0].placeholder = "Спрямо?"
     document.getElementById('diff-btn').innerHTML = "Диференцирай"
     document.getElementById('shortDesc-diff_2').innerHTML = "Производната на функцията е :"



   }
   }