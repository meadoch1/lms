App.ParticipantsController = Ember.ArrayController.extend({
    content: [],
    addParticipant: function() {
        var newParticipant = App.Participant.createRecord( {
            name: this.get('newParticipantName'),
            state: 'Waiting'
        });
        this.set('newParticipantName', '');
        this.get('store').commit();
    },

    flush: function() {
        var recs = App.Participant.all();
        for (var i = recs.content.length - 1; i >= 0; i--) {
            recs.objectAt(i).deleteRecord();
        }
        this.get('store').commit();
    },

    refresh: function() {
        App.Participant.find({});
    },

    drawWinner: function() {
        var me = this;
        var newContent = App.Participant.find({});
        newContent.on('didLoad', function() {
            me.promoteHotseat(newContent);
            me.chooseNewHotseat(newContent);
            me.get('store').commit();
        });
    },

    promoteHotseat: function(newContent) {
        var resetPool = newContent.filterProperty('isHotseat');
        for (var i = 0; i < resetPool.length ; i++) {
            resetPool[i].set('state', 'Gone');
        }

    },

    chooseNewHotseat: function(newContent) {
        var pool = newContent.filterProperty('isWaiting');
        if (pool.length > 0) {
            entry = pool[Math.floor(Math.random()*pool.length)];
            entry.set('state', 'Going');
        }

    }
});
