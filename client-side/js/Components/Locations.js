export default function Locations(locations) {
  return `
    <h1>Locations</h1>
    <ul class="location-list">
    ${locations
      .map((location) => {
        return `
        <li>${location.name}
        
        </li>
        `;
      })
      .join("")}
    </ul>
    `;
}
