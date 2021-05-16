canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

marsimages=["mars.jpg","mars2.jpg","mars3.jpg","mars4.jpg"]
random_number=Math.floor(Math.random()*4)
rover_width=100
rover_heigth=90

backroud_img=marsimages[random_number]
console.log("background_image = " + backroud_img)
rover_image="rover.png"

rover_x=10
rover_y=10

function add(){
backround_imgtag=new Image()
backround_imgtag.onload=uploadBackround
backround_imgtag.src=backroud_img

rover_imgtag=new Image()
rover_imgtag.onload=uploadrover
rover_imgtag.src=rover_image
}

function uploadBackround(){

    ctx.drawImage(backround_imgtag,0,0, canvas.width ,canvas.rover_heigth)
}

function uploadrover(){
    
    ctx.drawImage(rover_imgtag,rover_x,rover_y, canvas.width ,canvas.rover_heigth)
}
window.addEventListener("keydown",mykeydown)
function mykeydown(e){
    console.log(e)
kepressed=e.keyCode;
console.log("keypress")

if(kepressed=='38'){
    up()
    console.log ('up')
}
if(kepressed=='40'){
    down()
    console.log ('down')
}
if(kepressed=='37'){
    left()
    console.log ('left')
}
if(kepressed=='39'){
    right()
    console.log ('right')
}
}
function up(){
 if(rover_y>=0)   {
     rover_y=rover_y-10
     console.log('when up is pressed,x = '+rover_x+ " y = "+rover_y )
     uploadBackround()
     uploadrover()
 }
}

function down(){
    if(rover_y<=500)   {
        rover_y=rover_y+10
        console.log('when down is pressed,x = '+rover_x+ " y = "+rover_y )
        uploadBackround()
        uploadrover()
    }
   }
   
function left(){
    if(rover_x>=0)   {
        rover_x=rover_x-10
        console.log('when left is pressed,x = '+rover_x+ " y = "+rover_y )
        uploadBackround()
        uploadrover()
    }
   }
   
function right(){
    if(rover_x<=700)   {
        rover_x=rover_x+10
        console.log('when right is pressed,x = '+rover_x+ " y = "+rover_y )
        uploadBackround()
        uploadrover()
    }
   }