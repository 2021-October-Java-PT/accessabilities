import apiHelpers from "./apiHelpers.js";
export default function BusinessResources(businessResources) {


  // function render() {
  //   search();
  // }
  // render();

  //   function search() {
  //     const pageContent = document.querySelector("#pageContent");
  //     const searchBar = document.getElementById("search-bar");
  //     const searchSubmitBtn = document.getElementById("search-submit-btn");

  //     searchSubmitBtn.addEventListener("click", () => {
  //         const searchString = searchBar.value;
  //         apiHelpers.getRequest(`http://localhost:8080/api/business-resources/city/${searchString}`, (businessResource) => {
  //           pageContent.innerHTML = BusinessResources(businessResource);
  //         });
  //     });
  // }


  console.log('BUSINESS RESOURCES.JS FILE');
  return `
  <h1>Business Directory</h1>
  <div class="container">
  <div id="searchWrapper">
  <input type="search" id="searchBar" class="form-control" size="50" placeholder="Search for a business by City" required>

      <button type="button" id="search-submit-btn" class="search-submit-btn">SUBMIT</button>
  </div>

  <h2>WHYYYYYY</h2>
  <h1>Because it CAAAAAAAAAN</h1>
  ${businessResources.map(resource => {
    return `
    <li>${resource.name}
    `;
  }).join("")}</li>
  
  <p id = "Bizz" ></p>
  <input type="hidden" id="resources-id" value="Zoos"></li>
<ul id="businessList">


</ul>
</div>

      `;

}