
export default function BusinessResources(businessResources) {

  console.log('BUSINESS RESOURCES.JS FILE');
  return `
  <h1>Business Directory</h1>
  <div class="container">
  <div id="searchWrapper">
  <input type="search" id="searchBar" class="form-control" size="50" placeholder="Search for a business by City" required>

      <button type="button" id="search-submit-btn" class="search-submit-btn">SUBMIT</button>
  </div>

  ${businessResources.map(resource => {
    return `
    <li>${resource.name}
    `;
  }).join("")}</li>
  <h2>Test</h2>
  <p id = "Bizz" ></p>
  <input type="hidden" id="resources-id" value="Zoos"></li>
<ul id="businessList">


</ul>
</div>

      `;

}