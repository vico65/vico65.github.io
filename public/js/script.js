

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

// Menambahkan animasi teks acak saat di hover

let webTitle = document.querySelector('.web-title')

let shuffleAnimation = (event) => {
   const target = event.target.childNodes[1]

   if(target.dataset.animating) return

   target.dataset.animating = true

   let word = target.innerText

   let shuffles = 0 
   const maxShuffles = 10
   const intervalDuration = 500 / maxShuffles

   let animationInterval = setInterval(() => {
      if (shuffles >= maxShuffles) {
         clearInterval(animationInterval)
         target.innerText = word
         delete target.dataset.animating
      } else {
         const length = target.innerText.length
         let shuffleText = ""
         for (let i=0; i<length; i++) {
            shuffleText += getRandomCharacter();
         }
         target.innerText = shuffleText
      }
      shuffles++
   }, intervalDuration)
}

// webTitle.addEventListener('mouseenter', shuffleAnimation)

let getRandomCharacter = () => {
   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
   return chars[Math.floor(Math.random() * chars.length)]
}

const contacts = [
   {
      name: "gmail",
      icon: "gmail",
      link: "mailto:alvicojr65@gmail.com",
      bgColor : "bg-red-500",
      textColor : "text-white",
      desc : "Email profesional saya, hubungi untuk kolaborasi!"
   },
   {
      name: "instagram 1",
      icon: "instagram",
      link: "https://www.instagram.com/vico65_/",
      bgColor : "bg-linear-to-tr from-yellow-300 via-red-500 to-fuchsia-500",
      textColor : "text-white",
      desc : "Akun instagram formal saya, Follow!!"
   },
   {
      name: "github",
      icon: "github",
      link: "https://github.com/vico65",
      bgColor : "bg-dark",
      textColor : "text-white",
      desc : "Kunjungi repository projek saya disini, Follow!!"
   },
   {
      name: "linkedin",
      icon: "linkedin",
      link: "https://www.linkedin.com/in/alvico65/",
      bgColor : "bg-primary",
      textColor : "text-white",
      desc : "Mari membangun koneksi profesional bersama!"
   },
   {
      name: "instagram 2",
      icon: "instagram",
      link: "https://www.instagram.com/bjismangk0/",
      bgColor : "bg-linear-to-tr from-yellow-300 via-red-500 to-fuchsia-500",
      textColor : "text-white",
      desc : "Akun ig kedua, random post about movie or meme."
   },
   {
      name : "facebook",
      icon : "facebook",
      link : "https://www.facebook.com/alvico.casilas/",
      bgColor : "bg-blue-700",
      textColor : "text-white",
      desc : "Sosmed yang sering saya gunakan saat ini, Add!!"
   },
   {
      name : "youtube",
      icon : "youtube",
      link : "https://www.youtube.com/@alvico2228",
      bgColor : "bg-red-600",
      textColor : "text-white",
      desc : "Channel yt, namun jarang upload konten di sini"
   },
   {
      name : "tiktok",
      icon : "tiktok",
      link : "https://www.tiktok.com/@vico65_ ",
      bgColor : "bg-dark",
      textColor : "text-white",
      desc : "Sosmed yang sering saya gunakan saat ini, Follow!!"
   }
]


// membuat animasi tombol kontak bergeser kebawah ketika tombol kontak lainnya di hover

let contactButtons = document.querySelectorAll('.contact-button');
let contactButtonsLength = contactButtons.length;
let isMobile = window.innerWidth <= 768;
let constanta = isMobile ? 1 : 2
   
contactButtons.forEach((contactButton, index) => {

   contactButton.innerHTML = 
   `
      <!-- wadah buat nampung tampilan tombol -->
      <a
         href=""
         class="w-[79%] md:w-full group relative block"
      >
         <!-- primary container -->
         <div
            class="py-2 lg:py-3 px-3 text-base font-semibold ${contacts[index].bgColor} text-slate-100 rounded-xs border-3 border-dark transition duration-300 ease-in-out flex gap-2 w-full content-center group-hover:shadow-xl capitalize"
         >
            <div class="flex justify-center ">
               <img src="public\\svg\\${contacts[index].icon}.svg" alt="Logo ${contacts[index].name}" srcset="">
            </div>

            ${contacts[index].name}
         </div>

         <!-- secondary container -->
         <div
            class="bg-slate-700 inset-0 absolute translate-y-1 md:group-hover:translate-y-6 translate-x-1 md:group-hover:translate-x-2 -z-10 transition duration-300 ease-in-out md:group-hover:border-dark md:group-hover:border-3 text-slate-700 md:group-hover:bg-gray-200 flex content-end pt-4 pb-1 md:pt-10 md:group-hover:h-15 md:pb-1"
         >
            <p
               class="text-xs md:text-sm self-end px-2 group-hover:flex hidden font-medium text-ellipsis"
            >
               ${contacts[index].desc}
            </p>
         </div>
      </a>

      <!-- button buat tampilan mobile -->
      <div
         data-id="7"
         class="p-1 ${contacts[index].bgColor}  border-3 border-dark cursor-pointer rounded-lg text-white md:hidden flex flex-col justify-center h-fit group relative "
      >
         <svg
            width="26"
            height="26"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            class="transition duration-300 ease-in-out"
         >
            <path
               d="M12 7.5v9m3.5-3.5L12 16.5 8.5 13"
            />
            <path
               d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
            />
         </svg>
      </div>
   `

   const toggleTranslate = () => {
      for (let i = index + constanta; i < contactButtonsLength; i = i + constanta) {
         contactButtons[i].classList.toggle('translate');
      }
   };

   let toggleTranslateButtonForMobile = () => {
      const primaryContainerSosmed = contactButton.children[0].children[1];
      const iconButtonForMobile = contactButton.children[1].children[0];
      const descForSosmed = primaryContainerSosmed.children[0];

      primaryContainerSosmed.classList.toggle('translate-contact-button-mobile');
      descForSosmed.classList.toggle('hidden');
      descForSosmed.classList.toggle('flex');
      iconButtonForMobile.classList.toggle('rotate-180');

      toggleTranslate();
   }
   
   if(!isMobile) {
      contactButton.addEventListener('mouseenter', toggleTranslate);
      contactButton.addEventListener('mouseleave', toggleTranslate);
   } else {
      contactButton.children[1].addEventListener('click', toggleTranslateButtonForMobile);
   }
})



// console.log(contactButtons[7].childNodes)

