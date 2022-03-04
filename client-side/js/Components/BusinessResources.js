export default function BusinessResources(businessResources) {
  console.log("BUSINESS RESOURCES.JS FILE");
  return `
  <div id="businessContent-heading">
  <h1 class="bc-h1">Business Directory</h1>
  <h2 class="bc-h2">Know before you go! Browse or search our vetted location directory for accessibility features that you may need and take the worry out of your trip!</h2>
  </div>
  <div id="searchWrapper">
  <input type="search" id="searchBar" placeholder="Search by: name, city, zip, or accessibility feature" required>
      <button type="button" id="search-submit-btn" class="search-submit-btn">SUBMIT</button>
  </div>
  
  
 
  ${businessResources
    .map((resource) => {
      return `
      <div id="businessContent" class="businessContent2">
      <span class="partner indPartner">${resource.name}</span>  
      <input type="hidden" id="businessId" value="${resource.id}">
    `;
    })
    .join("")}</div>
</div>
</div>


                
<iframe class=map src="https://www.google.com/maps/d/u/0/embed?mid=1xQAvXEfRFcxwTUEdwNZZzE5EFilIECA1&ehbc=2E312F"></iframe>

<iframe class=map src="https://www.google.com/maps/d/u/0/embed?mid=1CmVNvpg25yT-gTY2BMIj1LNw-p_X9JWp&ehbc=2E312F"></iframe>

<iframe class=map src="https://www.google.com/maps/d/u/0/embed?mid=1IhoQOgmPta6k-qc1GkUek3UphjgyCKa_&ehbc=2E312F" ></iframe>

<iframe class=map src="https://www.google.com/maps/d/u/0/embed?mid=1hUuQOABuMohNFJmr6U10T9Rnfj1Su33j&ehbc=2E312F"></iframe>




<h2 class="formHeader">Sign Up To Be a Partner!</h2>
<div class="formContainer">
        <div class="submit-business-input-container">
            <div class="formContentContainer">
    <form class=addPartnerForm>
    <input id="businessFormInput" type="text" class="add-business-resource__name" placeholder="Enter your business name">
    <input id="businessFormInput" type="text" class="add-business-resource__description" placeholder="Enter a brief description">
    <input id="businessFormInput" type="text" class=" add-business-resource__street__number" placeholder="Enter a street number">
    <input id="businessFormInput" type="text" class=" add-business-resource__street__name" placeholder="Enter a street name">
    <input id="businessFormInput" type="text" class=" add-business-resource__city" placeholder="Enter city">
    <input id="businessFormInput" type="text" class=" add-business-resource__state" placeholder="Enter state">
    <input id="businessFormInput" type="text" class=" add-business-resource__zip" placeholder="Enter zip code">
    <input id="businessFormInput" type="text" class=" add-business__Url" placeholder="Enter url">
    <input id="businessFormInput" type="text" class=" add-business-resource__accessibility" placeholder="Enter accessibility features">
    <input id="businessFormInput" type="text" class=" add-business-resource__business__content__phone__number" placeholder="Enter phone number">
    <button type="button" id="add-business__submit" class="add-business__submit">SUBMIT</button> 
    </form>      
    </div>
      `;
}
