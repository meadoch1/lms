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
        newContent.on('didLoad', function() {
            me.populateContent(me, newContent);
        });

    },
    drawWinner: function() {
        var me = this;
        var newContent = App.Participant.find({});
        newContent.on('didLoad', function() {
            me.populateContent(me, newContent);
            me.promoteHotseat(me);
            me.chooseNewHotseat(me);
            me.get('store').commit();
        });
    },

    populateContent: function(context, newContent) {
        var c = context.get('content');
        if (c) {
            for (var i = 0; i < newContent.get('length'); i++) {
                if (c.indexOf(newContent.objectAt(i)) < 0) {
                    c.addObject(newContent.objectAt(i));
                }
            }
        }
    },

    promoteHotseat: function(context) {
        var resetPool = context.filterProperty('isHotseat');
        for (var i = 0; i < resetPool.length ; i++) {
            resetPool[i].set('state', 'Gone');
        }

    },

    chooseNewHotseat: function(context) {
        var pool = context.filterProperty('isWaiting');
        if (pool.length > 0) {
            entry = pool[Math.floor(Math.random()*pool.length)];
            entry.set('state', 'Going');
        }

    }
});
