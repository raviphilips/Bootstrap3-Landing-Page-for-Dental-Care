

$(function() {
	
	$('#alertMe').click(function(e) {
		
		e.preventDefault();
		
		$('#successAlert').slideDown();
		
	});
	
	$('a.pop').click(function(e) {
		e.preventDefault();
	});
	
	$('a.pop').popover();
	
	$('[rel="tooltip"]').tooltip();




    $('#datetimepicker1').datetimepicker({
    	format:'d.m.Y H:i',
  	inline:true,
  	lang:'ru'
    });
      

   

	
	
});


  


          
        
