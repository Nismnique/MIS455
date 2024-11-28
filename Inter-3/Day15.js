// var personal = {
//     name:"Seasonal Shop",
//     mis455QMarks: [20, 16, 17],
//     mis400QMarks: [14, 12, 16]
// }
// console.log(personal.mis455QMarks[2]) b   ;

// function connect(){


//     var searchTerm = document.getElementById("searchBox").value ;

//     var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

//     console.log(url);     
    
//     fetch(url)
//     .then(res => res.json() )
//     .then(data => console.log(data.meals)); 
// } 






// function connect(){


//     var searchTerm = document.getElementById("searchBox").value ;

//     var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

//     console.log(url);     
    
//     fetch(url)
//     .then(res => res.json() )
//     .then(data => process(data)); 
// } 
// function process (data){

//     var allMeals=data.meals;
//     var oldContent=document.getElementById("displayArea");
//     for (var i=1; i<=allMeals.length; i++){
//         //    console.log(allMeals[i-1].strMeal);

//         var newDiv=document.createElement("div");
//         newDiv.innerHTML= `Meal Title:XXXXX <br>`
//                           <img src="XXXXX"><br>
//                           `Cooking Instructions:<br>
//                            XXXXX <br>`


//     } 


// }