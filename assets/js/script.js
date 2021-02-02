// Scroll
// let pos = 0
// $(window).bind('mousewheel DOMMouseScroll', function(event) {
//   if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
//     pos = pos + 10
//   } else {
//     if (pos > 1) {

//       pos = pos - 10
//     }    
//   }
//   $('#container').scrollLeft(pos)    
// })

const timeline = new gsap.timeline().to('#container', {
  duration: 3,
  x: -400,
  y: -50
}).to('#container', {
  duration: 2,
  x: -700,
  y: 0,
  scale: 1.3
}).to('#container', {
  duration: 1,
  x: -150,
  y: -600,
  scale: 1.5
})