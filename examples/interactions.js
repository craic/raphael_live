// Interactions
// Objects in Raphael are part of the DOM
// Calling the 'node' method returns a reference to the DOM object

// Here is the basic JavaScript way to create a button
var r1 = paper.rect(50,130,80,80,10).attr('fill', '#f00');
r1.node.onclick = function() {
	alert("You clicked the Red button");
};

// Here is the same thing done the jQuery way
var r2 = paper.rect(150,130,80,80,10).attr('fill', '#00f');
$(r2.node).click(function() {
	alert("You clicked the Blue button");
});

// Bind jQuery hover event to a Raphael circle
var c1 = paper.circle(350,170,40).attr('fill', '#0f0');
$(c1.node).hover(function() { c1.attr({fill: '#ff0'});},
                 function() { c1.attr({fill: '#0f0'});});

// Drag an object around the canvas
var drag = {x: 0, y: 0, state: false};

var c2 = paper.circle(500,170,40).attr('fill', '#80f');
$(c2.node).mousedown(function(e) {
	if(!drag.state) {
		c2.attr({fill: '#808'});
		c2.node.style.cursor = "move";
		drag.x = e.pageX;
		drag.y = e.pageY;
		drag.state = true;
	}
	return false;
});

$(c2.node).mousemove(function(e) {
	if(drag.state) {
		c2.translate(e.pageX - drag.x, e.pageY - drag.y);
		drag.x = e.pageX;
		drag.y = e.pageY;
	}
});

$(c2.node).mouseup(function() {
	c2.attr({fill: '#80f'});
	c2.node.style.cursor = "default";
	drag.state = false;
});

$(c2.node).mouseout(function() {
	$(c2.node).mouseup();
});


paper.text(300,25, 'Click, hover over or drag the objects').attr({'font-size': 18});

