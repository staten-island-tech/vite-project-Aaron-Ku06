const DOMSelectors = {
    display: document.querySelector(".display")
}

const cards = [{
    Name: "Toji Fushiguro",
    Clan: "Zenin",
    Domain: false,
    Status: "Dead",
    Image: "",
},
{
    Name: "Satoru Gojo",
    Clan: "Gojo",
    Domain: true,
    DomainName: "Infinity Void",
    Status: "Alive",
    Image: "",
},
{
    Name: "Megumi Fushiguro",
    Clan: "Zenin",
    Domain: true,
    DomainName: "Chimera Shadow Garden ",
    Status: "Alive",
    Image: "",
},
{
    Name: "Toge Inumaki",
    Clan: "Inumaki",
    Domain: false,
    Status: "Alive",
    Image: "",
},
{
    Name: "Yuta Okkotsu",
    Clan: "N/A",
    Domain: true,
    DomainName: "Penis Expansion Surgery",
    Status: "Alive",
    Image: "",
},
{
    Name: "Maki Zenin",
    Clan: "Zenin",
    Domain: false,
    Status: "Alive",
    Image: "",
},
{
    Name: "Kento Nanami",
    Clan: "N/A",
    Domain: false,
    Status: "Dead",
    Image: "",
},
];

document.querySelector(".filter-btn").addEventListener("click", function () {
    DOMSelectors.display.innerHTML = "";
  });

document.querySelector(".light-btn").addEventListener("click", function(){
    if(document.body.classList.contains("dark")){
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
});
document.querySelector(".dark-btn").addEventListener("click", function(){
    if(document.body.classList.contains("light")){
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    }
});

function characters(){
    cards.forEach((card) => {
        DOMSelectors.display.insertAdjacentHTML("afterbegin", `
        <div class="card" id="card">
        <h2 class="Sorcerers">${card.Name}</h2>
        <img
          class="image"
          src="${card.Image}"
          alt="Megumi Fushiguro with Nuo"
        />
        <h3 class="descriptions" id="domain">${card.Domain}</h3>
        <h3 class="descriptions" id="clan">${card.Clan}</h3>
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
        `<div class="display-card" id="display-card">
        <h2 class="Socerers">${domainTrueCard.Name}</h2>
        <img class="image" src="${domainTrueCard.image}"</img>
        <h3 class="descriptions">Domain:${domainTrueCard.DomainName}</h3>
        <h3 class="descriptions>${domainTrueCard.Clan}</h3>
        <h3 class="descriptions">${domainTrueCard.Status}</h3>
        </div>`
      );
    });
  });

  document.querySelector(".status").addEventListener("click", function () {
    const statusTrueCards = cards.filter((card) => card.Status === true);
    statusTrueCards.forEach((statusTrueCard) => {
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `<div class="display-card" id="display-card">
        <h2 class="Socerers">${statusTrueCard.Name}</h2>
        <img class="image" src="${statusTrueCard.image}"</img>
        <h3 class="descriptions">Domain:${statusTrueCard.DomainName}</h3>
        <h3 class="descriptions>${statusTrueCard.Clan}</h3>
        <h3 class="descriptions">${statusTrueCard.Status}</h3>
        </div>`
      );
    });
  });
