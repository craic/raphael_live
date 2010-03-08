// Colors and Gradients

// Formats for color specification

// Format for gradient

// One color into another
var r = paper.rect(25,25,75,200).attr({'stroke-width': 0, fill: '90-#fff-#f00:20-#000'});

// One color through second into third
// and you can keep adding them - it'll look a mess but you do it!

// You can specify where in the gradient the middle color is as specified by giving a percentage
var r1 = paper.rect(125,25,75,200).attr({'stroke-width': 0,
                                        fill: '90-#fff-#f88:50-#000'});

// Format for radial gradient - circles and ellipses only

var c = paper.circle(300,200,75).attr({'stroke-width': 0, fill: "r(0.33, 0.33)#fff-#000"});

// and again with a middle color

var c1 = paper.circle(500,200,75).attr({'stroke-width': 0, fill: "r(0.33, 0.33)#000-#888:20-#000"});

//var c1 = paper.circle(500,200,75).attr({'stroke-width': 0, fill: "r(0.33, 0.33)#fff-#888:20-#f00:60-#0f0:80-#000"});