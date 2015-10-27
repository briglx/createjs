var stage = new createjs.Stage("stage");
 
var i = 0;

var badguys = [];

createjs.Ticker.addEventListener("tick", handleTick);
function handleTick(event) {

    if(i % 30 == 0){

        var badguy = new createjs.Bitmap("images/badguy2.png");
        badguy.wait = getRandomInt(10,20);
        badguy.wait = 0;
        badguy.vector = {x: getRandomInt(-10,10), y: getRandomInt(0,2)};
        badguy.vector = {x: 0, y: 1};
        badguy.x = getRandomInt(0,200);
        badguy.scaleX = 0.07;
        badguy.scaleY = 0.07;
        badguys.push(badguy);

        stage.addChild(badguy);
         
    }

    i++;

    // Update each badguy
    var remove = [];
    for(var n=0; n<badguys.length; n++){

        bg = badguys[n];

        if(bg.wait && bg.wait > 0){
            bg.x += bg.vector.x;    
            bg.wait--;
        }
        else {
            // Get new vector
            bg.wait = getRandomInt(5,10);
            bg.vector = {x: getRandomInt(-10,10), y: getRandomInt(0,2)};
            bg.vector = {x: 0, y: 1};
        }
        
        bg.y += bg.vector.y;

        if(bg.y > 200){
            remove.push(n);
        }

        bg.scaleX = bg.scaleX * (1 + bg.y / 10000);
        console.log(bg.scaleX * (1 + bg.y / 10000));
        bg.scaleY = bg.scaleX 
           
    }

    for(var n=0; n<remove.length; n++){
        badguys.splice(n, 1);
    }

    console.log(badguys.length);

    stage.update();   

}

stage.addEventListener("click", function(event) { 
    console.log('hi');
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}