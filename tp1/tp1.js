//Acuaña Salina Carlos Luis
//Com 4
//Legajo: 121108/4
//link de youtube: https://youtu.be/UZnqYbw4SZU 
let cant;
let tam;
let anc;
let alt;
let richard;
let distX;
let i;
let y;
let posX, posY, posZ, posW;

function preload () {

richard = loadImage ("data/obra.jpg");
}
function setup() {

  createCanvas(800, 400);
  background(240,15,220);
  

  strokeWeight(5);

  cant = 11;
  tam = 200;
  anc= 200;
  alt = 200;
  distX= 200;
  posX= 400;
  posY= 200;
  posZ=800;
  posW= 400;
}

function cuadrados(tamp){
  strokeWeight(2);
  stroke(150,200,200);
  fill(150,200,240);
  rect(450,50,tamp,tamp);
  stroke(150,200,200);
  fill(250,170,210);
  rect(650,50,100,tamp);
  stroke(150,200,200);
  fill(130,220,115);
  rect(450,250,100,tamp);
 stroke(150,200,200);
  fill(190,150,230,tamp);
  rect(650,250,100,tamp);
  }




function draw() {

  noFill();
  strokeWeight(5);
  if (ColMit(400, 0)) {
    let mx = map(mouseX, 400, width, 0, 800);
    let my = map( mouseY, 0, height, 0, 400);
    background(mx, random(200), my);
  } else {
  }
  strokeWeight(5);
  image (richard, 0, 0, 400, 400);
  stroke(230, 10, 80);
cuadrados(100);
  // noFill();
  // translate(i* tam/10,i* tam/10,tam -i tam/10*2,tam -i tam/10*2);
  // float mx(*i tam/10, 0, 400, 200,200);

  for ( let n =1; n<width; n++) {
    for (let i =0; i<cant; i++) {

    //  fill(2455, 88, 240);
  //  stroke(random(0, 255), random(0, 255), random(0, 255));
      stroke(230, 10, 80);
      strokeWeight(5);
      noFill();
      rect(distX*n + tam+i* tam/20, i* tam/20,  tam -i*tam/20*2, tam -i*tam/20*2);

  }
    if (mouseIsPressed) {
      stroke(random(100), random(160), random(120));
     // fill(random(200), random(100), 0);
      rotate(random(PI/2));



    } else {
      if (key === 'g') {
        for ( let y =1; y<width; y++ );
       // fill(255, 44, 227);
        strokeWeight(5);
        stroke(random(0, 255), random(0, 255), random(0, 255));
noFill();
        rect(600+y* tam/20, 200+y* tam/20,  tam -i*tam/20*2, tam -i*tam/20*2);

    }
    }
  }
  for ( let y =1; y<width; y++) {
    for (let i =0; i<cant; i++) {
       stroke(230,10,80) ;
    //  fill(250, 150, 120);
noFill();

      rect (distX*y+200+i* tam/20, 200+i* tam/20, tam -i*tam/20*2, tam -i*tam/20*2) ;
      if (mouseIsPressed) {
        stroke(random(100), random(160), random(120));
       // fill(random(200), random(100), 0);
        //rectMode(CENTER);
        rotate(random(PI/2));


      }
    }
  }
}

function ColMit ( posX,  posY) {
  if (mouseX > posX && mouseY > posY) {
    return true ;
  } else {
    return false;
  }
}

function keyPressed() {
  if (key==='r') {
    cant = 11;
    tam = 200;
    anc= 200;
    alt = 200;
    distX= 200;
    posX= 400;
    posY= 200;
    posZ=800;
    posW= 400;
    mouseX=0;
    mouseY=0;
  }
}
