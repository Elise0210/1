function setup() {
  createCanvas(windowHeight,windowWidth );
}
function draw() {

  background(0);
	stroke(225)
	noFill() 
	
  for(var j=0;j<height/50;j=j+1)
  {
   for(var i=0;i<width/50;i=i+1)
   {
   ellipse(30+50*i,25+50*j,40+mouseX/10) 
   ellipse(25+50*i,25+50*j,50)
   ellipse(25+50*i,25+50*j,20+mouseY/5)
	 rect(50+50*i,50+50*j,30+mouseY/5)
	 rect(25+50*i,25+50*j,50)
	 rect(50+50*i,50+50*j,10)
		 
		 
   }
  }
 }