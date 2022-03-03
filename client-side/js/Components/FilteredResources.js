export default function FilteredResources(filteredResources) {
  
  console.log('FIRE');
  return `
  <div class="searchTitle">
  <h1>Search Results</h1>
  </div>
  <div class="container">
  

  <div id="content" class="content2">
  ${filteredResources.map(resource => {
    return `
    <p class="title"><a href="${resource.businessUrl}">${resource.name}</a></p>
    <p>${resource.businessDescription}</p>
    <p>${resource.businessAccessibilityFeatures}</p>
    `;
  }).join("")}</li>
  </div>
</div>

      `;

}