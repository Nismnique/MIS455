function calculateDiscount() {
    var name = document.getElementById("name").value;
    var tuitionFees = parseInt(document.getElementById("tuitionFees").value);
    var birthYear = parseInt(document.getElementById("birthYear").value);
    
    
    var currentYear = new Date().getFullYear();
    var age = currentYear - birthYear;
    var discount= 0 ;

    if (tuitionFees > 50000 && age > 21) 
        discount = 0.15;
    else if (tuitionFees > 40000 && age > 20) 
        discount = 0.10;
    else if (tuitionFees > 30000 && age > 19) 
        discount = 0.05;
    else discount = 0.02;

    var discountAmount = tuitionFees * discount;
    var payableFees = tuitionFees - discountAmount;

    console.log(`Name: ${name}`);
    console.log(`Discount Amount: $${discountAmount}`);
    console.log(`Payable Tuition Fees: $${payableFees}`);
}