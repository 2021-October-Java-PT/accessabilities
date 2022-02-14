export default function BusinessResources(businessResources) {

  console.log('FIRE');
  return `
  <div class="business-directory">
      <h1>Know Before You Go!!</h1>
      <p>Our Business Directory includes listings of entertainment and recreational locations that</p>
      <p>offer various accessibility options to help support you and your loved ones. We know that community</p>
      <p>trips can be challenging and even sometimes cause anxiety for those who have special needs.</p>
      <h2>Business Directory</h2>
  
        <li class="business-resources__list">Zoos
        <input type="hidden" id="busId" value="${BusinessResources.id}">
    </div>
      `;
  
    }
