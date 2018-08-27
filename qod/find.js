let low = require('lowdb'),
FileSync = require('lowdb/adapters/FileSync'),
adapter = new FileSync('find.json'),
 
db = low(adapter);
 
// set defaults for the db
db.defaults({
    users: {}
}).write();
 
let users = db.get('users');
 
// add one user if we have none
if (users.value().length === 0) {
 
    let userNames = ['jerry', 'mongo', 'elvis']
 
    userNames.forEach(function (name,i) {
 
        // call him jerry
        users.push({
 
            name: name,
            lastOn: new Date(),
            visits: 0
 
        }).write();
 
    });
 
}
 
console.log( db.get('users').find({name:'mongo'}).value() );
