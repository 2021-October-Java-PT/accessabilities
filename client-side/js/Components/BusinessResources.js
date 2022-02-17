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
 
  <div id="searchBusinesses" class="instant-search">
  <div class="instant-search__input-container">
  <input
  type="text"
  name="searchBar"
  id="searchBar"
  placeholder="search for a business"
/>
    <button id="search-submit-btn">SUBMIT</button>
    </div>
  </div>
</div>

  ${businessResources.map(resource => {
    return `
    <h1>${resource.name}
    `;
  }).join("")}</h1>
  <h2>Test</h2>
  <p id = "Bizz" ></p>
  <input type="hidden" id="resources-id" value="Zoos"></li>
<ul id="businessList">


</ul>
</div>

      `;

}