// Text
// text(x, y, string) - coordinates mark the CENTER of the string
var t0 = paper.text(300, 50, 'Hello Raphaël');
// You will want to apply styling for text to be useful
var t1 = paper.text(300, 100, 'Hello Raphaël').attr({'font-size': 32});
// font color is specified in 'fill'
var t2 = paper.text(300, 150, 'Hello Raphaël').attr({'font-size': 32, 'fill': '#f00'});
var t3 = paper.text(300, 200, 'Hello Raphaël').attr({'font-size': 32, 'font-family': 'Times', 'fill': '#0f0'});
// The 'font' attribute is a condensed form of size and family
// Families can be specified as a list to handle missing fonts
var t4 = paper.text(300, 250, 'Hello Raphaël').attr({font: '32px MissingFont, Courier', 'fill': '#00f'});
// Stroke is set to the fill color by default for text
// Set it explicitly for outlined characters
var t5 = paper.text(300, 300, 'Hello Raphaël').attr({font: '32px Arial', 'font-weight': 'bold', 'fill': '#f0f', stroke: '#000'});
