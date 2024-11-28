var year1 = parseInt(prompt("Enter year 1 :"));
var year2 = parseInt(prompt("Enter year 2 :"));


var leapYears=[];

for( var year=year1; year<year2; year++){
    if((year % 4 ===0 && year % 100 !==0) || (year % 400 ===0)){
        leapYears.push(year);
    }
  
}
console.log(leapYears);