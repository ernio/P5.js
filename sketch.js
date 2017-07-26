var w;
var t = 0;
function setup() {

	createCanvas(600,600);
	w = new Walker();

}

function draw() {
	background(20);
	w.update();
	w.display();

}
function Walker() {
	var t = 0;
	var p = 0;
	this.pos = createVector( 0,  0);

	this.update = function() {

		var nx = noise(t) ;
		var ny = noise(p);
		//print(noise(t)*i);
		var x = map(nx, 0, 1, 0, width);
		var y = map(ny, 1,0, 0, height)
    //print(x);

		if(x > width) x= 2;
		if(x < 0) x= width;
		this.pos.x = x;
		this.pos.y = y;
		t += 0.05;
		p += 0.03;

	}
	this.display = function() {
		fill(255);
		ellipse(this.pos.x, this.pos.y, 25,25);
	}




}
