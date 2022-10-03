
// (function(window) {

//       var roro1 = {};

//       roro1.name = "roro";

//       var rand = "hello";

//       roro1.sayhello = function (){

// 	  console.log (rand + roro1.name);
//   }

//     window.roro1 = roro1;

// }) (window);




 //  (function(window) {
 
 //  var obj = {};

 // obj.dreamOn = function () {
 //  console.log("I want to see the global scope! Let me out!");
 //  };

 // window.doer = obj;

 // });

 // doer.dreamOn();

 var speakebye = {};

 speakebye.name = "Goodbye"

 speakebye.speak = function(name) {
 // function speak (name){


	console.log(speakebye.name + name);
}