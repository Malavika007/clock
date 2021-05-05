var hr,mn,sc;
var h,m,s;


function setup() {
  createCanvas(600,600);
  angleMode(DEGREES)
}

function draw() {
  background(255,255,255);  
  translate(200,200)
  rotate(-90)
 
  hr = hour()
  mn = minute()
  sc = second()

  m=map(mn,0,60,360)
  s=map(sc,0,60,0,360)
  h=map(hr%12,0,12,0,360)
  

  push()
  rotate(s)
  stroke(102,255,255)
  strokeWeight(3.5)
  line(0,0,90,0)
  pop()

  push()
  rotate(m)
  stroke(255,102,255)
  strokeWeight(3.5)
  line(0,0,100,0)
  pop()

  push()
  rotate(h)
  stroke(0,255,0)
  strokeWeight(3.5)
  line(0,0,65,0)
  pop()

  stroke(255,0,255)
  point(0,0)
  strokeWeight(20)
  noFill()
  
  stroke(102,255,255)
  arc(0,0,300,300,0,s)

  stroke(255,102,255)
  arc(0,0,280,280,0,m)

  stroke(0,255,0)
  arc(0,0,260,260,0,h)


}