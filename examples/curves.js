// Curves
// SVG provides a range of curved paths and their specification
// can get quite tricky - you have to be very careful about typos
// if you specify them manually

// cubic Bézier curves (C, c, S and s)
paper.path("M100,200 C100,100 250,100 250,200 S400,300 400,200");


// quadratic Bézier curves (Q, q, T and t)
paper.path('M100,150 Q200,25 300,150 T500,150').attr({stroke: '#f00'});

// elliptical arc curves (A and a)
// Move to the top left corner, specify the center with 'a' (relative)
paper.path("M250,300 a50,50 0 0,1 50,-50").attr({stroke: '#0f0', 'stroke-width': 3});
paper.path("M250,300 a50,50 0 1,0 50,-50").attr({stroke: '#00f', 'stroke-width': 3});