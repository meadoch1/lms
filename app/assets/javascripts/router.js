App.Router.map(function() {
	// index template will be displayed when / is visited
    this.route('index', {path: '/'});

    // participants.index template will be displayed when /participants is visited
    this.resource('participants', function() {

		// participants.show template will be displayed when /participants/1 is visited
        this.route('show', {path: ':participant_id' });
    });  
    //both participants routes above will be wrapped in the participants template since they are nested
});

