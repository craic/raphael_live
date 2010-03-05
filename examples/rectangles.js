// Rectangles
// rect(x, y, width, height, [corner radius])

// Basic rectangle - default corner radius is 0
paper.rect(50, 50, 200, 50);
// Rectangle with curved corners
paper.rect(350, 50, 200, 50, 8);

// Style rectangles by chaining attributes on to them
// NOTE: attribute names with dashes must be quoted!
paper.rect(50, 150, 200, 50, 8).attr({fill: '#f00', 'stroke-width': 0});

// or assign to a variable and use by separate attr() calls
var r = paper.rect(350, 150, 200, 50, 8);
r.attr('fill', '#0ff');
// Or like this...
r.attr({stroke: '#00f', 'stroke-width': 4});

// Rectangles are drawn from the back to the front
paper.rect(200, 250, 200, 50, 8).attr({fill: '#f00'});
paper.rect(240, 270, 200, 50, 8).attr({fill: '#0f0'});
paper.rect(280, 290, 200, 50, 8).attr({fill: '#00f'});

