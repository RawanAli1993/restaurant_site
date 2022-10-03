// roro1.sayhello ();
// zozo1.sayhi ();

(function (window) {

 var names = ["rawan", "razan", "Julia", "rand", "joana", "jounh"];



 for (var i = 0; i < names.length; i++) {

 	var firstletter = names[i].charAt(0).toLowerCase();






 	if (firstletter === 'j'){
 		speakebye.speak(names[i]);

 		
 	}

 	   else {
 		
 		speakeword.speak(names[i]);


 	    }



 	 } 
 	})(window);