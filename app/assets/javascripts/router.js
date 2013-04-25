App.Router.map(function() {
    this.route('index', {path: '/'});
    this.resource('participants', function() {
        this.route('show', {path: ':participant_id' });
    });
});
