import apiHelpers from "./apiHelpers";

export default function BusinessResource() {
    const businessList = document.getElementById('businessList');
    const loadBusiness = async () => {
        try {
        apiHelpers.getRequest('http://localhost:8080/api/business-resources');
        (businessResources) =>
        displayBusinesses(apiBusinesses);
    } catch (err) {
            console.error(err);
        }
    };
    const displayBusinesses = (businessResources) => {
        const htmlString = businessResources
            .map((character) => {
                return `
                <li class="business">
                    <h2>${businessResources.name}</h2>
                    <p>City: ${businessResources.businessCity}</p>
                    <h2>Url:"${businessResources.url}"></h2>
                </li>
            `;
            })
            .join('');
        businessList.innerHTML = htmlString;
    };
    
    loadBusiness();
}