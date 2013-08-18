
## Data source:

http://data.london.gov.uk/datastore/package/gla-group-land-assets

## Import

1. Change line endings to Unix and export as UTF8 in Sublime.

2. Import

mongoimport --db landwiki --collection lands --type csv --headerline --file gla-group-land-assets/20130805/gla-group-assets-gla.csv;
mongoimport --db landwiki --collection lands --type csv --headerline --file gla-group-land-assets/20130805/gla-group-assets-mps.csv;
mongoimport --db landwiki --collection lands --type csv --headerline --file gla-group-land-assets/20130805/gla-group-assets-lfb.csv;
mongoimport --db landwiki --collection lands --type csv --headerline --file gla-group-land-assets/20130805/gla-group-assets-tfl.csv;
mongoimport --db landwiki --collection lands --type csv --headerline --file gla-group-land-assets/20130805/gla-group-assets-lldc.csv;

node gla-group-land-assets/clean.js


## Cleanup

Delete where:
{ "status": 0 }
