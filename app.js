// function types in javascript 
// function expression

function employee ( ){
 console.log("rutuja");
} 
employee()

// function statement 
var a = function b (){

    console.log("this is a b");
}
a()

// function annonymus 
var b = function () {
    console.log("this is a g");
}
b()

// firstclass function
//call back function 
 function p (callback){
         callback()
 }

 function q (){
     console.log("this is q");
 }
 p(q)
  p(function () {
      console.log("This is r");
  })
  p()