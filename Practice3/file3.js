var birthYear = parseInt(prompt( "Enter your birthYear:"));

var leapYears=[];
var giftVoucherAmount=0;

for(let year=birthYear; year<2024 ;year++){

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
       
        leapYears.push(year);
        giftVoucherAmount += 5000;
    }
}
console.log(leapYears );
console.log(giftVoucherAmount);
