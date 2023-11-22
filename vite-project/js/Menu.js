import ".."
const cards = [{
    Name: "",
    Class: "",
    Domain: "",
    Status: "",
},
{
    Name: "",
    Class: "",
    Domain: "",
    Status: "",
},
{
    Name: "",
    Class: "",
    Domain: "",
    Status: "",
},
{
    Name: "",
    Class: "",
    Domain: "",
    Status: "",
},
{
    Name: "",
    Class: "",
    Domain: "",
    Status: "",
},
{
    Name: "",
    Class: "",
    Domain: "",
    Status: "",
},
{
    Name: "",
    Class: "",
    Domain: "",
    Status: "",
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

