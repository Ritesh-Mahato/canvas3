var database,canvas;
var drawing=[];
function setup(){
    canvas= createCanvas(innerWidth,innerHeight);
    database=firebase.database();
}

function draw(){
    background(224);

    if(mouseIsPressed){
        var point = {
            x:mouseX,
            y:mouseY
        }
        drawing.push(point); 
    }
    this.button=createButton("Reset");
    this.button.position(10,10);
    //console.log(drawing);
    this.button.mousePressed(()=>{
        drawing=[];
    })

    beginShape();
    stroke(220,0,0);
    strokeWeight(4);
    noFill();
    for(var i=0; i<drawing.length;i++){
        vertex(drawing[i].x,drawing[i].y)
    }
    endShape();

}