

function setup(){

  title = createElement('h1');

  canvas = createCanvas(350,400);

  firstnum = createInput('0');
  secondnum = createInput('0');
  sans = createElement('h2');

  firstnum1 = createInput('0');
  secondnum1 = createInput('0');
  aans = createElement('h2');

  firstnum2 = createInput('0');
  secondnum2 = createInput('0');
  dans = createElement('h2');

  firstnum3 = createInput('0');
  secondnum3 = createInput('0');
  adans = createElement('h2');
}

function draw(){
title.html("C A L U C U L A T O R");
title.position(20,30);

firstnum.position(20,220);
firstnum.size(150);

secondnum.position(180,220);
secondnum.size(150);

 sub = firstnum.value();
 sub1 = secondnum.value();
 val = sub - sub1;
sans.html(val);
sans.position(20,250);

firstnum1.position(20,320);
firstnum1.size(150);

secondnum1.position(180,320);
secondnum1.size(150);

 add = firstnum1.value();
 add1 = secondnum1.value();
 val2 = add * add1;

aans.html(val2);
aans.position(20,350);

firstnum2.position(20,420);
firstnum2.size(150);

secondnum2.position(180,420);
secondnum2.size(150);

 Dadd = firstnum2.value();
 Dadd1 = secondnum2.value();
 val1 = Dadd / Dadd1;
dans.html(val1);
dans.position(20,450);

firstnum3.position(20,120);
firstnum3.size(150);

secondnum3.position(180,120);
secondnum3.size(150);

 adder = firstnum3.value();
 adder1 = secondnum3.value();
 val3 = adder + adder1;
adans.html(val3);
adans.position(20,150);

line(0,100,350,100);
line(0,200,350,200);
line(0,300,350,300);
} 

