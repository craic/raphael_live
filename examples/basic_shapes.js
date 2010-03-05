// Basic shapes with no styling:

// Rectangles
// rect(x, y, width, height, [corner radius])
// Basic rectangle - default corner radius is 0
paper.rect(25, 25, 100, 100);
// Rectangle with rounded corners
paper.rect(25, 150, 150, 75, 10);

// Circles and Ellipses
// circle(x_center, y_center, radius)
paper.circle(300, 75, 50);

// ellipse(x_center, y_center, h_radius, v_radius)
paper.ellipse(300, 190, 70, 30);
paper.ellipse(300, 310, 20, 70);

// Basic Straight Lines - Horizontal and Vertical
paper.path("M 450 20 L 450 120");
paper.path("M 390 70 L 510 70");

// Basic Straight Lines - Diagonal
paper.path("M 400 250 L 500 350");
paper.path("M 500 250 L 400 350");