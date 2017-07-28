wakanda.directory.getCurrentUserBelongsTo('Admin')
  .then(function (result) {
    console.log('You are ' + (result ? '' : 'not ') + 'an admin');
  });