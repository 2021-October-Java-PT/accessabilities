export default function BusinessResources(businessResources) {
  console.log("BUSINESS RESOURCES.JS FILE");
  return `
  
 <div class="container">
  <h1>Business Directory<h1>
  <div id="searchWrapper">
  <input type="search" id="searchBar" placeholder="Search for a business by City" required>
      <button type="button" id="search-submit-btn" class="search-submit-btn">SUBMIT</button>
  </div>
  <div id="content" class="content">
  ${businessResources
    .map((resource) => {
      return `
    <li class="partner">
      <p>${resource.name}</p>  
    `;
    })
    .join("")}</li>
</div>
</div>




<form class="submit-business input container">
    <label>Register your Business</label>
    <input type="text" class="add-business-resource__name" placeholder="Enter your business name">
    <input type="text" class="add-business-resource__description" placeholder="Enter a brief description">
    
    <input type="text" class=" add-business-resource__street__number" placeholder="Enter a street number">
    

    <input type="text" class=" add-business-resource__street__name" placeholder="Enter a street name">
   

    <input type="text" class=" add-business-resource__city" placeholder="Enter city">
 

    <input type="text" class=" add-business-resource__state" placeholder="Enter state">
   


    <input type="text" class=" add-business-resource__zip" placeholder="Enter zip code">
 


    <input type="text" class=" add-business__Url" placeholder="Enter url">
  

    <input type="text" class=" add-business-resource__accessibility" placeholder="Enter accessibility features">
    


    <input type="text" class=" add-business-resource__business__content__phone__number" placeholder="Enter phone number">
    <button type="button" id="add-business__submit" class="add-business__submit">SUBMIT</button>




    
    </form>
      `;
}
