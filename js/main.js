// BEGINNING OF TEXT ANIMATION


var i = 0;
var txt = 'ask me anything....';
var speed = 130;

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("askMe").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// END OF TEXT ANIMATION

// BEGINNING OF BODY




const imageArray = [
	"./img/magic8ball_1.jpg",
	"./img/magic8ball_4.jpg",
	"./img/magic8ball_5.jpg",
	"./img/magic8ball_6.jpg",
	"./img/magic8ball_7.jpg",
	"./img/magic8ball_8.jpg",
	"./img/magic8ball_9.jpg",
	"./img/magic8ball_10.jpg",
	"./img/magic8ball_11.jpg",
	"./img/magic8ball_12.jpg",
	"./img/magic8ball_13.jpg",
	"./img/magic8ball_14.jpg",
	"./img/magic8ball_15.jpg",
	"./img/magic8ball_16.jpg",
  	"./img/magic8ball_17.jpg",
  	"./img/magic8ball_18.jpg",
  	"./img/magic8ball_19.jpg",
  	"./img/magic8ball_20.jpg"
];

const image = document.querySelector("img");
const button = document.querySelector("button");
var div = document.getElementById('answers');

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
  	div.appendChild(image)
}

$("#btn").click(function(){
  var data = $("#textbox").val();
  $("#textbox").replaceWith('<p id="playerQuestion">'+data+'</p>') 
});


var i = 0;
var txt = 'ask me anything....';
var speed = 130;

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("askMe").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
