export default function FilteredResources(filteredResources) {
  
  console.log('FIRE');
  return `
  <h1>Business Directory</h1>
  <div class="container">
  
<div class="search-box">
  <input class="search-input" type="text" placeholder="Search something..">
  <button class="search-btn"><i class="fas fa-search"></i></button>
</div>
  <div id="content" class="content">
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