
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

function changeMood(id, status){
	switch(status) {
		case 'primary':
			$(id).removeClass( "border-secondary border-success border-danger border-warning border-info border-light border-dark border-white" ).addClass( "border-primary" );
		case 'secondary':
			$(id).removeClass( "border-primary border-success border-danger border-warning border-info border-light border-dark border-white" ).addClass( "border-secondary" );
		case 'success':
			$(id).removeClass( "border-secondary border-primary border-danger border-warning border-info border-light border-dark border-white" ).addClass( "border-success" );
		case 'danger':
			$(id).removeClass( "border-secondary border-success border-primary border-warning border-info border-light border-dark border-white" ).addClass( "border-danger" );
		case 'warning':
			$(id).removeClass( "border-secondary border-success border-danger border-primary border-info border-light border-dark border-white" ).addClass( "border-warning" );
		case 'info':
			$(id).removeClass( "border-secondary border-success border-danger border-warning border-primary border-light border-dark border-white" ).addClass( "border-info" );
		case 'light':
			$(id).removeClass( "border-secondary border-success border-danger border-warning border-info border-primary border-dark border-white" ).addClass( "border-light" );
		case 'dark':
			$(id).removeClass( "border-secondary border-success border-danger border-warning border-info border-light border-primary border-white" ).addClass( "border-dark" );
		case 'white':
			$(id).removeClass( "border-secondary border-success border-danger border-warning border-info border-light border-dark border-primary" ).addClass( "border-white" );
}

function resetStatus(id){
	
}