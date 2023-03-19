
function changeMood(id, mood, age, name){
	$(id).attr('src','/res/sprites/'+age+'/'+name+'/dynamic/'+mood+'.png');
	setTimeout(resetMood(id, age, name), 400);
}

function resetMood(id, age, name){
	$(id).attr('src','/res/sprites/'+age+'/'+name+'/dynamic/general.png');
}