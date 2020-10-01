class SlingShot{
    constructor(bodyC,pointD){
      var Properties ={
          bodyA:bodyC,
          pointB:pointD,
          stiffness:0.04,
          length:10
      }
      this.p=pointD
      this.Sling=Constraint.create(Properties);
      this.Sling1=loadImage("sprites/sling1.png");
      this.Sling2=loadImage("sprites/sling2.png");
      this.Sling3=loadImage("sprites/sling3.png");
      World.add(world,this.Sling);
    }

    fly(){

    //null means nothing    
    this.Sling.bodyA=null
  
}

    Show(){
//every condition written in if, the binary value of true is 1 and false is 0

image(this.Sling1,200,20);
image(this.Sling2,170,20);

  push()

  if(this.Sling.bodyA){      
     var pointA = this.Sling.bodyA.position
     var pointB = this.p
     strokeWeight(7);
     stroke(48,22,8);
     if(pointA.x<220){
    
     line(pointA.x-20, pointA.y, pointB.x-10, pointB.y)
     line(pointA.x-20,pointA.y-20, pointB.x+30, pointB.y-3);
     image(this.Sling3, pointA.x-20, pointA.y-10, 15, 30);
      } //line(pos1.x,pos1.y,pos2.x,pos2.y);
    else{
      line(pointA.x+25, pointA.y, pointB.x-10, pointB.y)
      line(pointA.x+25,pointA.y-20, pointB.x+30, pointB.y-3);
      image(this.Sling3, pointA.x+25, pointA.y-10, 15, 30);
     } 
       //line(pos1.x,pos1.y,pos2.x,pos2.y);
           


    }
    pop()  
    }
}