export default function BusinessResource(businessResource) {

console.log(businessResource);
    
    return `
    <div id="filteredBusinesses">
<h1>Location: ${businessResource.businessCity}</h1>
</div>
    `;
}