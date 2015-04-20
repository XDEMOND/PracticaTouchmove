





$.index.addEventListener('touchmove', function(e){
	Ti.API.info('x: '+e.x + ', y: '+ e.y);
	
	
	$.lblxy.text = "x: "+e.x+",y: "+e.y;
});

$.index.open();
