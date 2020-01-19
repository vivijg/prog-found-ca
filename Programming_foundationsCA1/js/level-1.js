//task 1

var color = "Night skyblue";
console.log (color);



// Task 2
var person = {
name: "Vivian Grosch",
age:25
};

console.log (person);



//Task 3


var outOfStock = true;


if (outOfStock === true){
    console.log("true");
    }
else{
    console.log("Out of stock");
   }


//Task 4

var count= [1,2,3,4,5]
for (var count=1; count<=5; count++){
console.log (count);
}

//task 5

for (var i=15; i<=25; i++){
    console.log (i);
}

//task 6
for (var i=15; i<=25; i++){
  
if (i===20){
    console.log (i);
}
}

//task 7
var foodArray = [
    {
        quantity: 6,
        name: "apple",
        inStock: true
        }, {
        quantity: 2,
        name: "orange",
        inStock: false
        }
    ];
    
    foodArray .forEach(function (item) {
        console.log(item.quantity);
        console.log(item.inStock);
    });
    
    
  
    



//task 8
function whatIDontLike (tastlessGreens)
{
    console.log("I don't like greens", tastlessGreens);
};

whatIDontLike ("I dont like greens");

//task 9



 function subtractNumbers (number1, number2){
     var sum = number1- number2;
     console.log (sum);
 }
 subtractNumbers (28,8)



 
//task 10
var emptyArray = [];
function addItemToArray (item){
  emptyArray.push(item);
}
addItemToArray('Hello array');
console.log(emptyArray);
