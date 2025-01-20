

//membuat navbar fixed by sandhika
window.onscroll = function() {
   const header = document.querySelector('header');
   const fixedNav = header.offsetTop;

   if(window.scrollY > fixedNav) {
      header.classList.add('navbar-fixed');
   } else {
      header.classList.remove('navbar-fixed');
   }
   
}

// membuat variabel
let toggleThemeButton = document.getElementById("toggle-theme-button");
let lightModeIcon = document.getElementById("light-mode-icon"); // light mode = sun
let darkModeIcon = document.getElementById("dark-mode-icon"); // dark mode = moon
let htmlTag = document.querySelector("html");
let hamburgerMenuButton = document.getElementById('hamburger-menu');
let navbarMenu = document.getElementById('nav-menu');

//menjalankan listener ketika tombol toggle theme ditekan
// toggleThemeButton.addEventListener("click", () => {
//    htmlTag.classList.toggle("dark");
//    lightModeIcon.classList.toggle("hidden");
//    darkModeIcon.classList.toggle("hidden");
// });

//menjalankan listener ketika tombol hamburger ditekan
hamburgerMenuButton.addEventListener('click', () => {
   hamburgerMenuButton.classList.toggle('hamburger-active');
   navbarMenu.classList.toggle('opacity-0');
   navbarMenu.classList.toggle('opacity-100');
   navbarMenu.classList.toggle('translate-x-0');
   navbarMenu.classList.toggle('translate-x-[120%]');
});

//mengubah warna blob saat di hover
let primaryColor = "#0ea5e9"
let secondaryColor = "#f43f5e"
let heroImage = document.querySelector('.hero-image')
let blob = document.querySelector('.blob svg path')

heroImage.addEventListener('mouseover', () => {
   blob.setAttribute('fill', secondaryColor)
})

heroImage.addEventListener('mouseout', () => {
   blob.setAttribute('fill', primaryColor)
})

//membuat animasi saat navbar menu di hover

let elements = document.querySelectorAll('.rolling-text')

elements.forEach((element) => {
   let innerText = element.innerText
   element.innerHTML = ""

   let textContainer = document.createElement('div')
   textContainer.classList.add('block-style')

   for(let letter of innerText) {
      let span = document.createElement('span')
      span.innerText = letter.trim() === "" ? "\xa0" : letter
      span.classList.add('letter')
      textContainer.appendChild(span)
   }

   element.appendChild(textContainer)

   let cloneTextContainer = textContainer.cloneNode(true)
   cloneTextContainer.classList.add('absolute')

   for (let span of cloneTextContainer.childNodes) {
      span.classList.add('opacity-0')
   }
   
   element.appendChild(cloneTextContainer)
})

elements.forEach((element) => {
   const toggleOpacity = () => {
      [element.firstChild, element.lastChild].forEach((child) => {
         child.childNodes.forEach((span) => {
            span.classList.toggle('opacity-0')
         })
      })
   }

   element.addEventListener('mouseenter', toggleOpacity)
   element.addEventListener('mouseleave', toggleOpacity)
})

// let textContainer = document.createElement('div')
// textContainer.classList.add('block')



