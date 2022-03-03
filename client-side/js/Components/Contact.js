// import email from '../../assets/images/email.png';
// import location from '../../assets/images/location.png';
// import phone from '../../assets/images/phone.png';
// import shape from '../../assets/images/shape.png';
// export default function Contact(){
//     //add responsiveness to mobile,faq animations/content,styling,replace placeholder pics
//     return`
//     <link rel="stylesheet" href="style-contact.css" />
//     <div class="wrapper">
//     <h1>Contact</h1>
//     <h2>Maybe your questions already have answers!</h2>
//     <ul>
//         <li>
//             <div class = "dropdown">
//             How can I alert the community to my own experience at a location?
//                 <div class="dropdown-content">
//                     <p class="desc">
//                         Fred the baker baking company is out here making donuts dont you know?
//                         We make all the donuts. We make so many donuts you wouldnt even believe it.
//                         Thats all you need to know isnt it? We make donuts. You buy them. See you here.
//                     </p>
//                 </div>
//             </div>
//         </li>
//         <li>
//             <div class = "dropdown">
//             How do I leave a review?
//                 <div class="dropdown-content">
//                     <p class="desc">
//                         Fred the baker baking company is out here making donuts dont you know?
//                         We make all the donuts. We make so many donuts you wouldnt even believe it.
//                         Thats all you need to know isnt it? We make donuts. You buy them. See you here.
//                     </p>
//                 </div>
//             </div>
//         </li>
//         <li>
//             <div class = "dropdown">
//             What can I do if there is not a lot of content for my area?
//                 <div class="dropdown-content">
//                     <p class="desc">
//                         Fred the baker baking company is out here making donuts dont you know?
//                         We make all the donuts. We make so many donuts you wouldnt even believe it.
//                         Thats all you need to know isnt it? We make donuts. You buy them. See you here.
//                     </p>
//                 </div>
//             </div>
//         </li>
//     </ul>
//     <h2>Use our contact form and we will get back with you as soon as possible!</h2>
//     <p>Phone: 555-555-5555</p>
//     <p>Email: customerservice@accessaccessability.com</p>
//     <p>How can my business be added to your website?</p>
//         <div class="cont">
//         <style>
//         input{
//             all: unset;
//         }
//         body{
//             all:unset
//         }
//         textarea{
//             all:unset
//         }
//         form{
//             all:unset
//         }
//         label{
//             all:unset
//         }

//         .dropdown {
//             position: relative;
//             display: inline-block;
//           }

//           .dropdown-content{
//             display: none;
//             position: sticky;
//             top: 0px;
//             left: 08px;
//             background-color: #f9f9f9;
//             min-width: 40rem;
//             box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//             z-index: 3;
//           }

//           .dropdown:hover .dropdown-content{
//             display: block;
//           }

//           * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//           body,
//           input,
//           textarea {
//             font-family: "Poppins", sans-serif;
//             max-width:80%;
//             align-content:center;

//           }

//           .cont{
//             position: relative;
//             width: 100%;
//             min-height: 100vh;
//             padding: 2rem;
//             background-color: #fafafa;
//             overflow: hidden;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//           }

//           .form-for-contact {
//             width: 100%;
//             max-width: 820px;
//             background-color: #fff;
//             border-radius: 10px;
//             box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
//             z-index: 1000;
//             overflow: hidden;
//             display: grid;
//             grid-template-columns: repeat(2, 1fr);
//           }

//           .contact-form {
//             background-color: #1abc9c;
//             position: relative;
//           }

//           .circle {
//             border-radius: 50%;
//             background: linear-gradient(135deg, transparent 20%, #149279);
//             position: absolute;
//           }

//           .circle.one {
//             width: 130px;
//             height: 130px;
//             top: 130px;
//             right: -40px;
//           }

//           .circle.two {
//             width: 80px;
//             height: 80px;
//             top: 10px;
//             right: 30px;
//           }

//           .contact-form:before {
//             content: "";
//             position: absolute;
//             width: 26px;
//             height: 26px;
//             background-color: #1abc9c;
//             transform: rotate(45deg);
//             top: 50px;
//             left: -13px;
//           }

//           form {
//             padding: 2.3rem 2.2rem;
//             z-index: 10;
//             overflow: hidden;
//             position: relative;
//           }

//           .title {
//             color: #fff;
//             font-weight: 500;
//             font-size: 1.5rem;
//             line-height: 1;
//             margin-bottom: 0.7rem;
//           }

//           .input-cont {
//             position: relative;
//             margin: 1rem 0;
//           }

//           .input1 {
//             width: 100%;
//             outline: none;
//             border: 2px solid #fafafa;
//             background: none;
//             padding: 0.6rem 1.2rem;
//             color: #fff;
//             font-weight: 500;
//             font-size: 0.95rem;
//             letter-spacing: 0.5px;
//             border-radius: 25px;
//             transition: 0.3s;
//           }

//           textarea.input {
//             padding: 0.8rem 1.2rem;
//             min-height: 150px;
//             border-radius: 22px;
//             resize: none;
//             overflow-y: auto;
//           }

//           .input-cont label {
//             position: absolute;
//             top: 50%;
//             left: 15px;
//             transform: translateY(-50%);
//             padding: 0 0.4rem;
//             color: #fafafa;
//             font-size: 0.9rem;
//             font-weight: 400;
//             pointer-events: none;
//             z-index: 1000;
//             transition: 0.5s;
//           }

//           .input-cont.textarea label {
//             top: 1rem;
//             transform: translateY(0);
//           }

//           .btn {
//             padding: 0.6rem 1.3rem;
//             background-color: #fff;
//             border: 2px solid #fafafa;
//             font-size: 0.95rem;
//             color: #1abc9c;
//             line-height: 1;
//             border-radius: 25px;
//             outline: none;
//             cursor: pointer;
//             transition: 0.3s;
//             margin: 0;
//           }

//           .btn:hover {
//             background-color: transparent;
//             color: #fff;
//           }

//           .input-cont span {
//             position: absolute;
//             top: 0;
//             left: 25px;
//             transform: translateY(-50%);
//             font-size: 0.8rem;
//             padding: 0 0.4rem;
//             color: transparent;
//             pointer-events: none;
//             z-index: 500;
//           }

//           .input-cont span:before,
//           .input-cont span:after {
//             content: "";
//             position: absolute;
//             width: 10%;
//             opacity: 0;
//             transition: 0.3s;
//             height: 5px;
//             background-color: #1abc9c;
//             top: 50%;
//             transform: translateY(-50%);
//           }

//           .input-cont span:before {
//             left: 50%;
//           }

//           .input-cont span:after {
//             right: 50%;
//           }

//           .input-cont.focus label {
//             top: 0;
//             transform: translateY(-50%);
//             left: 25px;
//             font-size: 0.8rem;
//           }

//           .input-cont.focus span:before,
//           .input-cont.focus span:after {
//             width: 50%;
//             opacity: 1;
//           }

//           .contact-info {
//             padding: 2.3rem 2.2rem;
//             position: relative;
//           }

//           .contact-info .title {
//             color: #1abc9c;
//           }

//           .text {
//             color: #333;
//             margin: 1.5rem 0 2rem 0;
//           }

//           .information {
//             display: flex;
//             color: #555;
//             margin: 0.7rem 0;
//             align-items: center;
//             font-size: 0.95rem;
//           }

//           .icon {
//             width: 28px;
//             margin-right: 0.7rem;
//           }

//           .social-media {
//             padding: 2rem 0 0 0;
//           }

//           .social-media p {
//             color: #333;
//           }

//           .social-icons {
//             display: flex;
//             margin-top: 0.5rem;
//           }

//           .social-icons a {
//             width: 35px;
//             height: 35px;
//             border-radius: 5px;
//             background: linear-gradient(45deg, #1abc9c, #149279);
//             color: #fff;
//             text-align: center;
//             line-height: 35px;
//             margin-right: 0.5rem;
//             transition: 0.3s;
//           }

//           .social-icons a:hover {
//             transform: scale(1.05);
//           }

//           .contact-info:before {
//             content: "";
//             position: absolute;
//             width: 110px;
//             height: 100px;
//             border: 22px solid #1abc9c;
//             border-radius: 50%;
//             bottom: -77px;
//             right: 50px;
//             opacity: 0.3;
//           }

//           .big-circle {
//             position: absolute;
//             width: 500px;
//             height: 500px;
//             border-radius: 50%;
//             background: linear-gradient(to bottom, #1cd4af, #159b80);
//             bottom: 50%;
//             right: 50%;
//             transform: translate(-40%, 38%);
//           }

//           .big-circle:after {
//             content: "";
//             position: absolute;
//             width: 360px;
//             height: 360px;
//             background-color: #fafafa;
//             border-radius: 50%;
//             top: calc(50% - 180px);
//             left: calc(50% - 180px);
//           }

//           .square {
//             position: absolute;
//             height: 400px;
//             top: 50%;
//             left: 50%;
//             transform: translate(181%, 11%);
//             opacity: 0.2;
//           }

//           @media (max-width: 850px) {
//             .form-for-contact {
//               grid-template-columns: 1fr;
//             }

//             .contact-info:before {
//               bottom: initial;
//               top: -75px;
//               right: 65px;
//               transform: scale(0.95);
//             }

//             .contact-form:before {
//               top: -13px;
//               left: initial;
//               right: 70px;
//             }

//             .square {
//               transform: translate(140%, 43%);
//               height: 350px;
//             }

//             .big-circle {
//               bottom: 75%;
//               transform: scale(0.9) translate(-40%, 30%);
//               right: 50%;
//             }

//             .text {
//               margin: 1rem 0 1.5rem 0;
//             }

//             .social-media {
//               padding: 1.5rem 0 0 0;
//             }
//           }

//           @media (max-width: 480px) {
//             .cont{
//               padding: 1.5rem;
//             }

//             .contact-info:before {
//               display: none;
//             }

//             .square,
//             .big-circle {
//               display: none;
//             }

//             form,
//             .contact-info {
//               padding: 1.7rem 1.6rem;
//             }

//             .text,
//             .information,
//             .social-media p {
//               font-size: 0.8rem;
//             }

//             .title {
//               font-size: 1.15rem;
//             }

//             .social-icons a {
//               width: 30px;
//               height: 30px;
//               line-height: 30px;
//             }

//             .icon {
//               width: 23px;
//             }

//             .input {
//               padding: 0.45rem 1.2rem;
//             }

//             .btn {
//               padding: 0.45rem 1.2rem;
//             }
//           }

//     </style>
//             <span class="big-circle"></span>
//             <img src="img/shape.png" class="square" alt="" />
//             <div class="form-for-contact">
//             <div class="contact-info">
//                 <h3 class="title">Let's get in touch</h3>
//                 <p class="text">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
//                 dolorum adipisci recusandae praesentium dicta!
//                 </p>

//                 <div class="info">
//                 <div class="information">
//                     <img src="${location}" class="icon" alt="" />
//                     <p>92 Cherry Drive Uniondale, NY 11553</p>
//                 </div>
//                 <div class="information">
//                     <img src="${email}" class="icon" alt="" />
//                     <p>lorem@ipsum.com</p>
//                 </div>
//                 <div class="information">
//                     <img src="${phone}" class="icon" alt="" />
//                     <p>123-456-789</p>
//                 </div>
//                 </div>

//                 <div class="social-media">
//                 <p>Connect with us :</p>
//                 <div class="social-icons">
//                     <a href="#">
//                     <i class="fab fa-facebook-f"></i>
//                     </a>
//                     <a href="#">
//                     <i class="$fab fa-twitter"></i>
//                     </a>
//                     <a href="#">
//                     <i class="fab fa-instagram"></i>
//                     </a>
//                     <a href="#">
//                     <i class="fab fa-linkedin-in"></i>
//                     </a>
//                 </div>
//                 </div>
//             </div>

//             <div class="contact-form">
//                 <span class="circle one"></span>
//                 <span class="circle two"></span>

//                 <form action="index.html" autocomplete="off">
//                 <h3 class="title">Contact us</h3>
//                 <div class="input-cont">
//                     <input type="text" name="name" class="input1" />
//                     <label for="">Username</label>
//                     <span>Username</span>
//                 </div>
//                 <div class="input-cont">
//                     <input type="email" name="email" class="input1">
//                     </input>
//                     <label for="">Email</label>
//                     <span>Email</span>
//                 </div>
//                 <div class="input-cont">
//                     <input type="tel" name="phone" class="input1" />
//                     <label for="">Phone</label>
//                     <span>Phone</span>
//                 </div>
//                 <div class="input-cont textarea">
//                     <textarea name="message" class="input1"></textarea>
//                     <label for="">Message</label>
//                     <span>Message</span>
//                 </div>
//                 <input type="submit" value="Send" class="btn" />
//                 </form>
//             </div>
//             </div>
//         </div>
//     `;
// }
