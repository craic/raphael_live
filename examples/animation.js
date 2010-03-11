// Basic Animation

// Animate an Attribute - multiple attrs can be animated in one call
var r0 = paper.circle(75,150,60).attr({fill: "#f00", 'stroke-width': 0});
$(r0.node).click(function() {
  r0.animate({translation: '0,100', fill: '#ff0', 'stroke-width': 6}, 2000);
});

// Animations can have callbacks that trigger on completion, these can be chained
var r1 = paper.rect(180,100,100,100).attr('fill', '#08f');
$(r1.node).click(function() {
  r1.animate({translation: '0,200'}, 2000, function() { 
	r1.animate({translation: '0,-200'}, 2000, function () {
		r1.animate({translation: '0,200'}, 2000)
	})});
});

// Easing functions can start and end animations
var c = paper.circle(375, 150, 60).attr({fill: "r(0.33, 0.33)#fff-#000", 'stroke-width': 0});
$(c.node).click(function() {
	c.animate({rotation: 720}, 2000, 'bounce');
});

// Paths can be animated to morph one object into another
p = paper.path("M 475,200 l 100,0 l -50,-100 z").attr({fill: '#f00'});
$(p.node).click(function() {
  p.animate({path: "M 475,200 l 100,0 l 0,-100 l -100,0 z", fill: '#00f'}, 2000);	
});

paper.text(300,25, 'Click on an object to trigger the animation').attr({'font-size': 18});
