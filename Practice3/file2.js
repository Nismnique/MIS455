
// assume that team A scores 16 runs after the end of over #5. also assume that the team can run 10 runs per over afterwards.calculate and diplay after how many more OverconstrainedError, avg runs per over will exceed 6.5.
// Initial variables
let runs = 16;
let overs = 5;
 console.log(runs/overs);
 while(runs/overs <6.5){
    runs+=10;
    overs+=1;
    console.log(runs/overs);
 }
console.log("it took", overs-5, "overs to exceed avg 6.5 runs per over")




