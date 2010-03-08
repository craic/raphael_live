// Basic Styling using the attr() function
// attr() will take strings or an attribute block (hash)
// I recommend you just use the hash to avoid typos

// Attributes can be chained on to the end of objects when they are created
paper.rect(50,25,75,75).attr({fill: '#0ff'});
// Or applied separately to variables
var r0 = paper.rect(200,25,75,75);
r0.attr({fill: '#f00', 'stroke-width': 0});
// NOTE: attribute names with dashes MUST be quoted

var r1 = paper.rect(350,25,75,75);
r1.attr({fill: '#0f0', stroke: '#f80', 'stroke-width': 5, 'stroke-dasharray': '-.'});

// You can get the value of an object attribute using attr()
var color = r0.attr('fill');
var r2 = paper.rect(500,25,75,75).attr({fill: color});
// Opacity affects the fill and stroke, fill-opacity leaves the stroke opaque
paper.rect(200,225,75,75).attr({fill: '#0ff'});
paper.rect(250,250,75,75).attr({fill: '#f0f', 'fill-opacity': 0.5});
paper.rect(300,270,75,75).attr({fill: '#ff0', 'opacity': 0.25});
