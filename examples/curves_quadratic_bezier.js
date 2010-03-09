// Curves - Quadratic Bezier
// See the SVG docs for details
// http://www.w3.org/TR/SVG/paths.html#PathData

// Quadratic Bézier curves (Q, q, T and t)
// Q = curveto, T = smooth curveto

// Quadratic Bézier curves (Q, q, T and t)
paper.path('M 100,150 Q 200,25 300,150 T 500,150').attr({stroke: '#f00', 'stroke-width': 3});

// Mark the control points in gray
paper.path("M 100,150 L 200,25 L 300,150").attr({stroke: '#888'});
paper.path("M 300,150 L 400,275 L 500,150").attr({stroke: '#888'});


