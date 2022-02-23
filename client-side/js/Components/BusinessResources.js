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


<div class="add-resource">
<form>
<form class="form" id="myForm">
<label>Become a Partner!</label>
<input type="text" class="input-width add-resource__name" placeholder="Enter Name of Business">
<input type="text" class="input-width add-resource__businessStreetNumber" placeholder="Enter the Street Number of Business">
<input type="text" class="input-width resource__businessStreetName" placeholder="Enter Street Name">
<button type="submit" class="add-resource__submit" onclick="BusinessResources(businessResources)">SUBMIT</button>
</form>
</div>
`;

}