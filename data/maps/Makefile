#http://download.geofabrik.de/europe/germany.html
default: extract hamburg/hamburg.json borders/borders.json

hamburg/hamburg.json: hamburg/roads.json
	topojson -q 1e5 -s -o hamburg/hamburg.json hamburg/roads.json
	ls -al hamburg/hamburg.json
	cp hamburg/hamburg.json ../hamburg.json
	
hamburg/roads.json: hamburg/roads.shp
	ogr2ogr -f GeoJSON hamburg/roads.json hamburg/roads.shp

borders/borders.json: borders/ne_10m_admin_0_map_subunits.json
	topojson -q 1e6 --id-property SU_A3 --properties name=NAME -o borders/borders.json borders/ne_10m_admin_0_map_subunits.json
	ls -al borders/borders.json
	cp borders/borders.json ../borders.json
	
borders/ne_10m_admin_0_map_subunits.json: borders/ne_10m_admin_0_map_subunits.shp
	ogr2ogr -f GeoJSON -where "CONTINENT IN ('Europe')" borders/ne_10m_admin_0_map_subunits.json borders/ne_10m_admin_0_map_subunits.shp

extract:
	unzip -o hamburg-lastest.shp.zip -d ./hamburg
	unzip -o ne_10m_admin_0_map_subunits.zip -d ./borders

clean:
	rm -f *.json
	rm -f -r borders
	rm -f -r hamburg
