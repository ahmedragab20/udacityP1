// General Variables
var toTop = document.querySelector('.to-top'); // To Top Button
var aboutImages = document.querySelector('.image'); // About Section Image
var aboutContent = document.querySelector('.content'); // About Section Content
var contactImages = document.querySelector('.contact-image'); // contact Section Image
var contactContent = document.querySelector('.contact-content'); // contact Section Content
var fqaImages = document.querySelector('.fqa-image'); // fqa Section Image
var fqaContent = document.querySelector('.fqa-content'); // fqa Section Content
//to top button
window.addEventListener("scroll", function(){
    if (window.pageYOffset > 100){
        toTop.classList.add('go');
    }
    else{
        toTop.classList.remove('go');
    }
});
/* Start working on the About section items */
// Image and content Section
window.addEventListener("scroll", function(){
    if (window.pageYOffset > 300){
        aboutImages.classList.add('show');
        aboutContent.classList.add('show');
    }
    else{
        aboutImages.classList.remove('show');
        aboutContent.classList.remove('show');
    }
});
/* Start working on the Contact section items */
// Image and content Section
window.addEventListener("scroll", function(){
    if (window.pageYOffset > 900){
        contactImages.classList.add('show');
        contactContent.classList.add('show');
    }
    else{
        contactImages.classList.remove('show');
        contactContent.classList.remove('show');
    }
});
/* Start working on the FQA section items */
// Image and content Section
window.addEventListener("scroll", function(){
    if (window.pageYOffset > 1600){
        fqaImages.classList.add('show');
        fqaContent.classList.add('show');
    }
    else{
        fqaImages.classList.remove('show');
        fqaContent.classList.remove('show');
    }
});

/* The Navbar */
// the Links array
var links = [
    {
        title: "home",
        id:""
    },
    {
        title: "about",
        id:""
    },
    {
        title: "contact",
        id:""
    },
    {
        title: "FQA",
        id:""
    }
];

// Looping the links
for(link of links){
    // the nav links
    var myList = document.getElementById('links'),
        myLinks = document.createElement('li'),
        listLinks = document.createElement('a');
        myText = document.createTextNode(link.title);
    // Append the text inside the 'li'
    listLinks.appendChild(myText);
    myLinks.appendChild(listLinks);
    myList.appendChild(myLinks);
    //set Attribute To Switch Between Each Section
    switch(link.title){
        case "home":
            listLinks.setAttribute("href", "#");
        break;

        case "about":
        case "contact":
        case "FQA":
            listLinks.setAttribute("href", "#" + link.title);
        break;
    }
}
/* End The Navbar */