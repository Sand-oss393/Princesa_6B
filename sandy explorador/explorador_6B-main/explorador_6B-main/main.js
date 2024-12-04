canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


p1_ancho=120;
p1_alto=120;

background_image = "c1.png";

p1_image = "p1.png";

p1_x = 10;
p1_y = 10;


 function add(){
    background_imgTag=new Image();                           
    background_imgTag.onload = uploadBackground;                                                                   // Carga la imagen
    background_imgTag.src = background_image;

    p1_imgTag = new Image();  
    p1_imgTag.onload = uploadp1;   
    p1_imgTag.src = p1_image;
}                                     


function uploadBackground(){
    ctx.drawImage (background_imgTag ,0,0, canvas.width, canvas.height);
}                       

function uploadp1(){
    ctx.drawImage(p1_imgTag, p1_x, p1_y, p1_ancho, p1_alto);
    }



window.addEventListener("keydown" , my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed=='38'){
        up();
    }
    if(keyPressed=='40'){
        down();
    }
    if(keyPressed=='37'){
        left();
    }
    if(keyPressed=='39'){
        right();
    }
}


function up(){
if(p1_y >=0){
    p1_y = p1_y - 5;
    uploadBackground();
    uploadp1();
 }
}
function down(){
    if(p1_y <=500){
        p1_y = p1_y + 5;
        uploadBackground();
        uploadp1();
 }
}
function left(){
    if(p1_x >=0){
        p1_x = p1_x - 5;
        uploadBackground();
        uploadp1();
     }
    }
function right(){
    if(p1_x <=700){
        p1_x= p1_x + 5;
        uploadBackground();
        uploadp1();
     }
    }