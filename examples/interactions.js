// Interactions

// Objects in Raphael are part of the DOM
// Calling the 'node' method returns a reference to the DOM object

// Here is the basic JavaScript way to create a button
var r0 = paper.rect(150,50,75,75,10).attr('fill', '#f00');

r0.node.onclick = function() {
	alert("You clicked the Red button");
};

// Here is the same thing done the jQuery way
var r1 = paper.rect(375,50,75,75,10).attr('fill', '#00f');

$(r1.node).click(function() {
	alert("You clicked the Blue button");
});
