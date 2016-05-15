/**
 * Fichier JAVASCRIPT
 */

//Script entier en mode strict

"use strict";

/*...instructions...*/
(function ($) {
	
	console.log($("div"));
	
	var form = $("#form-faq");
	var displayIn = $("#text-to-display-in");
	
	
	form.submit(function (event){
		event.stopPropagation(),
		event.preventDefault ();
		var tempmsg = $("#user-msg").val();
		displayIn.text(tempmsg);
	});
	

})(jQuery);