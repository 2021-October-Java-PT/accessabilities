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
    mapsResources();
    // search();
    // filteredBusinesses();
    // renderBusinessResource();
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
});



// function account() {
//     const contactElem = document.querySelector('#account');
//     contactElem.addEventListener('click', () => {
//         pageContent.innerHTML = Account();
//     });
// }


//Lyzz BusinessAPI and search bar

function navAccess() {
    const accessElem = document.querySelector('#access');
    accessElem.addEventListener('click', () => {
        apiHelpers.getRequest("http://localhost:8080/api/business-resources", (businessResources) => {
            console.log("RESOURCES: ", businessResources);
            pageContent.innerHTML = BusinessResources(businessResources);
            search();
        });
        //renderBusinessResource()
    });
}

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

// function renderBusinessResource() {
//     pageContent.addEventListener("click", (event) => {
//         const id = event.target.querySelector("#resources-id").value;
//         if (event.target.classList.contains("resource")) {
//             apiHelpers.getRequest(`http://localhost:8080/api/business-resources/${id}`, businessResource => {
//                 pageContent.innerHTML = BusinessResource(businessResource);

//             });
//             search();
//             addBusinessToAPI();
//         }
//     });
// }

// function search() {
//     const pageContent = document.querySelector('#pageContent');

//     pageContent.addEventListener('click', () => {
//         const searchBar = document.getElementById('searchBar');
//         console.log('SearchBar', searchBar);
//         apiHelpers.getRequest('http://localhost:8080/api/business-resources', (resources) => {
//             console.log('Resources: ', resources);
//             searchBar.addEventListener('keyup', (e) => {
//                 const searchString = e.target.value.toLowerCase();
//                 console.log('Search String: ', searchString);
//                 const filteredBusinesses = resources.filter(resource => resource.name.toLowerCase().includes(searchString));
//                 console.log('Filtered Businesses: ', filteredBusinesses);
//                 console.log();

//             });


//         });
//         // pageContent.insertAdjacentHTML("beforeend",BusinessResource(filteredBusinesses));
//         pageContent.innerHTML = BusinessResource(filteredBusinesses);
//     })

// };

// function filteredBusinesses() {
//     const businessList = document.querySelector('#businessList')
//     businessList.addEventListener('click', () => {
//         pageContent.innerHTML = BusinessResource();
//     });

// }

function addBusinessToAPI() {
    pageContent.addEventListener("click", (event) => {
        if (event.target.classList.contains("add-business__submit")) {
            const addBusinessName = event.target.parentElement.querySelector(
                ".add-business-resource__name"
            ).value;
            const addBusinessDescription = event.target.parentElement.querySelector(
                ".add-business-resource__description"
            ).value;
            const addBusinessStreetNumber = event.target.parentElement.querySelector(
                ".add-business-resource__street__number"
            ).value;
            const addBusinessStreetName = event.target.parentElement.querySelector(
                ".add-business-resource__street__name"
            ).value;
            const addBusinessCity = event.target.parentElement.querySelector(
                ".add-business-resource__city"
            ).value;
            const addBusinessState = event.target.parentElement.querySelector(
                ".add-business-resource__state"
            ).value;
            const addBusinessZip = event.target.parentElement.querySelector(
                ".add-business-resource__zip"
            ).value;
            const addBusinessUrl = event.target.parentElement.querySelector(
                ".add-business__Url"
            ).value;
            const addBusinessAccessibilityFeatures = event.target.parentElement.querySelector(
                ".add-business-resource__accessibility"
            ).value;
            const addBusinessContentPhoneNumber = event.target.parentElement.querySelector(
                ".add-business-resource__business__content__phone__number"
            ).value;
            apiHelpers.postRequest(
                "http://localhost:8080/api/business-resources/add-resources", {
                    name: addBusinessName,
                    businessDescription: addBusinessDescription,
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

function about() {
    const contactElem = document.querySelector('#about');
    contactElem.addEventListener('click', () => {
        pageContent.innerHTML = About();
    });
}


function contact() {
    const contactElem = document.querySelector('#contact');
    contactElem.addEventListener('click', () => {
        pageContent.innerHTML = Contact();
    });
}

// function resources() {
//     const contactElem = document.querySelector('#resources');
//     contactElem.addEventListener('click', () => {
//         pageContent.innerHTML = Resources();
//     });
// }

function village() {
    const contactElem = document.querySelector('#village');
    contactElem.addEventListener('click', () => {
        pageContent.innerHTML = Village();
    });
}