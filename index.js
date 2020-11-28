let arrayOfCards = [
    
    {
        name : "Shubham",
        message: "Hello everyone,Good afternoon"
        
    },

    {
        name : "Aditya",
        message: "Hello everyone,Good afternoon"
    },

    {
        name : "Mohit",
        message: "Hello everyone,Good afternoon"
    },

    {
        name : "Pawan",
        message: "Hello everyone,Good afternoon"
    },

    {
        name : "Manoj",
        message: "Hello everyone,Good afternoon"
    },

    {
        name : "Aniket",
        message: "Hello everyone,Good afternoon"
    },

    {
        name : "Shweta",
        message: "Hello everyone,Good afternoon"
    },

    {
        name : "Anu",
        message: "Hello everyone,Good afternoon"
    },

    {
        name : "Priya",
        message: "Hello everyone,Good afternoon"
    },
    {
        name : "Dhiraj",
        message: "Hello everyone,Good afternoon"
    },
    {
        name : "Suchita",
        message: "Hello everyone,Good afternoon"
    },
    {
        name : "Gaurav",
        message: "Hello everyone,Good afternoon"
    }
]

var demo = "", i;
length = arrayOfCards["length"]
for (i=0; i<length; i++){

    demo = demo + "<div class='card'> <div class= 'title'> <h3> " + arrayOfCards[i].name + "</h3></div>" +"<div class='that'> <h3>" + arrayOfCards[i].message + "</h3></div></div>";
}
document.getElementById('cardCreator').innerHTML = demo;
