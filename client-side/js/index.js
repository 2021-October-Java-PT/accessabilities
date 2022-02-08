
import apiHelpers from "./apiHelpers";

console.log("Client Side is wired up!");

buildPage();

function buildPage() {
  console.log("PAGE BUILT!");
}


//Lyzz js to enable hamburger menu
document.body.classList.toggle('js-enabled');

document.addEventListener('DOMContentLoaded', function(event) 
{
    let hamburger = document.getElementById('hamburger');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.onclick = function()
    {   
        if(this.getAttribute('aria-expanded') == 'false')
        {
            this.setAttribute('aria-expanded', 'true');
        }else{
            this.setAttribute('aria-expanded', 'false');
        }
    }
});

