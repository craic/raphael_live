// Curves
// Curves are specified with path() like straight lines but the
// specification involves control points
// See the SVG docs for details
// http://www.w3.org/TR/SVG/paths.html#PathData

// Be really careful about typos is you specify these manually
// Commas in the strings can help

// Cubic Bézier curves (C, c, S and s)
// C = curveto, S = smooth curveto
paper.path("M 50,150 C 50,50 200,50 200,150").attr({"stroke-width": 3});
// Mark the control points in gray
paper.path("M 50,150 L 50,50").attr({stroke: '#888'});
paper.path("M 200,150 L 200,50").attr({stroke: '#888'});

// Using S simplifies the path string by reflecting the last control point
paper.path("M 250,150 C 250,50 400,50 400,150 S 550,250 550,150").attr({"stroke-width": 3});
// Mark the control points in gray
paper.path("M 250,150 L 250,50").attr({stroke: '#888'});
paper.path("M 400,150 L 400,50").attr({stroke: '#888'});
paper.path("M 400,150 L 400,250").attr({stroke: '#888'});
paper.path("M 550,150 L 550,250").attr({stroke: '#888'});

// These examples use relative coordinates
paper.path("M 50,300 c 25,-50 175,-50 150,0").attr({"stroke-width": 3});
// Control points
paper.path("M 50,300 l 25,-50 M 200,300 l 25,-50").attr({stroke: '#888'});


paper.path("M 350,300 c 25,-50 125,50 150,0").attr({"stroke-width": 3});
// Control points
paper.path("M 350,300 l 25,-50 M 500,300 l -25,50").attr({stroke: '#888'});



