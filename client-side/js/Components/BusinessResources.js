export default function BusinessResources(businessResources) {

  console.log('BUSINESS RESOURCES.JS FILE');
  return `
  
  <div class="businessDisplay">
  <h1>Business Directory</h1>
  <div id="searchWrapper">
  <input type="search" id="searchBar" class="form-control" size="50" placeholder="Search for a business by City" required>
      <button type="button" id="search-submit-btn" class="search-submit-btn">SUBMIT</button>
  </div>
  <div id="partners"
  ${businessResources.map(resource => {
    return `
    <li class="partner">
      <h2>${resource.name}</h2>  
    `;
    
  }).join("")}</li>
</div>
</div>

      `;

}