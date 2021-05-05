class Food{
    constructor(){
        this.foodStock = 0;
        this.lastFed="";
        this.image = loadImage("images/Milk.png");
    }
    getStock(){
        return this.foodStock;
    }
    updateStock(newStockCount){
        this.foodStock=newStockCount;

    }
    deductStock(){
        if(this.foodStock===0){
            this.foodStock = this.foodStock-1;

        }
    }
    getFeedTime(lastFedTime){
        this.lastFed = lastFedTime
    }
    display(foodSObj){
        var x=500;
        var y=100;

        imageMode(CENTER);
        image(this.image,x,y,70,70);
        if (foodSObj!=0){
            for(var i=0;i<foodSObj;i=i+1){
                if(i%10===0&&i>0){
                    y = y+70;
                    x = 500
                }
                image(this.image,x,y,70,70);
                x = x+30;
            }
        }
    }

}