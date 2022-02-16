import OnTheGo from '../../assets/images/OnTheGo.jpg';

export default function Contact(){
    //add responsiveness to mobile,faq animations/content,styling,replace placeholder pics
    return` 
    <h1>Contact</h1>
    <div class="image-grid">
        <img  class="image-grid-col-2 image-grid-row-2" src=${OnTheGo} ></img>
        <img src=${OnTheGo} ></img>
        <img src=${OnTheGo} ></img>
        <img src=${OnTheGo} ></img>
        <img src=${OnTheGo} ></img>
    </div>
    <p>Phone: 555-555-5555</p>
    <p>Email: customerservice@accessaccessability.com</p>
    <p>FAQ DropDown</p>
    `;
}