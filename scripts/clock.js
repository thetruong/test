//get the current hours and minutes
var d = new Date();
var hour = d.getHours();
var minute = d.getMinutes();

var stage = new PIXI.Stage(0x97c56e, true);

var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, null);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

requestAnimFrame( animate );

function something(){
	var texture = PIXI.Texture.fromImage("images/box");
	var box = new PIXI.Sprite(texture);
	box.anchor.x = 0.5;
	box.anchor.y = 0.5;
	box.scale.x = box.scale.y = screen.width/10000;
	// move the sprite to its designated position
	box.position.x = 100;
	box.position.y = 100;

	stage.addChild(box);

}
//sets the alarm based on the dragged boxs in the box
function setTime(){

}

function animate() {
	requestAnimFrame( animate );
	renderer.render(stage);
}