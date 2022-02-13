import About from './components/About';
import Account from './components/Account';
import BusinessResources from './Components/BusinessResources';
import Contact from './components/Contact';
import Login from "./components/Login";
import Maps from './Components/Maps';
import Resources from './components/Resources';
import Village from './components/Village';
import apiHelpers from "./components/apiHelpers.js";
import businessResource from './Components/BusinessResource';

buildPage();

function buildPage() {
    about();
    businessResource();
    BusinessResources();
    account();
    contact();
    resources();
    village();

    navAccess();
    


    mapsResources();

    


}


console.log("Client Side is wired up!");



// buildPage();

// function buildPage() {
//     login();
// }

// function login() {
//     const loginElem = document.querySelector(".login-button");
//     loginElem.addEventListener("click", () => {
//         const page = document.querySelector(".Page");
//         page.innerHTML = Login();
//     });
// }


function mapsResources(){
    const mapsElem = document.querySelector("#resources")
    mapsElem.addEventListener('click',()=> {
        PageContent.innerHTML = Resources();
        clickMaps();
    })
}


function clickMaps(){
    PageContent.addEventListener("click", (event) => {
        console.log("Is this thing on????")
        PageContent.innerHTML = Maps();
        if(event.target.classList.contains("returnToResources")){
            PageContent.innerHTML= Resources();
        }
    
    });
}


//Lyzz js to enable hamburger menu
document.body.classList.toggle('js-enabled');

document.addEventListener('DOMContentLoaded', function (event) {
    let hamburger = document.getElementById('hamburger');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.onclick = function () {
        if (this.getAttribute('aria-expanded') == 'false') {
            this.setAttribute('aria-expanded', 'true');
        } else {
            this.setAttribute('aria-expanded', 'false');
        }
    }
});

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})



function about() {
    const contactElem = document.querySelector('#about');
    contactElem.addEventListener('click', () => {
        PageContent.innerHTML = About();
    });
}

function account() {
    const contactElem = document.querySelector('#account');
    contactElem.addEventListener('click', () => {
        PageContent.innerHTML = Account();
    });
}

function navAccess() {
    const accessElem = document.querySelector('#access');
    accessElem.addEventListener('click', () => {
        apiHelpers.getRequest(
            "http://localhost:8080/api/business-resources",
            (businessResources) => {
                PageContent.innerHTML = BusinessResources(businessResources);
                console.log('FIRE');
                console.log(businessResources);
            }
        )
        renderBusinessResource();
    });
}

function renderBusinessResource() {
    PageContent.addEventListener('click', (event) => {
        if (event.target.classList.contains("business-resource")) {
            apiHelpers.getRequest(`http://localhost:8080/api/business-resources/${businessResource}`, (businessResource) => {
                PageContent.innerHTML = BusinessResource(businessResource);
                console.log(businessResource);

            });
        }
    });
}

function contact() {
    const contactElem = document.querySelector('#contact');
    contactElem.addEventListener('click', () => {
        PageContent.innerHTML = Contact();
    });
}

function resources() {
    const contactElem = document.querySelector('#resources');
    contactElem.addEventListener('click', () => {
        PageContent.innerHTML = Resources();
    });
}

function village() {
    const contactElem = document.querySelector('#village');
    contactElem.addEventListener('click', () => {
        PageContent.innerHTML = Village();
    });
}

