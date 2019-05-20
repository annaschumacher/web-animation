/*document.addEventListener('mousemove', (e) => {
	const sqrs = document.querySelectorAll('.pupil');

	const mouseX = e.pageX;
	const mouseY = e.pageY;

	sqrs.forEach(sqr => {
		const sqrX = sqr.offsetLeft + 20;
		const sqrY = sqr.offsetTop + 20;

		const diffX = mouseX - sqrX;
		const diffY = mouseY - sqrY;

		const radians = Math.atan2(diffY, diffX);

		const angle = radians * 180 / Math.PI;

		sqr.style.transform = `rotate(${angle}deg)`;
	})

})
*/

var pupillen = document.getElementsByClassName('pupil');
document.onmouseover = function() {
  var x = event.clientX * 100 /window.innerWidth + "%";
  var y = event.clientY * 100 /window.innerHeight + "%";
  //event.clientX => get the horizontal coordinate of the mouse
  //event.clientY => get the Vertical coordinate of the mouse
  //window.innerWidth => get the browser width
  //window.innerHeight => get the browser height

  for(var i=0;i<2;i++){
    pupillen[i].style.left = x;
    pupillen[i].style.top = y;
    pupillen[i].style.transform = "translate(-"+x+",-"+y+")";
  }
}



var eye1 = document.querySelector('.eye1');
var eye2 = document.querySelector('.eye2');
var eye1light = document.querySelector('.eye1light');
var eye2light = document.querySelector('.eye2light');
var pupil = document.querySelector('.pupil');
var pupileen = document.getElementById('oogeen');
var pupiltwee = document.getElementById('oogtwee');

var text = document.querySelector('.text')
var body = document.querySelector('body');
var touw = document.querySelector('.touw');
touw.addEventListener('click', function() {
  // body.classList.replace('dark','light');
  // if(body.classList.contains === light) {
  //   console.log('Light')
  //   body.classList.replace('light','dark');
  // }
  body.classList.toggle('light');
  eye1.classList.toggle('close');
  eye2.classList.toggle('close');
  text.classList.toggle('lighttext');
  eye1.classList.toggle('eye1light');
  eye2.classList.toggle('eye2light');
  pupileen.classList.toggle('pupillight');
  pupiltwee.classList.toggle('pupillight');
})
