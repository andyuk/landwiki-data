// use landwiki;


db.eval(function() { 
    db.lands.find({ labels: 'hca public' }).forEach(function(d) {
        delete d.originalData.field12;
        delete d.originalData[""];
        d.title = d.originalData["Asset Name"];
        d.area = d.originalData["Gross Area"];
        db.lands.save(d);
    });
});