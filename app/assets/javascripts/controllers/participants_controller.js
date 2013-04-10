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

    refresh: function() {
        var me = this;
        var newContent = App.Participant.find({});
//        var newContent = this.get('store').find(App.Participant, {})
        newContent.on('didLoad', function() {
            var c = me.get('content');
            for (var i = 0; i < newContent.get('length'); i++) {
                if (c.indexOf(newContent.objectAt(i)) < 0) {
                    c.addObject(newContent.objectAt(i));
                }
            }
        });

    },
    drawWinner: function() {
        var me = this;
        var newContent = App.Participant.find({});
//discuss why loop and insert rather than just set('content') - ie. lose connection to the App.Participant.createRecord above
        newContent.on('didLoad', function() {
            var c = me.get('content');
            for (var i = 0; i < newContent.get('length'); i++) {
                if (c.indexOf(newContent.objectAt(i)) < 0) {
                    c.addObject(newContent.objectAt(i));
                }
            }
            var resetPool = me.filterProperty('isHotseat');
            for (var i = 0; i < resetPool.length ; i++) {
                resetPool[i].set('state', 'Gone');
            }
            var pool = me.filterProperty('isWaiting');
            if (pool.length > 0) {
                entry = pool[Math.floor(Math.random()*pool.length)];
                entry.set('state', 'Going');
            }
            me.get('store').commit();
        });
    }
});
