export default function BusinessResources() {

  console.log('FIRE');
  return `
      <h1>Know Before You Go!!</h1>
      <p>Our Business Directory includes listings of entertainment and recreational locations that</p>
      <p>offer various accessibility options to help support you and your loved ones. We know that community</p>
      <p>trips can be challenging and even sometimes cause anxiety for those who have special needs.</p>
      <ul>

          <li class="business-resources__list">
          <label for="site-search">Find Accessible Locations:</label>
          <input type="search" id="site-search" value="${BusinessResources.busId}" name="q"
          placeholder="Search our business directory" 
          aria-label="Search through site content">

          <button>Search</button>
            
          </li>
      
          </ul>
      `;
  
    }
