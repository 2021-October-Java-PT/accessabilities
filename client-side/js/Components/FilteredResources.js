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
  ${filteredResources.map(resource => {
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