default: extract cycling_2014.topojson cycling_2015.topojson cycling_2014_activities.json cycling_2015_activities.json

cycling_2014.topojson:	cycling_2014.geojson
	topojson -p name -o cycling_2014.topojson ./temp/cycling_2014.geojson
cycling_2015.topojson:	cycling_2015.geojson
	topojson -p name -o cycling_2015.topojson ./temp/cycling_2015.geojson


cycling_2014.geojson: ./temp/gpx/yearly/cycling/cycling_2014.gpx
	togeojson ./temp/gpx/yearly/cycling/cycling_2014.gpx > ./temp/cycling_2014.geojson
cycling_2015.geojson: ./temp/gpx/yearly/cycling/cycling_2015.gpx
	togeojson ./temp/gpx/yearly/cycling/cycling_2015.gpx > ./temp/cycling_2015.geojson


cycling_2014_activities.json:  ./temp/json/yearly/activities/activities_2014.json
	node clean.js ./temp/json/yearly/activities/activities_2014.json > cycling_2014_activities.json
cycling_2015_activities.json: ./temp/json/yearly/activities/activities_2015.json
	node clean.js ./temp/json/yearly/activities/activities_2015.json > cycling_2015_activities.json


clean:
	rm -f *.topojson
	rm -f *.geojson 

delete:
	rm -f moves_export.zip
	rm -f -r ./temp


extract: moves_export.zip
	unzip moves_export.zip -d ./temp
	unzip ./temp/gpx.zip -d ./temp
	unzip ./temp/json.zip -d ./temp






