(function( $ ) {
    $.fn.jhistory = function() {
  
        if(window.history.pushState) {
			
            this.find('a').on('click',function(event) {
					
                //disable browser to load requested urls
                event.preventDefault();
						
                /*
						 setup variable data
						*/
                atitle = $(this).attr('title');
                ahref = $(this).attr('href');
                anchor = $(this).text();
                aobject = {
                    objTitle: atitle,
                    objHref: ahref,
                    objAnchor: anchor
                };
						
                //html5 history pushState
                window.history.pushState(aobject,atitle,ahref);
					
            });
			
        }

    };
})( jQuery );