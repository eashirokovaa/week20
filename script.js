//Task1
let json = `[{
"name": "Бэтмен",
"universe": "DC Comics",
"superpower": "интеллект, обширные познания, знания боевых искусств, ловкость",
"photo": "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg"
},
{
    "name": "Супермен",
    "universe": "DC Comics",
    "superpower": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
    "photo": "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg"
},
{
    "name": "Железный человек",
    "universe": "Marvel Comics",
    "superpower": "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
    "photo": "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg"
},
{
"name": "Чудо-женщина",
"universe": "DC Comics",
"superpower": "сверхчеловеческая сила искорость, выносливость, полет",
"photo": "https://n1s1.hsmedia.ru/87/ed/c5/87edc525d8813c7b2899e04a4e562fe9/547x397_0xac120002_6444132261540468872.jpg"
}]`;

document.addEventListener("DOMContentLoaded", function (event) {
  let heroes = JSON.parse(json);
  let heroContent = "";
  for (let hero of heroes) {
    heroContent += `<div class="book">
        <h2 class="name">${hero.name}</h2>
        <div><b>Вселенная:</b> ${hero.universe}</div>
        <div><b>Суперсила:</b> ${hero.superpower}</div>
        <img src="${hero.photo}"/>
        <div>Оцените героя от 1 до 5: <input type="text"></div>
        </div>`;
  }
  document.getElementById("container").innerHTML = heroContent;
});

function saveRates() {
  let names = document.querySelectorAll("h2.name");
  let storageName = [];
  for (let name of names) {
    storageName.push(name.innerHTML);
  }
  let rates = document.querySelectorAll("input")
  let storageRates = [];
  for (let rate of rates) {
    storageRates.push(rate.value + "/5")
  }
  storageFinal = [];
  for(let i = 0; i < storageName.length; i++ ){
    storageFinal.push(storageName[i] + ":" + " " + storageRates[i]);
  }
  localStorage.setItem('rates', storageFinal)
}
