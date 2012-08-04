$(function() {

	// Get number of inputs in div
	var i = $('.inputs input').size() + 1;
	// Get width of navigation bar
	var nav_width = $('#nav-width').val();


	// Show alert message
	function showAlert(message){
		$('#alerts').remove();
		$('body').append("<div id='alerts'>"+message+"</div>");
	};

	// Get fields values total when added together
	function fieldsTotal(){
		var add = 0;
        $(".field").each(function() {
            add += Number($(this).val());
        });
        return add;
	};
	

	$('#add').click(function() {
		// Calculate if total of all nav items is greater than nav width
		// Add function to show total width of nav so people can see how many pixels left
		var add = fieldsTotal();
        if(add > nav_width) 
        {
        	showAlert('This is greater than your navigation width. Try again, you may be a few pixels over the total width.');
        	$('.nav-item:last .field').val("");
        } 
        else 
        {
        	$('#alerts').remove();
        	$('<div class="nav-item"><label for="' + i + '">' + i + '</label><input type="text" class="field" name="dynamic[]" placeholder="Add element width in px" value="" /></div>').fadeIn('slow').appendTo('.inputs');
			i++;
			$('.nav-item:last .field').focus();
        }	
	});
	

	// Remove last item
	$('#remove').click(function() {
		if(i > 1) {
			$('.nav-item:last').remove();
			i--; 
		}
	});
	

	// Reset form
	$('#reset').click(function() {
		while(i > 2) {
			$('.nav-item:last').remove();
			i--;
		}
	});
	

	// Submit form
	$('.submit').click(function(){
		// Create and empty array to store field values
		var answers = [];
		
	    $.each($('.field'), function() {
	    	a = nav_width;
	        b = $(this).val();
	        c = b/a;
	        d = c*100;
	        answers.push(d); 
	    });

	    // Calculate if total of all nav items is greater than nav width
	    var add = fieldsTotal();

	    if(add > nav_width) 
	    {
	    	showAlert('This is greater than your navigation width. Try again, you may be a few pixels over the total width.');
        	$('.nav-item:last .field').val("");
	    } 
	    else
	    {
	    	$('#alerts').remove();
	    	$('#answers').remove();
	    	// If first value in array equals 0
	    	if(answers == 0) {
	        	showAlert('Please enter a value to be calulated.');
	        };
	    	// Show answers
	    	$('body').append("<div id='answers'>"+answers+"</div>");
	    };
		
		
		return false;						
	});
	
	

});