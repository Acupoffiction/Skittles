function setup() {
  createCanvas(2000, 2000);
}

function draw() {
	
  
if (keyIsDown(ESCAPE))
{
  stroke (255,255,255);
	fill (255,255,255);
ellipse(mouseX-10,mouseY,40,40)
}
  


if (mouseIsPressed)
{
//Rainbow effect
	stroke (252, 3, 3);
	fill (252, 3, 3);
ellipse(mouseX+10,mouseY,10,10)
	stroke (252, 127, 3);
	fill (252, 127, 3);
ellipse(mouseX+20,mouseY,10,10)
stroke (252, 223, 3);
	fill (252, 223, 3);
ellipse(mouseX+30,mouseY,10,10)
stroke (255,255,0);
	fill (255,255,0);
ellipse(mouseX+40,mouseY,10,10)
stroke (132, 252, 3);
	fill (132, 252, 3);
ellipse(mouseX+50,mouseY,10,10)
stroke (15, 186, 41);
	fill (15, 186, 41);
ellipse(mouseX+60,mouseY,10,10)
    stroke (3, 252, 1523, 252, 152);
	fill (3, 252, 152);
ellipse(mouseX+70,mouseY,10,10)
stroke (108, 110, 217);
	fill (108, 110, 217);
ellipse(mouseX+80,mouseY,10,10)
    stroke (186, 79, 232);
	fill (186, 79, 232);
ellipse(mouseX+90,mouseY,10,10)
stroke (131, 13, 181);
	fill (131, 13, 181);
ellipse(mouseX+100,mouseY,10,10)
//style text
stroke(255, 0, 0);
fill(255, 255, 255);
textSize(60);
text("Skittles! Taste The Rainbow.", 200,200);
}
  
}
	


