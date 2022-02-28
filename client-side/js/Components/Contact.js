import email from '../../assets/images/email.png';
import location from '../../assets/images/location.png';
import phone from '../../assets/images/phone.png';
import shape from '../../assets/images/shape.png';
export default function Contact(contact){
    //add responsiveness to mobile,faq animations/content,styling,replace placeholder pics
    return ` 
    <div class="wrapper">
    <h1>Contact</h1>
    <h2>Maybe your questions already have answers!</h2>
    <ul>
        <li>
            <div class = "dropdown">
            How can I alert the community to my own experience at a location?
                <div class="dropdown-content">
                    <p class="desc">
                        Fred the baker baking company is out here making donuts dont you know?
                        We make all the donuts. We make so many donuts you wouldnt even believe it.
                        Thats all you need to know isnt it? We make donuts. You buy them. See you here.
                    </p>
                </div>
            </div>
        </li>
        <li>
            <div class = "dropdown">
            How do I leave a review?
                <div class="dropdown-content">
                    <p class="desc">
                        Fred the baker baking company is out here making donuts dont you know?
                        We make all the donuts. We make so many donuts you wouldnt even believe it.
                        Thats all you need to know isnt it? We make donuts. You buy them. See you here.
                    </p>
                </div>
            </div>
        </li>
        <li>
            <div class = "dropdown">
            What can I do if there is not a lot of content for my area?
                <div class="dropdown-content">
                    <p class="desc">
                        Fred the baker baking company is out here making donuts dont you know?
                        We make all the donuts. We make so many donuts you wouldnt even believe it.
                        Thats all you need to know isnt it? We make donuts. You buy them. See you here.
                    </p>
                </div>
            </div>
        </li>
    </ul>
    <h2>Use our contact form and we will get back with you as soon as possible!</h2>
    <p>Phone: 555-555-5555</p>
    <p>Email: customerservice@accessaccessability.com</p>
    <p>How can my business be added to your website?</p>
    </div>

    <div class="cont">
    <span class="big-circle"></span>
    <img src="img/shape.png" class="square" alt="" />
    <div class="form">
      <div class="contact-info">
        <h3 class="title">Let's get in touch</h3>
        <p class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          dolorum adipisci recusandae praesentium dicta!
        </p>
        <div class="info">
          <div class="information">
            <img src="${location}" class="icon" alt="" />
            <p>92 Cherry Drive Uniondale, NY 11553</p>
          </div>
          <div class="information">
            <img src="${email}" class="icon" alt="" />
            <p>lorem@ipsum.com</p>
          </div>
          <div class="information">
            <img src="${phone}" class="icon" alt="" />
            <p>123-456-789</p>
          </div>
        </div>
        <div class="social-media">
          <p>Connect with us :</p>
          <div class="social-icons">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="$fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="contact-form">
        <span class="circle one"></span>
        <span class="circle two"></span>
        <form action="index.html" autocomplete="off">
          <h3 class="title">Contact us</h3>
          <div class="input-container">
            <input type="text" name="name" class="input" />
            <label for="">Username</label>
            <span>Username</span>
          </div>
          <div class="input-container">
            <input type="email" name="email" class="input" />
            <label for="">Email</label>
            <span>Email</span>
          </div>
          <div class="input-container">
            <input type="tel" name="phone" class="input" />
            <label for="">Phone</label>
            <span>Phone</span>
          </div>
          <div class="input-container textarea">
            <textarea name="message" class="input"></textarea>
            <label for="">Message</label>
            <span>Message</span>
          </div>
          <input type="submit" value="Send" class="btn" />
        </form>
      </div>
    </div>
  </div>
    `;
}