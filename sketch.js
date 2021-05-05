var dog,dogHappy,dogImage;
var foodS,foodStock,foodObj;
var database;

function preload()
{
  dogImage = loadImage("images/Dog.png");
  dogHappy = loadImage("images/happydog.png");


}

function setup() {
	createCanvas(1000,500);
  dog=createSprite(250,250,50,100);
  dog.addImage(dogImage);
  dog.scale= 0.15 ;
  database = firebase.database();
  dbRef = database.ref("food");
  foodObj = new Food();

  //listner function to read from dtabase
  
  dbRef.on("value",readStock);
  feed = createButton("feed the dog");
  feed.position(700,100);
  feed.mousePressed(feedDog);

}
function feedDog(){
    writeStock(foodS);
    dog.addImage(dogHappy);
}
function readStock(data){
  foodS = data.val();
  console.log(foodS);
  foodObj.updateStock(foodS);
}
function writeStock(stock){
  if(stock===0){
    stock=0;
  }else{
    stock=stock-1
  }
  dbRef = database.ref("/");
  dbRef.update({
    food:stock,
    feedTime:hour()
  });

}
function draw() {  
background(46,139,87);
textSize(25);
fill("red");
text("foodRemaining:-"+foodS,100,100);
foodObj.display(foodS);

  drawSprites();
  

  //add styles here

}



