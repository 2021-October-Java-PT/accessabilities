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
  const busForm = document.getElementById('busForm');

  busForm.addEventListener('submit', function (e) {
    e.preventDefault();


    const formData = new FormData(this);
    fetch('http://localhost:8080/api/business-resources/add-resources', {
      method: 'post',
      body: formData
    }).then(function (response) {
      return response.text();
    }).then(function (text) {
      console.log(text);
    }).catch(function (error) {
      console.log(error);
    });
  });

</div>
</div>

<div>
<h1> Become a Partner!</h1>
<form class="form" id="busForm">
<label for="inp_busName">Business Name</label>
<input type="text" name="inp_busName" id="inp_busName">
<button type="submit">Submit</button>
</form>



      `;

}