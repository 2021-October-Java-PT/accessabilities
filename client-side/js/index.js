import About from './components/About';
import BusinessResource from './Components/BusinessResource.js';
import BusinessResources from './Components/BusinessResources.js';
import Contact from './components/Contact';
import FilteredResources from './Components/FilteredResources.js';
import Login from "./components/Login";
import Maps from './Components/Maps';
import Village from './components/Village';
import apiHelpers from "./components/apiHelpers.js";

// import Resources from './components/Resources';
// import Account from './components/Account';










// import {
//     createTestScheduler
// } from 'jest';
const pageContent = document.querySelector("#pageContent");
buildPage();

function buildPage() {
    about();
    // account();
    contact();
    // resources();
    village();
    navAccess();
    // login();Z
    // mapsResources();
    // search();
    // filteredBusinesses();
    // renderBusinessResource();
    addBusinessToAPI();
}


console.log("Client Side is wired up!");



// buildPage();

// function buildPage() {
// login();
// }

// function login() {
// const loginElem = document.querySelector(".login-button");
// loginElem.addEventListener("click", () => {
// const page = document.querySelector(".Page");
// page.innerHTML = Login();
// });

//}

// Maps
function mapsResources() {
    const mapsElem = document.querySelector("#village")
    mapsElem.addEventListener('click', () => {
        pageContent.innerHTML = Village();
        clickMaps();
    })
}


function clickMaps() {
    pageContent.addEventListener("click", (event) => {
        console.log("Is this thing on????")
        pageContent.innerHTML = Maps();
        if (event.target.classList.contains("returnToTheVillage")) {
            pageContent.innerHTML = Village();
        }

    });
}


//Lyzz js to enable hamburger menu
document.body.classList.toggle('js-enabled');

// document.addEventListener('DOMContentLoaded', function (event) {
//     let hamburger = document.getElementById('hamburger');
//     hamburger.setAttribute('aria-expanded', 'false');
//     hamburger.onclick = function () {
//         if (this.getAttribute('aria-expanded') == 'false') {
//             this.setAttribute('aria-expanded', 'true');
//         } else {
//             this.setAttribute('aria-expanded', 'false');
//         }
//     }
// });

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});



// function account() {
//     const contactElem = document.querySelector('#account');
//     contactElem.addEventListener('click', () => {
//         pageContent.innerHTML = Account();
//     });
// }


//Lyzz BusinessAPI and search bar


function search() {
    const searchBar = document.getElementById("searchBar");
    const searchSubmitBtn = document.getElementById("search-submit-btn");
    console.log(searchBar);
    console.log(searchSubmitBtn);
    

    searchSubmitBtn.addEventListener("click", () => {
        const searchString = searchBar.value;

        apiHelpers.getRequest(`http://localhost:8080/api/business-resources/city/${searchString}`, (filteredResources) => {
            pageContent.innerHTML = FilteredResources(filteredResources);
        });
    });
}

function addBusinessToAPI() {
    pageContent.addEventListener("click", (event) => {
        if (event.target.classList.contains(".businessForm_submit")) {
            console.log("FIRE");
            const addBusinessName = event.target.parentElement.querySelector(
                "#businessName"
            ).value;
            const addBusinessStreetNumber = event.target.parentElement.querySelector(
                "#businessStreetNum"
            ).value;
            const addBusinessStreetName = event.target.parentElement.querySelector(
                "#businessStreetName"
            ).value;
            const addBusinessCity = event.target.parentElement.querySelector(
                "#businessCity"
            ).value;
            const addBusinessState = event.target.parentElement.querySelector(
                "businessState"
            ).value;
            const addBusinessZip = event.target.parentElement.querySelector(
                "#businessZip"
            ).value;
            const addBusinessUrl = event.target.parentElement.querySelector(
                "#businessUrl"
            ).value;
            const addBusinessAccessibilityFeatures = event.target.parentElement.querySelector(
                "#businessAccessFeatures"
            ).value;
            const addBusinessContentPhoneNumber = event.target.parentElement.querySelector(
                "#businessPhonesNum"
            ).value;
            apiHelpers.postRequest(
                "http://localhost:8080/api/business-resources/add-resources", {
                    name: addBusinessName,
                    businessStreetNumber: addBusinessStreetNumber,
                    businessStreetName: addBusinessStreetName,
                    businessCity: addBusinessCity,
                    businessState: addBusinessState,
                    businessZip: addBusinessZip,
                    businessUrl: addBusinessUrl,
                    businessAccessibilityFeatures: addBusinessAccessibilityFeatures,
                    businessContentPhoneNumber: addBusinessContentPhoneNumber,
                },
                (businessResources) =>
                (app.innerHTML = businessResources(businessResources))
            );
        }
    })
}

// for the pages 

function navAccess() {
    const accessElem = document.querySelector('#access');
    const accessBtn = document.querySelector('#accessBtn');
    accessElem.addEventListener('click', () => {
        apiHelpers.getRequest("http://localhost:8080/api/business-resources", (businessResources) => {
            console.log("RESOURCES: ", businessResources);
            pageContent.innerHTML = BusinessResources(businessResources);
            search();
        });
        //renderBusinessResource()
    });

    accessBtn.addEventListener('click', () => {
        apiHelpers.getRequest("http://localhost:8080/api/business-resources", (businessResources) => {
            console.log("RESOURCES: ", businessResources);
            pageContent.innerHTML = BusinessResources(businessResources);
            search();
        });
        //renderBusinessResource()
    });
    const btnPartner = document.querySelector('#btnPartner')
    btnPartner.addEventListener('click', () => {
        apiHelpers.getRequest("http://localhost:8080/api/business-resources", (businessResources) => {
            console.log("RESOURCES: ", businessResources);
            pageContent.innerHTML = BusinessResources(businessResources);
            search();
        });
        //renderBusinessResource()
    });

    const partnerBtn = document.querySelector('#partnerBtn')
    partnerBtn.addEventListener('click', () => {
        apiHelpers.getRequest("http://localhost:8080/api/business-resources", (businessResources) => {
            console.log("RESOURCES: ", businessResources);
            pageContent.innerHTML = BusinessResources(businessResources);
            search();
        });
        //renderBusinessResource()
    });
}

function about() {
    const contactElem = document.querySelector('#about');
    
    contactElem.addEventListener('click', () => {
        pageContent.innerHTML = About();
    });
}


function contact() {
    const contactElem = document.querySelector('#contact');
    // const accessBtn =
    contactElem.addEventListener('click', () => {
        pageContent.innerHTML = Contact();
    });
}



function village() {
    
    const contactElem = document.querySelector('#village');
    contactElem.addEventListener('click', () => {
        pageContent.innerHTML = Village();
    });

    const villageBtn = document.querySelector('#villageBtn');
    villageBtn.addEventListener('click', () => {
        pageContent.innerHTML = Village();
    });
}