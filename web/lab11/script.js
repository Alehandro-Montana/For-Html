var canvas =document.getElementById('chess');
var ctx = canvas.getContext('2d');

canvas.width =320;
canvas.height =320;
ctx.font="20px serif";
ctx.fillText("Шахматная доска",70,15);
ctx.textAlign="center";
ctx.strokeStyle = '#B70B12'; 
//ctx.strokeRect(15, 15, 267, 267);
ctx.strokeRect(18, 18, 261, 261);
ctx.fillStyle = 'black'; 
ctx.fillRect(20, 20, 257, 257);
for (i=0; i<8; i+=2)
 for (j=0; j<8; j+=2) {
 ctx.clearRect(20+i*32, 20+j*32, 30, 30);
 ctx.clearRect(20+(i+1)*32, 20+(j+1)*32, 32, 32);
}

var canvas =document.getElementById('figure');
var ctx = canvas.getContext('2d');
var gradient=ctx.createLinearGradient(0,0,0,145);

canvas.width= 300;
canvas.height=300;
ctx.beginPath();
gradient.addColorStop(0,"rgb(2, 19, 252)");
gradient.addColorStop(0.2,"rgb(20, 124, 194)")

gradient.addColorStop(0.8,"rgb(248, 224, 6)");
gradient.addColorStop(1,"rgb(248, 224, 6)");

ctx.fill();
ctx.font="22px serif";
ctx.fillText("Сердце",40,18);
ctx.textAlign="center";
ctx.moveTo(25,40);

ctx.bezierCurveTo(75,37,70,25,50,25);
    ctx.bezierCurveTo(20,25,20,63,20,63);
    ctx.bezierCurveTo(20,80,40,102,75,120);
    ctx.bezierCurveTo(110,102,130,80,130,60);
    ctx.bezierCurveTo(130,63,130,25,100,25);
    ctx.bezierCurveTo(85,25,75,37,65,29);
    ctx.fillStyle=gradient;
    ctx.fill();
    

ctx.closePath();

