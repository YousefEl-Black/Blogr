// Show Mega Menu

let listBtn = document.querySelector(".header-landing .header .list .shape");
let megaMenu = document.querySelector(".header-landing .header .list .mega-menu");

listBtn.addEventListener("click", function () {
    megaMenu.classList.toggle("block");
    listBtn.classList.toggle("close-shape")
    listBtn.classList.toggle("shape")
})

// Show Mega Menu Lists

let megaMenuLists = document.querySelectorAll(".header-landing .header .list .mega-menu .links > li");
let megaMenuListName = document.querySelectorAll(".header-landing .header .list .mega-menu .links > li >a");
let megaMenuListItems = document.querySelectorAll(".header-landing .header .list .mega-menu .links li ul");


let showItems = function (index) {
    megaMenuListItems[index].classList.toggle("block");
    megaMenuListName[index].classList.toggle("rotate-arrow");
}

// Show Nav Items 

let navItems = document.querySelectorAll(".header-landing .header > .nav li");
let navLists = document.querySelectorAll(".header-landing .header > .nav li > ul");
let navItemArrow = document.querySelectorAll(".header-landing .header > .nav li img");

let showNavItems = function (index) {
    navLists[index].classList.toggle("block");
    navItemArrow[index].classList.toggle("rotate-image");
}