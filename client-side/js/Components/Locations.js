export default function Locations(locations) {
  return `
  <h1>Locations</h1>
  <ul class="location-list">
  ${locations
    .map((location) => {
      return `
      <li>${location.name}
      <input type="hidden" id="bookId" value=${location.locationId}/>
      </li>
      `;
    })
    .join("")}
  </ul>
  `;
}
