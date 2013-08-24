


mongo

use landwiki
// db.lands.find({ "labels": "gla-group gla london public", "originalData.Asset_Category": "Operational asset"  } );

db.lands.find(
  { labels: 'gla-group gla london public', 'originalData.Asset_Category': 'Operational asset'  }
);

db.lands.update(
  { labels: 'gla-group gla london public', 'originalData.Asset_Category': 'Operational asset'  }, 
  { $set: { 'icon': 'placemark_circle' }},
  { multi: true }
);
