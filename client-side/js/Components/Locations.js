export default function Locations(locations) {
  return `
    <h1 class="places-header">Places</h1>
    <ul class="location-list">
    ${locations
      .map((location) => {
        return `
        <li>
        <div class="location-wrapper">
        <div class="location-box a">${location.name}</div>
        <div class="location-box b">Contact number: ${location.locationContactNumber}</div>
        <div class="location-box c">Rating: ${location.accessibilityRating}</div>
        <div class="location-box d">D</div>
        <div class="location-box e">E</div>
      </div>
        </li>
        `;
      })
      .join("")}
    </ul>
    `;
}