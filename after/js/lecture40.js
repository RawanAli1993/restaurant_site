//var x;
//console.log(x);

//if (x == undefined){
    //console.log("x is undefined");
//}//
//x = 5;

//if (x == undefined){
    //console.log("x is undefined");
//}
//else {
    //console.log("x has value");
//
//var rawan = new Object();
//rawan.firstname = "Rawan";
//rawan.lastname = "Ali";
//console.log(rawan);
//rawan.company = new Object();
//rawan.company.name = "karawan";
//console.log(rawan.company);
//console.log(rawan.company ["name"]);

//var rawancompany = "karawan";
//rawan[rawancompany] = 120;
//console.log("number of employees is " + rawan[rawancompany]);
// var rawan ={
//     name: "Rawan",
//     family: {
//         father: "MArouf",
//         grand: "Ali",
//     },
//     "number of peaple": 120
// };

// console.log(rawan.family.father);
// function multiply(x, y){
//     return x * y;
// }
// multiply.version ="v.1.0.0";
// console.log(multiply.version);

// //function factory
// function makeMultiplier(multiplayer){
//     var rafun = function(x){

//      return multiplayer * x;
//     };

//     return rafun;
// }

// var zozby3 = makeMultiplier(3);
// console.log(zozby3(10));
// var randdouble = makeMultiplier(2);
// console.log(randdouble(100));

// // passing function as arguments 
// function doOperationOn(x, operation){
//     return operation(x);

// }

// var result = doOperationOn(5, zozby3);
// console.log(result);
// result = doOperationOn(100, randdouble);
// console.log(result);


// copying b y valu vs by referesnce 

// var a = 7;
// var b = a ;
// console.log("a:" + a);
// console.log("b:" + b);

// b = 5;
// console.log("after b updated");
// console.log("a:" + a);
// console.log("b:" + b);

// var a = {x: 7};
// var b = a ;
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("after b updated");
// console.log(a);
// console.log(b);


// function objectvalue(objn) {
//     console.log("objectvalue before");
//     console.log(objn);


//    objn.x = 5;
//    console.log("after");
//    console.log(objn);
// }

// b = {x: 7};
// objectvalue(b);
// console.log("after obhyd");
// console.log(b);



//Arrays 

// var array = new Array();
// array[0] = "rawan";
// array[1] = 2;
// array[2] = function (name) {
//    console.log("hello" + name);
// };
// array[3] = {course: "html, css, js"};

// console.log(array);

// console.log(array[1]);
// array[2]("roro");
// array[2](array[0]);
// console.log(array[3].course);


//shory hand array creation 

// var names = ["rawan", "razan", "ali"]

// //console.log(names);

// for (var i=0; i < names.length; i++){
//     console.log("hello " + names[i]);
// }

// names[100]= "rand"; // example if we have element without data 

// for (var i=0; i < names.length; i++){
//     console.log("hello " + names[i]);
// }


// var names2 = ["karam", "ahmed", "ali"];

// var myObj = {
//    name :"roor",
//    course : "webdesign",
//    platform : "coursera"

// };

// for (var prop in myObj) {
//  console.log(prop+ ":" +myObj[prop]);
// }


// for (var name in names2) {
//  console.log("hello" + names2[name]);
// }

// names2.greeting = "hi";

// for (var name in names2) {
//  console.log("hello" + names2[name]);
// }

//Clouseres is an important topic 

// function makemultiplier(multiplier) {
   // var multiplier 

//    function b () {

//     console.log("multiplier is " + multiplier);
//    }

//    b();


//     return (
//         function (x){
//            return multiplier * x ;

       
//     }
//      ) ;
// }

// var doubll = makemultiplier(2);
// console.log(doubll(10));
 
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);
// function sayhello() {
//     console.log(
//         document.getElementById("name").value 
//         );
// }
document.addEventListener("DOMContentLoaded",
    function (event){


function sayhello(event){

    console.log(event); // to see all the events which you can use
    // console.log(this);
    this.textContent = "roro";
    var name = document.getElementById("name").value;
    var message = "<h2>Hello " + name + "!</h2>";
    // document
    //    .getElementById("content")
    //    .textContent = message;
    document
       .getElementById("content")
       .innerHTML = message;

    if (name === "student"){
        var title = document.querySelector("h1").textContent;

        title += "and roro !";

        document.querySelector("#title").textContent = title;

    }

}



// document.querySelector("button").addEventListener("click", sayhello);

    document.querySelector("button").onclick = sayhello;

    document.querySelector("body").addEventListener("mousemove", 
        function (event){

            if (event.shiftKey === true) {
                console.log( "x is  " + event.clientX);
                console.log("y is "  + event.clientY);


            }
            





    }

     );










 }

    );















