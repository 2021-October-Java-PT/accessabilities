export default function BusinessResources(businessResources) {

  console.log('BUSINESS RESOURCES.JS FILE');
  return `
  
 <div class="container">
  <h1>Business Directory<h1>
  <div id="searchWrapper">
  <input type="search" id="searchBar" placeholder="Search for a business by City" required>
      <button type="button" id="search-submit-btn" class="search-submit-btn">SUBMIT</button>
  </div>
  <div id="content" class="content">
  ${businessResources.map(resource => {
    return `
    <li class="partner">
      <p>${resource.name}</p>  
    `;
    
  }).join("")}</li>

</div>
</div>
<div>
      `;

}