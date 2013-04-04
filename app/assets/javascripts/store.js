App.Store = DS.Store.extend({
    revision: 11,
    adapter: 'DS.RESTAdapter',
    url: 'http://127.0.0.1:3000'
});

App.Participant.FIXTURES = [
    {
        id: 1,
        name: "Larry",
        state: "Waiting"
    },{
        id: 2,
        name: "Moe",
        state: "Going"
    },{ 
        id: 3,
        name: "Curly",
        state: "Gone"
    },{
        id: 4,
        name: "Shemp",
        state: "Waiting"
    }
];
