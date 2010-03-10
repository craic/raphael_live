// Colors and Gradients

// Multiple Formats for color specification are available
// 'Short' hexadecimal
paper.rect(50,25,100,25).attr({fill: '#f00'});
// 'Long' hexadecimal
paper.rect(150,25,100,25).attr({fill: '#ffff00'});
// Named colors
paper.rect(250,25,100,25).attr({fill: 'green'});
// RGB rgb - numeric and percentage
paper.rect(350,25,100,25).attr({fill: 'rgb(0%,50%,100%)'});
// HSB and HSL - fractional and percentage
paper.rect(450,25,100,25).attr({fill: 'hsb(0.75,0.5,1.0)'});

// Linear Gradients
// One color into another - red into blue
paper.rect(25,75,75,200).attr({'stroke-width': 0, fill: '90-#f00-#00f'});
// One color into another via an intermediate - red into blue via white
paper.rect(105,75,75,200).attr({'stroke-width': 0, fill: '90-#f00-#fff-#00f'});
// One color into another via an intermediate at a specific point
paper.rect(185,75,75,200).attr({'stroke-width': 0, fill: '90-#f00-#fff:33-#00f'});
// You are not limited 3 colors...
paper.rect(265,75,75,200).attr({'stroke-width': 0, fill: '90-#f00-#ff0:33-#0f0:67-#00f'});

paper.rect(375,75,90,90).attr({'stroke-width': 0, fill: '135-#f00-#0ff'});
paper.rect(475,75,90,90).attr({'stroke-width': 0, fill: '45-#f00-#0ff'});
paper.rect(375,175,90,90).attr({'stroke-width': 0, fill: '235-#f00-#0ff'});
paper.rect(475,175,90,90).attr({'stroke-width': 0, fill: '325-#f00-#0ff'});

// Radial Gradients - circles and ellipses only
// Specify the center of the gradient and the color gradient
paper.circle(100,340,50).attr({'stroke-width': 0, fill: "r(0.5, 0.5)#fff-#000"});
paper.circle(225,340,50).attr({'stroke-width': 0, fill: "r(0.25, 0.25)#fff-#000"});
paper.circle(350,340,50).attr({'stroke-width': 0, fill: "r(0.75, 0.25)#fff-#000"});

// Multiple colors also work with radial gradients
paper.circle(500,340,50).attr({'stroke-width': 0, fill: "r(0.33, 0.33)#f00-#8f0:30-#0ff:60-#00f"});
