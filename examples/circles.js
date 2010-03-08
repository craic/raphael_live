// Circles and Ellipses
// circle(x_center, y_center, radius)
// ellipse(x_center, y_center, h_radius, v_radius)

// Basic circle
paper.circle(100, 75, 50);
// Basic ellipses
paper.ellipse(300, 75, 70, 25);
paper.ellipse(500, 75, 25, 70);

// Styled circles and ellipses
paper.circle(200, 250, 50).attr({fill: '#8ff', stroke: '#008', 'stroke-width': 5});

paper.circle(375, 250, 50).attr({fill: '#f00', 'stroke-width': 0, 'fill-opacity': 0.5 });
paper.circle(425, 250, 50).attr({fill: '#00f', 'stroke-width': 0, 'fill-opacity': 0.5 });
paper.circle(400, 300, 50).attr({fill: '#0f0', 'stroke-width': 0, 'fill-opacity': 0.5 });
