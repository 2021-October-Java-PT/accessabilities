export default function Access(access){
    console.log('ACCESS', access);
    return` 
    <div class="business">
    <h1>${access.name}</h1>
    <h2>${access.description}</h2>
    <a href="${access.url}">${access.url}</a>
</div>
    
    `;
}