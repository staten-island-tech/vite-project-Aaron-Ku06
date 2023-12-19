import {DOMSelectors, cards} from "./Menu"
import '../css/variables.css'

document.querySelector(".filter-btn1").addEventListener("click", function () {
    DOMSelectors.display.innerHTML = "";
  });
  
  document.querySelector(".filter-btn2").addEventListener("click", function () {
    DOMSelectors.display.innerHTML = "";
  });
  
  document.querySelector(".filter-btn3").addEventListener("click", function () {
    DOMSelectors.display.innerHTML = "";
  });
  
  document.querySelector(".shrine-btn").addEventListener("click", function () {
    if (document.body.classList.contains("void")) {
      document.body.classList.add("shrine");
      document.body.classList.remove("void");
    }
  });
  document.querySelector(".void-btn").addEventListener("click", function () {
    if (document.body.classList.contains("shrine")) {
      document.body.classList.add("void");
      document.body.classList.remove("shrine");
    }
  });
  
  function characters() {
    cards.forEach((card) => {
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `<div class="card" id="card">
          <h2 class="Sorcerers">${card.Name}</h2>
          <img
            class="image"
            src="${card.Image}"
          />
          <h3 class="descriptions" id="domain">Domain: ${card.DomainName}</h3>
          <h3 class="descriptions" id="clan">Clan: ${card.Clan}</h3>
          <h3 class="descriptions" id="status">${card.Status}</h3>`
      );
    });
  }
  characters(cards);
  
  document.querySelector(".domain").addEventListener("click", function () {
    const domainTrueCards = cards.filter((card) => card.Domain === true);
    domainTrueCards.forEach((domainTrueCard) => {
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `<div class="card" id="card">
          <h2 class="Sorcerers">${domainTrueCard.Name}</h2>
          <img class="image" src="${domainTrueCard.Image}" />
          <h3 class="descriptions" id="domain">Domain: ${domainTrueCard.DomainName}</h3>
          <h3 class="descriptions" id="clan">Clan: ${domainTrueCard.Clan}</h3>
          <h3 class="descriptions" id="status">${domainTrueCard.Status}</h3>
          </div>`
      );
    });
  });
  
  document.querySelector(".status").addEventListener("click", function () {
    const statusTrueCards = cards.filter((card) => card.Living === true);
    statusTrueCards.forEach((statusTrueCard) => {
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `<div class="card" id="card">
          <h2 class="Sorcerers">${statusTrueCard.Name}</h2>
          <img class="image" src="${statusTrueCard.Image}" />
          <h3 class="descriptions" id-"domain">Domain: ${statusTrueCard.DomainName}</h3>
          <h3 class="descriptions" id="clan">Clan: ${statusTrueCard.Clan}</h3>
          <h3 class="descriptions" id="status>${statusTrueCard.Status}</h3>
          </div>`
      );
    });
  });
  
  document.querySelector(".family").addEventListener("click", function () {
    const zeninCards = cards.filter((card) => card.Clan === "Zenin");
    zeninCards.forEach((zeninCard) => {
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `<div class="card" id="card">
        <h2 class="Sorcerers">${zeninCard.Name}</h2>
        <img class="image" src="${zeninCard.Image}"</img>
        <h3 class="descriptions" id="domain">Domain: ${zeninCard.DomainName}</h3>
        <h3 class="descriptions" id="clan">Clan: ${zeninCard.Clan}</h3>
        <h3 class="descriptions" id="status">${zeninCard.Status}</h3>
        </div>`
      );
    });
  });
  