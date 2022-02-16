import apiHelpers from "./apiHelpers.js";
export default function BusinessResources() {
  function render(){
    search();
  }
  render();

  function search() {
    const pageContent = document.querySelector('#PageContent');

    pageContent.addEventListener('click', () => {
        const searchBar = document.getElementById('searchBar');
        console.log('SearchBar', searchBar);
        apiHelpers.getRequest('http://localhost:8080/api/business-resources', (resources) => {
            console.log('Resources: ', resources);
            searchBar.addEventListener('keyup', (e) => {
                const searchString = e.target.value.toLowerCase();
                console.log('Search String: ', searchString);
                const filteredBusinesses = resources.filter(resource => resource.name.toLowerCase().includes(searchString));
                console.log('Filtered Businesses: ', filteredBusinesses);
                console.log(filteredBusinesses[0]);
                for (let i = 0; i < filteredBusinesses.length; i++) {
                  element = filteredBusinesses[i];
                  BizzName = element.name;
                  Bizz.innerHTML = BizzName;
                }
            });
        });

    })
};
  

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
  </div>

  <h2>WHYYYYYY</h2>
  <h1>Because it CAAAAAAAAAN</h1>
  <p id = "Bizz" ></p>
  <input type="hidden" id="resources-id" value="Zoos"></li>
<ul id="businessList">


</ul>
</div>

      `;
  
    }
