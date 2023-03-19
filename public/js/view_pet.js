
function changeMood(id, mood, age, name){
	$(id).attr('src','/res/sprites/'+age+'/'+name+'/dynamic/'+mood+'.png');

	$(id).hover(
		function() {
			$( this ).attr('src','/res/sprites/'+age+'/'+name+'/dynamic/close_up.png');
		}, function() {
			$( this ).attr('src','/res/sprites/'+age+'/'+name+'/dynamic/general.png');
		}
	);
}

function resetMood(id, age, name){
	$(id).attr('src','/res/sprites/'+age+'/'+name+'/dynamic/general.png');
}