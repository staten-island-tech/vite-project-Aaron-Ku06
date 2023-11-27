import '../css/variables.css'
const cards = [{
    Name: "Toji Fushiguro",
    Clan: "Zenin",
    Domain: "No",
    Status: "Dead",
    Image: "",
},
{
    Name: "Satoru Gojo",
    Clan: "Gojo",
    Domain: "Yes",
    Status: "Alive",
    Image: "",
},
{
    Name: "Megumi Fushiguro",
    Clan: "Zenin",
    Domain: "Yes",
    Status: "Alive",
    Image: "",
},
{
    Name: "",
    Clan: "",
    Domain: "",
    Status: "",
    Image: "",
},
{
    Name: "",
    Clan: "",
    Domain: "",
    Status: "",
    Image: "",
},
{
    Name: "",
    Clan: "",
    Domain: "",
    Status: "",
    Image: "",
},
{
    Name: "",
    Clan: "",
    Domain: "",
    Status: "",
    Image: "",
},
];

document.querySelector("#Gojo").addEventListener("click", function(){
    if(document.body.classList.contains("dark")){
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
});
document.querySelector("#Sukuna").addEventListener("click", function(){
    if(document.body.classList.contains("light")){
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    }
});

