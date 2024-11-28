// array type of variable
// var number=[10, 23, 45, 64, 90, 100];
// var sum=0;
// for (var i=0; i < number.length; i++  ){
//     sum+= number[i];
// }

// var average = sum/number.length;
// console.log( "Average from the numbers-",average );

// var person1= {name:"KK" , id:"977655"};

// function connect(){
//     var url= "https://jsonplaceholder.typicode.com/photos"
    
    
//     fetch(url)
//     .then (res => res.json())
//     .then (data => console.log(data)); 
// }

var person1= {name:"KK" , id:"977655"};

function connect(){
    var url= "https://jsonplaceholder.typicode.com/users"
    
    
    fetch(url)
    .then (res => res.json())
    .then (data => process(data)); 
}

function process(data){
        for ( var i = 1; i<=data.length; i++){
        
        console.log("Data of user #", i, "details-");
        console.log("Name:-", data[i-1].name);
        console.log("username:-",data[i-1].username);
        }
}