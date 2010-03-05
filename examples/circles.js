// Circles and Ellipses
// circle(x_center, y_center, radius)
// ellipse(x_center, y_center, h_radius, v_radius)

// Basic circle
paper.circle(100, 75, 50);
// Basic ellipses
paper.ellipse(300, 75, 70, 25);
paper.ellipse(500, 75, 25, 70);

// Styled circles and ellipses
paper.circle(100, 250, 50).attr({fill: '#8ff', stroke: '#008', 'stroke-width': 5});

paper.circle(275, 250, 50).attr({fill: '#f00', 'stroke-width': 0, 'fill-opacity': 0.5 });
paper.circle(325, 250, 50).attr({fill: '#00f', 'stroke-width': 0, 'fill-opacity': 0.5 });
paper.circle(300, 300, 50).attr({fill: '#0f0', 'stroke-width': 0, 'fill-opacity': 0.5 });


paper.ellipse(500, 250, 70, 20).attr({fill: '#f00', 'stroke-width': 0});
paper.ellipse(500, 250, 20, 70).attr({fill: '#0f0', 'stroke-width': 0});;
paper.circle(500, 250, 30).attr({fill: '#00f', 'stroke-width': 4, 'fill-opacity': 0.6});;
