


mongo

use landwiki

db.lands.find(
  { labels: 'nlud-pdl-2009 hca ukgov brownfield' }
);

db.eval(function() { 
    db.lands.find({ labels: 'nlud-pdl-2009 hca ukgov brownfield' }).forEach(function(d) {
        d.area = d.originalData.AREA || null;
        db.lands.save(d);
    });
});

db.eval(function() { 
    db.lands.find({ labels: 'gla-group gla london public' }).forEach(function(d) {
      if (d.originalData.Site_Area_Hectares)
        d.area = d.originalData.Site_Area_Hectares;
      else
        delete d.area;
      db.lands.save(d);
      return d;
    });
});

