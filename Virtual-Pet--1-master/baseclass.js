class BaseClass{
    constructor(x, y) {
      
      
        this.image = loadImage("images/dogImg.png");
      }
      display(){
 
       
        imageMode(CENTER);
        image(this.image, 0, 0);
        
      }
}