canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var width=100;
var height=100;
var x=300;
var y=300;
var background="mars.jpg";
var rover="rover.png";
function add(){
    background_image=new Image();
    background_image.onload=uploadBackground;
    background_image.src=background;

    rover_image=new Image();
    rover_image.onload=uploadrover;
    rover_image.src=rover;
    
}
function uploadBackground(){
    ctx.drawImage(background_image,0,0,canvas.width,canvas.height);

}
function uploadrover(){
    ctx.drawImage(rover_image,x,y,width,height);
}
window.addEventListener("keydown",mydown);
function mydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='39'){
        right();
        console.log("right");
    } 
    if(keyPressed=='38'){
        up();
        console.log("up");
        } 
        if(keyPressed=='37'){
            left();
            console.log("left");
        }
        if(keyPressed=='40'){
            down();
            console.log("down");
        }
    }
    function right(){
        if(x<=600){
            x=x+10;
        console.log("x= "+x);
        uploadBackground();
        uploadrover();
        }
    }
    function up(){
        if(y>=0){
            y=y-10;
            console.log("y= "+y);
            uploadBackground();
            uploadrover();
        }
    }
    function down(){
        if(y<=450){
            y=y+10;
            console.log("y= "+y);
            uploadBackground();
            uploadrover();
        }
    }
    function left(){
        if(x>=0){
            x=x-10;
            console.log("x= "+x);
            uploadBackground();
            uploadrover();
        }
    }