export default function BusinessResource(businessResource) {

console.log(businessResource);
    
    return `
    <div class="resource-wrapper">
    <div id="content">
        <
    <div id="filteredBusinesses">
<h1>Location: ${businessResource.businessCity}</h1>
</div>
    `;
}