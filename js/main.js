 var stage = new createjs.Stage("stage");
 var image = new createjs.Bitmap("images/badguy.png");
 
 image.age = "45";
 image.width = 20;

 var i = 0;

 stage.addChild(image);

var badguys = [];
badguys.push(image);

 createjs.Ticker.addEventListener("tick", handleTick);
 function handleTick(event) {

    if(i % 50 == 0){
        var badguy = new createjs.Bitmap("images/badguy.png");
        badguy.x = getRandomInt(0,300)
        badguy.scaleX = 0.25;
        badguy.scaleY = 0.25;
        badguys.push(badguy);

        stage.addChild(badguy);
         
    }
    i++;

    // Update each badguy
    for(var n=0; n<badguys.length; n++){

        bg = badguys[n];

        if(bg.x < (stage.canvas.clientWidth - 600)){
            bg.x += getRandomInt(-1,1);
            
        } else {
            bg.x += getRandomInt(-1,0);
        }


        bg.y += 1;
    }

    stage.update();

    

    
 }


stage.addEventListener("click", function(event) {
     


});


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}