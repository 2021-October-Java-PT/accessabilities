import apiHelpers from "./apiHelpers.js";

export default function FilteredResources(filteredResources) {
  
  console.log('FIRE');
  return `
  <link rel=stylesheet" "href="/filteredResources.css" />
    
  <div id="searchBar" class="instant-search">
  <div class="instant-search__input-container">
  <input
  type="text"
  name="searchBar"
  id="searchBusinesses"
  placeholder="search for a business"
/>
    <button id="search-submit-btn">SUBMIT</button>
    </div>
  </div>
</div>
<div class=instant-search__results-container">

 <h1>${filteredResources.map(resource => {
    return `
    <div class="instant-search__title">${resource.name}</div>
    <a href="${resource.businessUrl}">${resource.businessUrl}</a> 
    <div class="instant-search__description">${resource.businessDescription}</div>
    <div class="instant-search__city">${resource.businessCity}</div>
    <p class="instant-search__paragraph">${resource.businessAccessibilityFeatures}</div>
  
    
    `;
  }).join("")}</h1>


</div>

      `;

}