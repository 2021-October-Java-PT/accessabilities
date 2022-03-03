
export default function Contact(){
    return` 
    <!DOCTYPE html>
    <html lang="en">
        <head>
           <meta charset="UTF-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
           

           <link rel="stylesheet" href="style.css">
           <title>AccessABILITIES</title>
        </head>
        
        
        <body>
            <div class="contact-section">
                <div class="contact-container">
                    <div class="contact-content-section">
                        <div class="contact-title">
                            <h1 class="contact-h1">Contact Us</h1>
                        </div>
                        <div class="contact-content">
                            <p class="contact-p">Contact us at: 555-55-5555<br>Email Us At: www.access.com</p>
                            <div class="button">
                                <a href="">Read More</a>
                            </div>
                        </div>
                        <div class="contact-social">
                            <a onclick="parent.open('https://www.facebook.com/Accessabilities-100646232581045')"><i class="fab fa-facebook-f"></i></a>
                            <a onclick="parent.open('https://twitter.com/accessABILITIEZ')"><i class="fab fa-twitter"></i></a>
                            <a onclick="parent.open('https://www.instagram.com/accessabilities4/')"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="contact-image-section">
                        <img class="contact-img" src="https://i.guim.co.uk/img/media/4481b1ba63cbeb6ec402a785e3b006762a6868c1/0_112_2121_1273/master/2121.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=f9591a7520016902945ec208792f7b93">
                    </div>
                </div>
            </div>
        </body>
    </html>
    `;
}