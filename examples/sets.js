// Sets
// Sets are like arrays of Raphael objects - you can apply attributes
// or transformations to all members at once

var c1 = paper.circle(100,200,40).attr({'fill': '#f00'});
var c2 = paper.circle(200,200,40).attr({'fill': '#ff0'});
var c3 = paper.circle(300,200,40).attr({'fill': '#0f0'});
var c4 = paper.circle(400,200,40).attr({'fill': '#0ff'});
var c5 = paper.circle(500,200,40).attr({'fill': '#00f'});
var st = paper.set();
st.push(c1, c2, c3, c4, c5);
// Apply an attribute to the entire set
st.attr({'stroke-width': 2});
// Apply an animation to the entire set or a single member
st.animate({rotation: "180,300,200"}, 2000, function () {
	st.animate({fill: '#eee'}, 2000, function () {
		c3.animate({translation: '0,100'}, 2000);
	});
});

paper.text(300,25, 'Objects can be grouped into Sets').attr({'font-size': 18});
