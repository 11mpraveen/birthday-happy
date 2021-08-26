var canvas = new fabric.Canvas('mycanvas');


get_image = 'https://s3.envato.com/files/327170933/IMG_8270%20.jpg';

function new_img(){
    //alert("I am inside img function")   
   fabric.Image.fromURL(get_image, function(Img){
     block_image_object = Img;

      block_image_object.scaleToWidth(600);
       block_image_object.scaleToHeight(600);
       block_image_object.set({
        top:1,
        left:1
       });
       canvas.add(block_image_object);

    }
   )
}

function playsound(myaudio){
   var x = document.getElementById("myaudio");
  x.play();
}

