export default function BusinessResources(businessResources) {
  console.log("BUSINESS RESOURCES.JS FILE");
  return `

  <div id="searchWrapper">
  <input type="search" id="searchBar" placeholder="Search by: name, city, zip, or accessibility feature" required>
      <button type="button" id="search-submit-btn" class="search-submit-btn">SUBMIT</button>
  </div>
  <div id="businessContent" class="businessContent2">
  ${businessResources
    .map((resource) => {
      return `
    <li class="partner">
      <span class="indPartner">${resource.name}</span>  
      <input type="hidden" id="businessId" value="${resource.id}">
    `;
    })
    .join("")}</li>
</div>
</div>


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
