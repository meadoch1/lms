App.Store = DS.Store.extend({
    revision: 11,
    adapter: 'DS.FixtureAdapter'
});

App.Participant.FIXTURES = [
    {
        name: "Larry",
        state: "Waiting"
    },{
        name: "Moe",
        state: "Going"
    },{
        name: "Curly",
        state: "Gone"
    },{
        name: "Shemp",
        state: "Waiting"
    }
];
