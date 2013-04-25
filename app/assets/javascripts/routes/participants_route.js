App.ParticipantsIndexRoute= Ember.Route.extend({
    model: function() {
        return App.Participant.find();
    }
});

