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
<div class="add-business__submit">
<form>
    <div id="Business_formBox1">
    <label class="businessFormLabel" for="businessName">Business name:</label><br>
    <input type="text" id="businessName" placeholder="Business name"><br>
    </div>
    <div id="Business_formBox2">
    <label class="businessFormLabel" for="businessStreetNum">Business Street Number:</label><br>
    <input type="text" id="businessStreetNum" placeholder="Street Number"><br>
    </div>
    <div id="Business_formBox3">
    <label class="businessFormLabel" for="businessStreetName">Business Street Name:</label><br>
    <input type="text" id="businessStreetName" placeholder="Street Name"><br>
    </div>
    <div id="Business_formBox4">
    <label class="businessFormLabel" for="businessCity">Business City:</label><br>
    <input type="text" id="businessCity" placeholder="City"><br>
    </div>
    <div id="Business_formBox5">
    <label class="businessFormLabel" for="businessState">Business State:</label><br>
    <input type="text" id="businessState" placeholder="State"><br>
    </div>
    <div id="Business_formBox6">
    <label class="businessFormLabel" for="businessZip">Business Zip Code:</label><br>
    <input type="text" id="businessZip" placeholder="Zip"><br>
    </div>
    <div id="Business_formBox7">
    <label class="businessFormLabel" for="businessUrl">Business Website:</label><br>
    <input type="text" id="businessUrl" placeholder="URL"><br>
    </div>
    <div id="Business_formBox8">
    <label class="businessFormLabel" for="businessAccessFeatures">Accessibility Features (separate by comma):</label><br>
    <input type="text" id="businessAccessFeatures" placeholder="features"><br>
    </div>
    
    <div id="Business_formBox9">
    <label class="businessFormLabel" for="businessPhoneNum">Business phone number:</label><br>
    <input maxLength="10" type="text" id="businessPhoneNum" placeholder="number"><br>
    </div>
    <div id="Business_formBox10">
    <input class="businessForm_submit" type="submit" value="Submit">
    </div>
  </form>
</div> 
      `;

}