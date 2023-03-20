
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
			$(id).removeClass( "border-secondary border-success border-danger border-warning border-info border-light border-dark border-white" ).addClass( "border-primary" );
			break;
		case 'secondary':
			$(id).removeClass( "border-primary border-success border-danger border-warning border-info border-light border-dark border-white" ).addClass( "border-secondary" );
			break;
		case 'success':
			$(id).removeClass( "border-secondary border-primary border-danger border-warning border-info border-light border-dark border-white" ).addClass( "border-success" );
			break;
		case 'danger':
			$(id).removeClass( "border-secondary border-success border-primary border-warning border-info border-light border-dark border-white" ).addClass( "border-danger" );
			break;
		case 'warning':
			$(id).removeClass( "border-secondary border-success border-danger border-primary border-info border-light border-dark border-white" ).addClass( "border-warning" );
			break;
		case 'info':
			$(id).removeClass( "border-secondary border-success border-danger border-warning border-primary border-light border-dark border-white" ).addClass( "border-info" );
			break;
		case 'light':
			$(id).removeClass( "border-secondary border-success border-danger border-warning border-info border-primary border-dark border-white" ).addClass( "border-light" );
			break;
		case 'dark':
			$(id).removeClass( "border-secondary border-success border-danger border-warning border-info border-light border-primary border-white" ).addClass( "border-dark" );
			break;
		case 'white':
			$(id).removeClass( "border-secondary border-success border-danger border-warning border-info border-light border-dark border-primary" ).addClass( "border-white" );
	}
}

function resetStatus(id){
	
}