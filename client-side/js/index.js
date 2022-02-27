import About from "./Components/About";
import BusinessResource from "./Components/BusinessResource.js";
import BusinessResources from "./Components/BusinessResources.js";
import Contact from "./Components/Contact";
import FilteredResources from "./Components/FilteredResources.js";
import Home from "./Components/Home";
import Locations from "./Components/Locations";
import Maps from "./Components/Maps";
import Village from "./Components/Village";
import apiHelpers from "./Components/apiHelpers.js";

const pageContent = document.querySelector("#pageContent");
buildPage();

function buildPage() {
  about();
  contact();
  village();
  navAccess();
  home();
  addBusinessToAPI();
}

console.log("Client Side is wired up!");



function clickMaps() {
  pageContent.addEventListener("click", (event) => {
    console.log("Is this thing on????");
    if (event.target.classList.contains("places-button")) {
      pageContent.innerHTML = Maps();
    }

    if (event.target.classList.contains("returnToTheVillage")) {
      pageContent.innerHTML = Village();
    }
  });
}

//Lyzz js to enable hamburger menu
document.body.classList.toggle("js-enabled");

const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});


//Lyzz BusinessAPI and search bar
function addBusinessToAPI() {
  pageContent.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-business__submit")) {
      const addName = event.target.parentElement.querySelector(
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
        "http://localhost:8080/api/business-resources/add-resource",{
          name: addName,
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
  });
}


function search() {
  const searchBar = document.getElementById("searchBar");
  const searchSubmitBtn = document.getElementById("search-submit-btn");
  console.log(searchBar);
  console.log(searchSubmitBtn);

  searchSubmitBtn.addEventListener("click", () => {
    const searchString = searchBar.value;

    // apiHelpers.getRequest(
    //   `http://localhost:8080/api/business-resources/city/${searchString}`,
    //   (filteredResources) => {
    //     pageContent.innerHTML = FilteredResources(filteredResources);
    //   }
    // );

    apiHelpers.getRequest(
      `http://localhost:8080/api/business-resources/Search/${searchString}`,
      (filteredResources) => {
        pageContent.innerHTML = FilteredResources(filteredResources);
      }
    );
  });
  }


  function navAccess() {
    const accessElem = document.querySelector("#access");
    accessElem.addEventListener("click", () => {
      apiHelpers.getRequest(
        "http://localhost:8080/api/business-resources",
        (businessResources) => {
          console.log("RESOURCES: ", businessResources);
          pageContent.innerHTML = BusinessResources(businessResources);
          search();
          addBusinessToAPI();
          pullBusinessCard();
        }
      );
    });
  
  accessBtn.addEventListener("click", () => {
    const accessBtn = document.querySelector("#accessBtn")
    accessBtn.addEventListener("click", () => {
      pageContent.innerHTML = BusinessResources(businessResources);
    });
    const btnPartner = document.querySelector("#btnPartner");
    btnPartner.addEventListener("click", () => {
      pageContent.innerHTML = BusinessResources(businessResources);
    });
  });

  const partnerBtn = document.querySelector("#partnerBtn");
  partnerBtn.addEventListener("click", () => {
    pageContent.innerHTML = BusinessResources(businessResources);
  }
  );
};

function pullBusinessCard() {
  pageContent.addEventListener("click", () => {
    if(event.target.classList.contains("indPartner")) {
      console.log("WERK IT");
    }
  })
}

function home() {
  const homeElem = document.querySelector("#home");
  homeElem.addEventListener("click", () => {
    pageContent.innerHTML = Home();
  });

  const logoElem = document.querySelector("#logoHome");
  logoElem.addEventListener("click", () => {
    pageContent.innerHTML = Home();
  });
};

function about() {
  const contactElem = document.querySelector("#about");

  contactElem.addEventListener("click", () => {
    pageContent.innerHTML = About();
  });
};

function contact() {
  const contactElem = document.querySelector("#contact");
  contactElem.addEventListener("click", () => {
    pageContent.innerHTML = Contact();
  });
};

function village() {
  const contactElem = document.querySelector("#village");
  contactElem.addEventListener("click", () => {
    pageContent.innerHTML = Village();
  });

  community();
}



function community() {
  
  pageContent.addEventListener("click", () => {
    if (event.target.classList.contains("community-button")) {
      apiHelpers.getRequest(
        "http://localhost:8080/api/locations",
        (locations) => {
          console.log("Locations: ", locations);
          pageContent.innerHTML = Locations(locations);
        }
      );
    }
  });
}

