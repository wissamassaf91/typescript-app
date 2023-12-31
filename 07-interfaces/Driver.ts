import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach: CricketCoach = new CricketCoach();
let myGolfCoach: GolfCoach = new GolfCoach();

let coaches: Coach[]= [];
coaches.push(myCricketCoach);
coaches.push(myGolfCoach);

for(let ch of coaches){
    console.log(ch.getDailyWorkout());
}