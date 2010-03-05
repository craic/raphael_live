// Basic Styling

// Styles are applied using the attr() function
// See the docs for all possible parameters

// Attributes can be chained on to the end of objects when they are created
paper.rect(25,25,75,75).attr('fill', '#f00');

// Or applied separately

var r0 = paper.rect(125,25,75,75);
r0.attr('fill', '#00f');

// They can be specified as strings (shown above) or as a hash
// NOTE: attribute names with dashes MUST be quoted
var r1 = paper.rect(225,25,75,75);
r1.attr({fill: '#0f0', stroke: '#f80', 'stroke-width': 5});


