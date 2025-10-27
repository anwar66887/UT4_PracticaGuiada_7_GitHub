function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
 strokeWeight(4);
angleMode(DEGREES);



 rama(200,400,100,90)
}
// sumra x1    altura y1
function rama(x ,y , longitud , angulo){
  let x1 = x + longitud*cos(angulo);
   let y1 = y - longitud*sin(angulo);

 line(x, y, x1, y1);
 
 
 if(longitud>8){
  stroke( 'black')
  rama(x1,y1, longitud * (0.10 , 0.6) , angulo + 30 );
   
  rama(x1,y1, longitud * random(0.7, 0.9), angulo - 10);
 
  rama(x1,y1, longitud * random(0.8, 0.7), angulo + 20);
  
}

  

}