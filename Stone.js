// class Stone{

//     constructor(x,y){

//     var options={

//         isStatic:true,
//         restitution:0,
//         friction:1,
//         density:1.2,

//        }

//        this.body = Matter.Bodies.circle(x, y, 30,options);
//        this.radius = 30;
//        World.add(world, this.body);
//     }

//     display(){
//         var pos =this.body.position;
//         var angle = this.body.angle;
//         push();
//         translate(pos.x,pos.y);
//         rotate(angle);
//         ellipseMode(CENTER);
//         ellipse( 0, 0, this.radius,this.radius);
//         pop();
     
//     }





// }



class Stone{
    constructor(BodyA, point2){
        var options = {
            bodyA: BodyA,
            pointB: point2,
            stiffness: 0.04,
            length: 10
        }
        this.stone = Constraint.create(options);
        World.add(world, this.sling);
    }

     fly(){

        this.stone.bodyA = null;
     }

    display(){
        if(this.stone.bodyA){
            var pointA = this.stone.bodyA.position;
            var pointB = this.stone.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);   
         }
    }
    
}