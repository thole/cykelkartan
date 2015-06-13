var filename = process.argv[2];
var activities = require('./' + filename);
var result = new Array()

activities.forEach(function(day){

	if(!day.summary){ return; }

	var newDay = JSON.parse(JSON.stringify(day));
	delete newDay.segments;

	var newSummary = new Array();
	day.summary.forEach(function(summary){
		if(summary.activity !== 'cycling'){return;}
		newSummary.push(JSON.parse(JSON.stringify(summary)));
	})
	newDay.summary = newSummary;
	result.push(newDay);	
	
})
console.log(JSON.stringify(result,null,2));
