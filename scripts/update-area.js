


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
