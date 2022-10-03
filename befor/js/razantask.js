
//document.addEventListener("DOMContentLoaded",
//function (event){
 
var score = 0;
var x = Math.random();
var y = Math.random();



function shoter (event){
    var count= document.getElementById("count").value - 0;
    var min = document.getElementById ("min").value - 0;
    var max = document.getElementById("max").value - 0;

    // TODO: Check the input correctness
    // otherwise display an error msg
    
    for (var i=0 ; i < count; i++){
         x = x * (max-min) + min;
         y = y * (max-min) + min;
        x = x.toFixed(2);
        y = y.toFixed(2);
        score = shot(x,y);
        console.log(score);
        
    }
     document.getElementById("scoe").innerHTML = "the scoe is " + score;

    return score;
    } 



function shotToCenter(x,y){

    return (x===0 && y === 0)? 1 : 0;
}



function shotToCircle(x,y){

    return (x * x + y * y <= 1)? 2 : 4;
}



function shot (x,y){

    return shotToCenter(x,y) || shotToCircle(x,y) || 0;
}



// function clickHandler(){
//         // var count = document.getElementById("count").value - 0;
//         // var min = document.getElementById ("min").value - 0;
//         // var max = document.getElementById("max").value - 0;
//         var result = shoter();
        
       
//     }
    // var button = document.getElementById("shot");
    // button.addEventListener("click", clickHandler());

 document.getElementById("shot").onclick = shoter;

   
  
//});
