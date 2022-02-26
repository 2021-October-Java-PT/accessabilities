export default function Locations(locations) {
  return `
    <h1 class="places-header">Places</h1>

    ${locations
      .map((location) => {
        return `
        <div class="review-card">
          <div class="location-wrapper">
          <div class="location-box a">${location.name}</div>
          <div class="location-box b">Contact number: ${location.locationContactNumber}</div>
          <div class="location-box c">Rating: ${location.accessibilityRating}</div>
          <div class="location-box d">D</div>
          <div class="location-box e">E</div>
          </div>
        </div>
        `;
      })
      .join("")}

    `;
}