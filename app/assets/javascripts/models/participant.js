App.Participant = DS.Model.extend({
    name: DS.attr('string'),
    state: DS.attr('string'),
    isWaiting: function() {
        return this.get('state') === 'Waiting';
    }.property('state')
});
