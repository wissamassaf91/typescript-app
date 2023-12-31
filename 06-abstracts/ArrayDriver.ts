import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle:Circle= new Circle(5,10,20);
let myRectangle:Rectangle = new Rectangle(0,0,3,7);

//declare array of shapes
let shapes:Shape[] = [];
shapes.push(myCircle);
shapes.push(myRectangle);

for(let sh of shapes){
    console.log(sh.getInfo());
    console.log(sh.calculateArea());
}