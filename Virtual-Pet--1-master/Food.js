class Food{
    constructor(foodStock,lastFed){
        this.foodStock=20;
    }
    display(){
        var x=1, y=100
       
       if(this.foodStock>0){
            for( let i=0;i<this.foodStock;i++){
                 x+=50;
              
                rect(x,y,20,20)
            }
       }
    }
    getFoodStock(){
     
        database.ref('Food').on("value",(data)=>{
            Food:data.val()
        })

    }
    updateFoodStock(data){
        database.ref('Foodd').update({
            Food:data.val()
        })

    }
    deductFoodStock(foodStock){
         foodStock-=1
        database.ref('/').update({
          Food:foodStock
        })
    }
}