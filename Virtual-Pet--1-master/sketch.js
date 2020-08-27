var dog,dogHappy,foodStock,food,dogimg
var addbtn,feedbtn;
var lastFed
var foodObj;
var feedTime
var lastFed;
 

function preload()
{
//  milkimg=loadImage("images/Milk(1).png")
  //dogHappy=loadImage("images/dogImg1.png")
  dogImg= loadImage("dogImg.png")
 
}

function setup() {
  createCanvas(800, 700);
   database=firebase.database();
   foodStock=database.ref('Food')
  foodStock.on("value", readStock)
  feedbtn=createButton("Feed")
  addFood= createButton("Add some Food!")
  addFood.mousePressed(addFood)
  
  
  feedbtn.position(400,10)
  foodObj= new Food(foodStock,lastFed)
  feedbtn.mousePressed(feedpet)
  dogSprite= createSprite(400,350,10,10)
  dogSprite.addImage(dogImg)
  
    
  
}


function draw() { 
  background("Green")

  drawSprites();
  fedTime= database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val()
  })
  textSize(100)
  fill(200)
  text("Food:"+ food,170,200)



 foodObj.display()
 
 
 
}
function readStock(data){
  food= data.val()
}

/*function writeStock(a){
  
  a=a-1
  database.ref('/').update({
    Food:a
  })
  if(a<=0){
    a=0
  }
  else{
    a=a-1;
  }
}*/
function feedpet(){
  //dog.addImage(dogHappy)
  var date= new Date()
  curhour= date.getHours()
  
  foodObj.updateFoodStock()
  foodObj.deductFoodStock()
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:curhour.val()
  })
  


}
function addFood(){
  foodStock+=1
  database.ref('/').update({
    Food:foodStock
  })
  
}
//async function getLastFed(){
 //// var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  //var responseJSON = await response.json();

  //var datetime = responseJSON.datetime;
  //var hour = datetime.slice(11,13);
 // var min= datetime.slice(14,16)
 // console.log(min)
//}//





//function feedpet(){
 //// dog.addImage(dogHappy)
//}
//async function getLastFed(){
  ///var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  //var responseJSON = await response.json();

  //var datetime = responseJSON.datetime;
  //var hour = datetime.slice(11,13);
 // var min= datetime.slice(14,16)
 // console.log(min)
//}


