
## Data source:

http://www.homesandcommunities.co.uk/land-and-property-assets

## Import

1. Change line endings to Unix and export as UTF8 in Sublime.

2. Remove lines that match: ",,,,,,,,,,,,\n" (I used regex replace in Sublime).

3. Remove lines that match:
Local Authority,Town Reference,Asset Reference,Asset Category,Property Type,Asset Name,Address,,Gross Area,Easting,Northing,Postcode,\n

4. Remove last 3 lines:
,,,,,,,Sum:,155.6025,,,,
,,,,,,,Sum:,10202.5361,,,,
,,,,,,,Sum:,10202.5361,,,,

5. Import

mongoimport --db landwiki --collection lands --type csv --headerline --file hca/201209/hca_land__property_assets_data_september_2012.csv

node hca/clean.js


## Cleanup

Delete where:
{ "status": 0 }
