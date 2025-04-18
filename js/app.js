//Je récupère mes éléments
const elements = {
    darkMode: window.localStorage.getItem("dark-mode"),
    changeTheme: document.getElementById("change-theme"),
    i: document.querySelector('#prompt-x'),
    prompt: document.querySelector("#prompt"),
    paragraph: document.querySelector("#prompt p"),
    sidenav: document.getElementById("mySidenav"),
    openBtn: document.getElementById("openBtn"),
    closeBtn: document.getElementById("closeBtn"),
    desktopNav: document.getElementById("space-between"),
    mobileNav: document.getElementById("mySidenav"),
    //mobileWidth: 730,
};


/*Dark mode*/

const body = document.querySelector('body');
const button = document.getElementById("change-theme");

function darkMode() {
  if (body.classList.contains('')) {
    body.classList.remove('dark-mode');
    localStorage.setItem("theme", "light");
  } else {
    body.classList.add('dark-mode');
    localStorage.setItem("theme", "dark");
  }
}

if (localStorage.getItem("theme") === "dark") {
  body.classList.add('dark-mode');
}

document.getElementById("change-theme").addEventListener('click', darkMode);

// function darkMode() {
//     let setTheme = document.body;
//     setTheme.classList.toggle("dark-mode")
//     let theme;

//     if (setTheme.classList.contains("dark-mode")){
//         console.log("Dark mode");
//         theme = "Dark";
    
//     } else {
//         console.log("Light mode");
//         theme = "Light";
//     }
//     // save to localStorage
//     localStorage.setItem("PageTheme", JSON.stringify(theme));
//     // ensure you convert to JSON like i have done -----JSON.stringify(theme)
// }

// // Mauvais pratique, à changer
// setInterval(() => {
//     let getTheme = JSON.parse(localStorage.getItem("PageTheme"));
    
//     if(getTheme === "Dark"){
//         document.body.classList = "dark-mode";
//         clearInterval(getTheme);
//     } else {
//         document.body.classList = "";
//         clearInterval(getTheme);
//     }
// }, 5);



//Je déclare mes fonctions enableDarkMode et disableDarkMode
// const enableDarkMode = () => {
    
//     document.body.classList.add("dark-mode");
//     window.localStorage.setItem("dark-mode", "active"); //Je ne peux mettre que des strings dans le localStorage, au lieu de mettre isActive (true ou false) je met juste 'active'
// };

// const disableDarkMode = () => {
    
//     document.body.classList.remove("dark-mode");
//     window.localStorage.setItem("dark-mode", null);
// };

// //Puis je met un event listener sur le bouton, ce qui va me permettre de changer de thème
// elements.changeTheme.addEventListener("click", () => {
    
//     elements.darkMode = window.localStorage.getItem("dark-mode");
//     elements.darkMode !== "active" ? enableDarkMode() : disableDarkMode();
    
//     //C'est l'équivalent de :
//     /*
//     if(darkMode !== "isActive") {
//         enableDarkMode();
//     } else {
//         disableDarkMode();
//     }
//     */
// });