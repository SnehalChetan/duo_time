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

document.getElementsByClassName("colorBox")[0].style.backgroundColor= 'coral';
document.getElementsByClassName("lead")[0].style.height='50px';
let bigText= document.getElementsByClassName("display-5")
    bigText[2].style.height='110px';
    bigText[3].style.height='110px';

let images = document.getElementsByTagName("img");
images[4].src='./img/Nicole_Kidman.jpg';
images[4].style.width= "350px";
images[4].style.height= "412px";
images[1].src='./img/kitten.jpg';
images[1].style.width= "350px";
images[1].style.height= "412px";


//console.log(images);