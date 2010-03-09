// Lines and Complex Straight Line Paths

// SVG Paths are specified in their own format
// http://www.w3.org/TR/SVG/paths.html#PathData has the details
// Path strings take the general form of 'moveto x,y lineto x,y...'
// Actions are specified by the letters M (moveto), L (lineto)
// You can separate numbers with commas if you want
// That is helpful with complex paths to reduce typos

// Uppercase actions use ABSOLUTE coordinates
// A basic straight line from 25,25 to 100,100
paper.path("M 25 25 L 100 100");
// H and V provide shorter syntax for horizontal and vertical lines
paper.path("M 150 25 H 250").attr({stroke: '#f00'});
paper.path("M 150 25 V 100").attr({stroke: '#00f'});

// Single path strings can contain multiple segments
paper.path("M 300 25 L 350 75 L 300 125 M 350 25 L 300 75 L 350 125").attr({stroke: '#0f0'});

// Close a path to its origin with Z
// this creates polygons that can be filled
paper.path("M 400 25 L 500 25 L 450 125 Z").attr({fill: "#ff0"});

// Coordinates can also be RELATIVE to the last point 
// Use the lower case form of the action letter - m, l, etc
// a zig zag line
paper.path("M 25 200 l 50 50 l 50 -50 l 50 50 l 50 -50").attr({'stroke-width': 4});
// a filled square
paper.path("M 400 200 l 100 0 l 0 100 l -100 0 z").attr({fill: '#0ff'});
