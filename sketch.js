let img1;
let img2;
let img3;
let img4;


let angle1;
let rotSpeed1;

let angle2;
let rotSpeed2;

let angle3;
let rotSpeed3;

let angle4;
let rotSpeed4;

function preload(){
    img1 = loadImage('img1.PNG');
    img2 = loadImage('img2.PNG');
    img3 = loadImage('img3.PNG');
    img4 = loadImage('img4.PNG');

}

function setup(){
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);

    angle1 = 0;
    rotSpeed1 = random(-0.3, 0.3);
    
    angle2 = 0;
    rotSpeed2 = random(-0.2, 0.2);

    angle3 = 0;
    rotSpeed3= random(-0.1, 0.3);

    angle4 = 0;
    rotSpeed4= random(-0.4, 0.4);

}

function draw() {
    background(0);

    push();
    translate(width/4,height/4);
    rotate(angle1);
    image(img1,0,0,200,200);
    pop();

    push();
    translate(width*3/4, height/4);
    rotate(angle2);
    image(img2,0,0,200,200);
    pop();

    push();
    translate(width/4,height*3/4);
    rotate(angle3);
    image(img3,0,0,200,200);
    pop();

    push();
    translate(width*3/4,height*3/4);
    rotate(angle4);
    image(img4,0,0,200,200);
    pop();

    angle1 += rotSpeed1;
    angle2 += rotSpeed2;
    angle3 += rotSpeed3;
    angle4 += rotSpeed4;

}