 canvas = document.getElementById("myCanvas");
 ctx = canvas.getContext("2d");

 car1_width = 120;
 car1_height = 70;
 car1_image = "car1.png";
 car1_x = 10;
 car1_y = 10;

 car2_width = 120;
 car2_height = 70;
 car2_image = "car2.png";
 car2_x = 10;
 car2_y = 100;

 background_image = "car.jpg";

 function add() {
    background_img = new Image();
    background_img.onload = uploadBackground;
    background_img.src= background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar1;
    car2_imgTag.src = car2_image;
}

 function uploadBackground(){
    ctx.drawImage(background_img , 0 , 0 , canvas.width , canvas.height);
}

 function uploadcar1(){
    ctx.drawImage(car1_imgTag , car1_x , car1_y ,car1_height, car1_width);
 }
 function uploadcar2(){
    ctx.drawImage(car1_imgTag , car2_x , car2_y ,car2_height, car2_width);
}

 window.addEventListener("keydown" , my_keydown);
 function my_keydown(e){
    var key_press = e.keyCode;
    console.log(key_press);

    if (key_press == 38){
       car1_up();
       console.log("up arrow key");
    }

    if (key_press == 40){
        car1_down();
        console.log("down arrow key");
    }

    if (key_press == 37){
        car1_left();
        console.log("left arrow key");
    }

    if (key_press == 39){
        car1_right();
        console.log("right arrow key");
    }

    if (key_press == 87){
        car2_up();
        console.log("key w");
    }

    if (key_press == 65){
        car2_left();
        console.log("key a");
    }

    if (key_press == 83){
        car2_down();
        console.log("key s");
    }
    
    if (key_press == 68){
        car2_right();
        console.log("key d");
    }
    if(car1_x > 700) {
        console.log("Car1 Won");
        document.getElementById("game_status").innerHTML = "Car 1 Won!!";
    }

}

 function car1_up(){
 
    if (car1_y >= 0 ){
        car1_y = car1_y - 10 ;
        console.log("When up arrow key is pressed x = " + car1_x + "y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }

 }

 function car1_down(){
 
    if (car1_y <= 500 ){
        car1_y = car1_y + 10 ;
        console.log("When down arrow key is pressed x = " + car1_x + "y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

 function car1_left(){
 
    if (car1_x >= 0 ){
        car1_x = car1_x - 10 ;
        console.log("When left arrow key is pressed x = " + car1_x + "y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right(){
 
    if (car1_x <= 710){
        car1_x = car1_x + 10 ;
        console.log("When right arrow key is pressed x = " + car1_x + "y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
