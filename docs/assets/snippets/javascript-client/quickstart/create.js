var comp1 = ds.Company.create();
comp1.name = 'Nice Corp 1';
comp1.save();

var comp2 = ds.Company.create({
  name: 'Nice Corp 2'
});
comp2.save();
