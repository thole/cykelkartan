default: cycling_2014.topojson cycling_2015.topojson cycling_2014_activities.json cycling_2015_activities.json

cycling_2014.topojson:	cycling_2014.geojson
	topojson -p name -o cycling_2014.topojson cycling_2014.geojson
cycling_2014.geojson: cycling_2014.gpx
	togeojson cycling_2014.gpx > cycling_2014.geojson

cycling_2015.topojson:	cycling_2015.geojson
	topojson -p name -o cycling_2015.topojson cycling_2015.geojson
cycling_2015.geojson: cycling_2015.gpx
	togeojson cycling_2015.gpx > cycling_2015.geojson


cycling_2014_activities.json: activities_2014.json
	node clean.js activities_2014.json > cycling_2014_activities.json

cycling_2015_activities.json: activities_2015.json
	node clean.js activities_2015.json > cycling_2015_activities.json

clean:
	rm -f cycling_2014.topojson
	rm -f cycling_2014.geojson 


