// Curves - Elliptical Arc
// A,a args are radius_x, radius_y, 
//        x axis rotation (0,1),
//        large-arc-flag (0,1)
//        sweep-flag (0,1)
//        x, y of point to draw to
// Using the relative form (a) is the way to go with this command

// Draw an arc from 100,100 to 150,50, radius 50, 
// using the shorter of the two arc paths (0) and positive angle direction(1)
// See the SVG docs to see the meaning of these parameters
paper.path("M 75,100 a 50,50 0 0,1 50,-50").attr({stroke: '#f00', 'stroke-width': 3});
// Draw the corresponding longer arc - 'counter-clockwise' - in blue
paper.path("M 75,100 a 50,50 0 1,0 50,-50").attr({stroke: '#00f', 'stroke-width': 3});
// Mark the start and end points of the arc and the rotation center in gray
paper.path("M 75,100 l 50,0 l 0,-50").attr({stroke: '#888'});

// Specify a different center using the large arc and sweep flags
paper.path("M 400,100 a 50,50 0 1,1 50,-50").attr({stroke: '#f00', 'stroke-width': 3});
paper.path("M 400,100 a 50,50 0 0,0 50,-50").attr({stroke: '#00f', 'stroke-width': 3});
paper.path("M 400,100 l 0,-50 l 50,0").attr({stroke: '#888'});

// Use different a and y radii to draw elliptical arcs 
paper.path("M 75,300 a 100,50 0 0,1 100,-50").attr({stroke: '#f00', 'stroke-width': 3});
paper.path("M 75,300 a 100,50 0 1,0 100,-50").attr({stroke: '#00f', 'stroke-width': 3});
paper.path("M 75,300 l 100,0 l 0,-50").attr({stroke: '#888'});

// Line and curve paths combined to create a simple pie chart-like graphic
paper.path("M 390,300 a 60,60 0 0,1 60,-60 l 0,60 z").attr({stroke: '#f00', 'stroke-width': 3, fill: '#f80'});
paper.path("M 400,300 a 50,50 0 1,0 50,-50").attr({stroke: '#00f', 'stroke-width': 3});

