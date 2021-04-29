class Mango{

    constructor(x,y){

    var options={

        isStatic:true,
        restitution:0,
        friction:1,

       }

       this.body = Matter.Bodies.circle(x, y, 70,options);
       this.radius = 70;
       World.add(world, this.body);
      

    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse( 0, 0, this.radius,this.radius);
        pop();
     
    }





}