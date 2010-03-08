// Animation

// Animate an Attribute
var c = paper.circle(100, 200, 60).attr({fill: "r(0.33, 0.33)#fff-#000", 'stroke-width': 0});
c.animate({rotation: 720}, 2000, 'bounce');

// Morph a circle into a square
//paper.circle(300, 200, 60).attr({fill: '#f80', stroke: '#f80'});
//paper.rect(240,140,120,120).attr({fill: '#00f', stroke: '#00f'});

var r = paper.rect(300,25,100,100, 5).attr({fill: '0-#f00-#ff0'});
r.animate({rotation: 360}, 2000, 'bounce');

var r1 = paper.rect(300,200,100,100, 5).attr({fill: '0-#00f-#f0f'});
r1.animate({rotation: -360}, 2000, 'bounce');