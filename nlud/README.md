
## Data source:

http://www.homesandcommunities.co.uk/nlud-pdl-results-and-analysis.
http://www.homesandcommunities.co.uk/sites/default/files/our-work/NLUD2009SitesMV.zip

## Import

1. Convert eastings and northings to lat/longs.
http://gridreferencefinder.com/batchConvert/batchConvert.htm

2. Change line endings to Unix and export as UTF8 in Sublime.

3. Import

mongoimport --db landwiki --collection lands --type csv --headerline --file nlud/land.csv


## Clean

node nlud/clean.js

## Remove old records

{ "status": 0 }

