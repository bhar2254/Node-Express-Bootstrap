
function changeMood(id, mood, age, name){
	$(id).attr('src','/res/sprites/'+age+'/'+name+'/dynamic/'+mood+'.png');
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

resetMood("#petPNG", age, name);