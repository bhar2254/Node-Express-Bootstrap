
function changeMood(id, mood, age, name){
	$(id).attr('src','/res/sprites/'+age+'/'+name+'/dynamic/'+mood+'.png');
	
	if(age==='adult')
	{
		$(id).hover(
			function() {
				$( this ).attr('src','/res/sprites/'+age+'/'+name+'/dynamic/close_up.png');
			}, function() {
				$(id).attr('src','/res/sprites/'+age+'/'+name+'/dynamic/'+mood+'.png');
			}
		);
	} else {
		$(id).hover(
			function() {
				$( this ).attr('src','/res/sprites/'+age+'/'+name+'/dynamic/surprise_good.png');
			}, function() {
				$(id).attr('src','/res/sprites/'+age+'/'+name+'/dynamic/'+mood+'.png');
			}
		);
	}
}

function resetMood(id, age, name){
	$(id).attr('src','/res/sprites/'+age+'/'+name+'/dynamic/general.png');
	
	if(age==='adult')
	{
		$(id).hover(
			function() {
				$( this ).attr('src','/res/sprites/'+age+'/'+name+'/dynamic/close_up.png');
			}, function() {
				$( this ).attr('src','/res/sprites/'+age+'/'+name+'/dynamic/general.png');
			}
		);
	} else {
		$(id).hover(
			function() {
				$( this ).attr('src','/res/sprites/'+age+'/'+name+'/dynamic/surprise_good.png');
			}, function() {
				$( this ).attr('src','/res/sprites/'+age+'/'+name+'/dynamic/general.png');
			}
		);
	}
}

function changeStatus(id, status){
	switch(status) {
		case 'primary':
			$(id).removeClass( "border-secondary border-success border-danger border-warning border-info border-light border-dark border-white border-4 border-2" ).addClass( "border-primary border-1" );
			break;
		case 'secondary':
			$(id).removeClass( "border-primary border-success border-danger border-warning border-info border-light border-dark border-white border-4 border-1" ).addClass( "border-secondary border-2" );
			break;
		case 'success':
			$(id).removeClass( "border-secondary border-primary border-danger border-warning border-info border-light border-dark border-white border-4 border-1" ).addClass( "border-success border-4" );
			break;
		case 'danger':
			$(id).removeClass( "border-secondary border-success border-primary border-warning border-info border-light border-dark border-white border-4 border-1" ).addClass( "border-danger border-4" );
			break;
		case 'warning':
			$(id).removeClass( "border-secondary border-success border-danger border-primary border-info border-light border-dark border-white border-4 border-1" ).addClass( "border-warning border-2" );
			break;
		case 'info':
			$(id).removeClass( "border-secondary border-success border-danger border-warning border-primary border-light border-dark border-white border-4 border-1" ).addClass( "border-info border-2" );
			break;
		case 'light':
			$(id).removeClass( "border-secondary border-success border-danger border-warning border-info border-primary border-dark border-white border-4 border-1" ).addClass( "border-light border-2" );
			break;
		case 'dark':
			$(id).removeClass( "border-secondary border-success border-danger border-warning border-info border-light border-primary border-white border-4 border-1" ).addClass( "border-dark border-2" );
			break;
		case 'white':
			$(id).removeClass( "border-secondary border-success border-danger border-warning border-info border-light border-dark border-primary border-4 border-1" ).addClass( "border-white border-2" );
	}
}

function resetStatus(id){
	
}