App.Router.map(function() {
    this.route('index', {path: '/'});
    this.resource('participants', function() {
        this.resource('participant', {path: ':participant_id' });
    });
});
