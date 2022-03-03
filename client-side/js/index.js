import About from "./Components/About";
import BusinessResource from "./Components/BusinessResource.js";
import BusinessResources from "./Components/BusinessResources.js";
import Card from "./Components/Card.js";
import Community from "./Components/Community";
import Contact from "./Components/Contact";
import FilteredResources from "./Components/FilteredResources.js";
import Help from "./Components/Help";
import Home from "./Components/Home";
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

  clickCommunity();
  homeAccess();
  

}

console.log("Client Side is wired up!");


function clickCommunity() {
  pageContent.addEventListener("click", (event) => {
    console.log("Is this thing on????");
    if (event.target.classList.contains("community-button")) {
      pageContent.innerHTML = Community();
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
        "http://localhost:8080/api/business-resources/add-resource",
        {
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
        (businessResources) => {
          pageContent.innerHTML = BusinessResources(businessResources);
        }
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
        pullBusinessCard();
      }
    );
  });
}
//   function partner () {
//   const accessElem = document.querySelector("#partnerBtn");
//   partnerBtn.addEventListener("click", () => {
//     pageContent.innerHTML = BusinessResources();
//   }
//   );
// }

function pullBusinessCard() {
  pageContent.addEventListener("click", () => {
    if (event.target.classList.contains("indPartner")) {
      console.log("WERK IT");
      const id = event.target.parentElement.querySelector("#businessId").value;
      apiHelpers.getRequest(
        `http://localhost:8080/api/business-resources/${id}`,
        (card) => {
          pageContent.innerHTML = Card(card);
          starRating();
          addComment();
        }
      );
    }
  });
}

function addComment() {
  pageContent.addEventListener("click", () => {
    if (event.target.classList.contains("primaryContained")) {
      console.log("Comment Post Firing");
      const addTitle = event.target.parentElement.querySelector("#review-title")
        .value;
      const addReview = event.target.parentElement.querySelector(".input")
        .value;
      console.log(addTitle);
      console.log(addReview);
      apiHelpers.postRequest(
        "http://localhost:8080/api/reviews/reviewId/add-review",
        {
          reviewTitle: addTitle,
          reviewComment: addReview,
        },
        (businessResources) =>
          (pageContent.innerHTML = BusinessResources(businessResources))
      );
      const postedCommentHolder = document.querySelector(".try");
      let postTitle = document.createElement("h2");
      postTitle.classList.add("addTitle");
      let postBody = document.createElement("p");
      z.classList.add("addReview");
      postTitle.innerText = addTitle;
      z.innerText = addReview;
      postedCommentHolder.append(postTitle);
      postedCommentHolder.append(postBody);
    }
  });
}

function starRating() {
  const ratingStars = [...document.getElementsByClassName("rating__star")];

  function executeRating(stars) {
    const starClassActive = "rating__star fas fa-star";
    const starClassInactive = "rating__star far fa-star";
    const starsLength = stars.length;
    let i;
    stars.map((star) => {
      star.onclick = () => {
        i = stars.indexOf(star);

        if (star.className === starClassInactive) {
          for (i; i >= 0; --i) stars[i].className = starClassActive;
        } else {
          for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
        }
      };
    });
  }
  executeRating(ratingStars);
}


function homeAccess(){
  const homeAccessElem = document.querySelector("#partnerBtn")
  homeAccessElem.addEventListener("click", () => {
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
}

function about() {
  const contactElem = document.querySelector("#about");

  contactElem.addEventListener("click", () => {
    pageContent.innerHTML = About();
  });
}

function contact() {
  const contactElem = document.querySelector("#contact");
  contactElem.addEventListener("click", () => {
    pageContent.innerHTML = Contact();
    addContactSubmitionToAPI();
    console.log('hello')
  });
}

function village() {
  const contactElem = document.querySelector("#village");
  contactElem.addEventListener("click", () => {
    pageContent.innerHTML = Village();

    help();
  });
}

function help() {
  const helpElem = document.querySelector(".help-button");
  helpElem.addEventListener("click", () => {
    pageContent.innerHTML = Help();
  });
}

// function resources() {
//   pageContent.addEventListener("click", () => {
//     pageContent.innerHTML = Resources();
//   });
// }

// function resources() {
//   pageContent.addEventListener("click", () => {
//     if (event.target.classList.contains("resources-button")) {
//       apiHelpers.getRequest(
//         "http://localhost:8080/api/resources",
//         (resources) => {
//           console.log("Resources: ", resources);
//           pageContent.innerHTML = Resources(resources);
//         }
//       );
//     }
//   });
// }

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function addContactSubmitionToAPI() {
  console.log('thou shall pass')
  pageContent.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn")) {
      console.log("tis i")
      var addUserComment = document.getElementById(
        "textarea"
      ).value;
      var addUserPhoneNumber = document.getElementById(
        "phone"
      ).value;
      var addUserEmail = document.getElementById(
        "email"
      ).value;
      var addUserName = document.getElementById(
        "username"
      ).value;
      console.log(addUserComment);
      console.log(addUserPhoneNumber)
      console.log(addUserEmail);
      console.log(addUserName);
      apiHelpers.postRequest(
        "http://localhost:8080/api/user-messages",
        {
         username: addUserName,
         email: addUserEmail,
         phone: addUserPhoneNumber,
         message: addUserComment,
        },
        (userMessage) => {
          pageContent.innerHTML = Contact(userMessage);
        }
      );
    }
  });
}
