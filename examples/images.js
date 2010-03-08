// Images:
// Place an image from a URL in the top left corner 
var img = paper.image('examples/cats.jpg', 50, 20, 160, 120);
// Clone the image object (in JavaScript) and then move it (in Raphael)
// Translate is relative to the original position
img.clone().translate(0,200);
// Clone, move and rotate
img.clone().translate(300,30).rotate(20);
img.clone().translate(300,30).rotate(40);
img.clone().translate(300,30).rotate(60);
// Clone, move, scale and rotate
img.clone().translate(300,200);
img.clone().translate(300,200).scale(0.9).rotate(-10);
img.clone().translate(300,200).scale(0.8).rotate(-20);

