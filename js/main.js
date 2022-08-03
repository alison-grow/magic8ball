// BEGINNING OF TEXT ANIMATION

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

// END OF TEXT ANIMATION

// BEGINNING OF BODY

// const magicEightBall = document.createElement('button')
// magicEightBall.innerHTML = "🐈‍⬛ ASK ME ANYTHING!!!!! 🐈‍⬛"
// magicEightBall.addEventListener('click', getAnswer)

// const BODY = document.querySelector('body')


// BODY.appendChild(magicEightBall)

// function getAnswer() {
//     console.dir(document)
//     .then(res => {
//         console.log(res)
//         return res.json()
//     })
//     .then(data => {
//         console.log(data)
//         const magicAnswer = document.createElement('p')
//         magicAnswer.innerHTML = `${data.text}`
//         BODY.append(magicAnswer)
//     })
// }

const imageArray = [
	"./img/magic8ball_1.png",
	"./img/magic8ball_4.png",
	"./img/magic8ball_5.png",
	"./img/magic8ball_6.png",
	"./img/magic8ball_7.png",
	"./img/magic8ball_8.png",
	"./img/magic8ball_9.png",
	"./img/magic8ball_10.png",
	"./img/magic8ball_11.png",
	"./img/magic8ball_12.png",
	"./img/magic8ball_13.png",
	"./img/magic8ball_14.png",
	"./img/magic8ball_15.png",
	"./img/magic8ball_16.png",
  "./img/magic8ball_17.png",
  "./img/magic8ball_18.png",
  "./img/magic8ball_19.png",
  "./img/magic8ball_20.png"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}