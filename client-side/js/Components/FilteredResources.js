import apiHelpers from "./apiHelpers.js";

export default function FilteredResources(filteredResources) {
  
  console.log('FIRE');
  return `
  <h1>Business Directory</h1>
  <div class="container">
  <div id="searchWrapper">
      <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="search for a business"
      />

      <button id="search-submit-btn">SUBMIT</button>
  </div>
  <div id="resource-list">
  ${filteredResources.map(resource => {
    return `
    <a href="${resource.name}">${resource.businessUrl}</a>
    <p>${resource.businessDescription}</p>
    <p>${resource.businessAccessibilityFeatures}</p>
    `;
  }).join("")}</li>
  </div>
</div>

      `;

}