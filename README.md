Tools to aid the import of data into the Land Wiki database. See www.landwiki.org.uk for more information.

Each folder contains information relating to the import of a particular data-set.

## How to import

See the README.md file inside each import folder.

## How to export

    mongoexport --db landwiki --collection lands --csv --fieldFile export-fields.txt --out land-export.csv
