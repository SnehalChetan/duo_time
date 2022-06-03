let chaser = document.getElementsByClassName("chaser")[0]
console.log(chaser);
let counter = 0;
chaser.style.position = 'absolute';
chaser.style.left = "50px";
chaser.style.top = "250px";

function flip() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    chaser.style.transform = 'rotate(90deg)';
    chaser.style.backgroundColor = randomColor;
    counter ++;
    chaser.style.left= parseInt(chaser.style.left) +50 +"px";
    if (counter < 20) {
        setTimeout(flip, 1000);
    }
};

chaser.addEventListener("click", function () {
    counter=0
    flip()
});

let colorBox=document.getElementsByClassName("colorBox");

colorBox[0].style.backgroundColor= 'salmon';
colorBox[0].style.height= "500px";
colorBox[0].style.width= "350px";
colorBox[0].style.borderBottomLeftRadius= "25px";
colorBox[0].style.borderBottomRightRadius= "25px";

let lead=document.getElementsByClassName("lead");
    lead[0].style.height='50px';
    lead[1]
console.log(lead)

let bigText= document.getElementsByClassName("display-5")
    bigText[2].style.height='110px';
    bigText[3].style.height='110px';

let images = document.getElementsByTagName("img");
images[4].src='./img/Nicole_Kidman.jpg';
images[4].style.width='350px';
images[4].style.height='500px';
images[1].src='./img/kitten.jpg';
images[1].style.width='350px';
images[1].style.height='500px';
images[2].style.height='500px';
images[2].style.width= '350px';
images[3].style.height='500px';
images[3].style.width='350px';
images[5].src='./img/theOthers.jpg';
images[5].style.height='500px';
images[5].style.width='350px';
images[0].style.borderRadius='25px'

let shadowBox=document.getElementsByClassName("shadowBox");
shadowBox[0].style.height ='500px';
shadowBox[1].style.height ='500px';
shadowBox[2].style.height='500px';
shadowBox[3].style.heigth='500px';
shadowBox[4].style.height='500px';
shadowBox[5].style.height='500px';
document.getElementsByClassName("greetImg shadow-sm d-none d-md-block")[0].style.backgroundColor='# 248,249,250';

/*let bigBox=document.getElementsByClassName("me-md-3");
bigBox[0].style.display='900px';
bigBox[1].style.display='900px';
bigBox[2].style.display='900px';
console.log('bigBox',bigBox);*/
//console.log(images);