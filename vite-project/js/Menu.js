const DOMSelectors = {
  display: document.querySelector(".display"),
};

const cards = [
  {
    Name: "Toji Fushiguro",
    Clan: "Zenin",
    Domain: false,
    DomainName: "N/A",
    Status: "Dead",
    Living: false,
    Image:
      "https://pm1.aminoapps.com/7835/1315d8aeb5c9b364b4332f284b5c959960fc800br1-724-990v2_hq.jpg",
  },
  {
    Name: "Satoru Gojo",
    Clan: "Gojo",
    Domain: true,
    DomainName: "Infinite Void",
    Status: "Alive",
    Living: true,
    Image:
      "https://pm1.aminoapps.com/7701/915118c4011d8199ea6c2ee0e49331b0f9123985r1-360-450v2_00.jpg",
  },
  {
    Name: "Megumi Fushiguro",
    Clan: "Zenin",
    Domain: true,
    DomainName: "Chimera Shadow Garden ",
    Status: "Alive",
    Living: true,
    Image:
      "https://pm1.aminoapps.com/7619/908bdd5f412f6cf2306c888ee2e5a00638f9a84dr1-1609-2048v2_00.jpg",
  },
  {
    Name: "Toge Inumaki",
    Clan: "Inumaki",
    Domain: false,
    DomainName: "N/A",
    Status: "Alive",
    Living: true,
    Image:
      "https://pm1.aminoapps.com/8172/e63d18afcee0724200861867a884952d2e791dd9r1-750-1164v2_hq.jpg",
  },
  {
    Name: "Yuta Okkotsu",
    Clan: "N/A",
    Domain: true,
    DomainName: "Unknown",
    Status: "Alive",
    Living: true,
    Image:
      "https://pm1.aminoapps.com/8342/d6ac1e4c7321f6b330e1926dc3c8b2ab8d660172r1-1080-1589v2_hq.jpg",
  },
  {
    Name: "Maki Zenin",
    Clan: "Zenin",
    Domain: false,
    DomainName: "N/A",
    Status: "Alive",
    Living: true,
    Image:
      "https://i.pinimg.com/564x/65/d5/79/65d5793e50f80ec856236f0be5c5bfe7.jpg",
  },
  {
    Name: "Kento Nanami",
    Clan: "N/A",
    Domain: false,
    DomainName: "N/A",
    Status: "Dead",
    Living: false,
    Image:
      "https://pm1.aminoapps.com/7845/2e13f839f65633f3066d6020e41d8824aa133251r1-700-985v2_00.jpg",
  },
];

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
characters();

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
