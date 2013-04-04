App.ParticipantsController = Ember.ArrayController.extend({
    addParticipant: function() {
        var newParticipant = App.Participant.createRecord( {
            name: this.get('newParticipantName'),
            state: 'Waiting'
        });
//        this.pushObject(newParticipant);
        this.set('newParticipantName', '');
        this.get('store').commit();
    },

    drawWinner: function() {
        
        this.refresh();
        var resetPool = this.filterProperty('isHotseat');
        for (var i = 0; i < resetPool.length ; i++) {
            resetPool[i].set('state', 'Gone');
        }
        var pool = this.filterProperty('isWaiting');
        if (pool.length > 0) {
            entry = pool[Math.floor(Math.random()*pool.length)];
            entry.set('state', 'Going');
        }
        this.get('store').commit();
    }
});
