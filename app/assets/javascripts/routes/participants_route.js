App.ParticipantsRoute = Ember.Route.extend({
    model: function() {
        return App.Participant.find();
    }
});
