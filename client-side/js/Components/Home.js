export default function Home() {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>AccessABILITIES</title>
</head>
<body>
    <div id="pageContent" class="Page">
        <div class="imageContainer-text">
            <h1>It Takes a <br> Village</h1>
        </div>
        <head>
        <div class="imageContainer">
        </div>
        </head>
        <div class="wrapper">
            <div class="second_page_nested">

                <div class="helpingCaring-Text">
                    <h1>Helping<br> & Caring </h1>
    
                    <a id="partnerBtn" class="btnHover">
                    <button class="partnerBtn_Text">Become a Partner</button>
                    </a>
    
                </div>
                    <div class="box box1"  >
                        <img id= "accessBtn" src="https://images.unsplash.com/photo-1570793005299-c091be91bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGlzYWJpbGl0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="woman in wheelchair going down the street">
                    
                    <div class="box1-text">
                        <h3 class"box1-h3">Access</h3>
                        <p>Places to go and reviews of our partners!</p>
                    </div>

                </div>
            <div class="box box2"><img id="villageBtn" src="https://images.unsplash.com/photo-1581090122319-8fab9528eaaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlzYWJpbGl0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="man in wheelchair gets help with his protestic arm">
                <section class="box1-text">
                    <h3 class"box2-h3">The Village</h3>
                    <p>Resources to help you take care of your loved ones.</p>
                </section>
            </div>

            <div class="box box3"><img id="btnPartner"src="https://images.unsplash.com/photo-1569937756447-1d44f657dc69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGRpc2FiaWxpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="woman looks out at sceen with a friend">

                <section class="box1-text">
                    <h3 class="box3-h3">Partners</h3>
                    <p>Our partners that work to help us help you and your loved ones</p>
                </section>
            </div>
        </div>
    </div>

    <footer class="footer">
        <div class="footer-center">
            <p><a>&copy; AccessABILITIES 2022</a></p>
        </div>
    </footer>
    <script type="module" src="./js/index.js"></script>
</div>
</body>
</html>

    `;
}
