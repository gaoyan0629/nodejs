let mary = {
    name: 'mary',
    gender: 'female',
    age: 25,
    job: {
        title: 'teacher',
        salary: 10000
    }
}

let dave = {
    name: 'dave',
    gender: 'male',
    age: 27
}

let oswald = {
    name: 'oswald',
    gender: 'male',
    age: 25
}

let people = [mary, dave, oswald];

/*
1. Property iteratee
When iteratee is called with a string, it returns a function that will return the property of an object with the key of the supplied string.

e.g.

let getAge = _.iteratee('age');
What we end up with here is a function that returns the age property of an object. Something similar to:

function getAge(object){
    return object['age'];
}
So we can use getAge to return the age of people:

let marysage = getAge(mary);
let davesage = getAge(dave);
The string can also be a path to a property:

let jobtitle = _.iteratee('job.title');
2. Matches iteratee
When iteratee is called with an object, it returns a predicate (returns true or false) if an object has a matching key with the given value.

e.g.

let is25 = _.iteratee({age: 25});

let isMary25 = is25(mary);
let isDave25 = is25(dave);
The matches iteratee is not restricted to a single property. It can take multiple keys and values:

let isFemaleAged25 = _.iteratee({gender: 'female', age: 25});
3. Matches property iteratee
This is similar to the matches iteratee but is created when iteratee is called with an array of keys and values.

The is25 function created above could also be created like so:

let is25 = _.iteratee(['age', 25]);
The properties can also be a path to a key, something which cannot be done using the matches iteratee:

let isTeacherAged25 = _.iteratee(['age', 25, 'job.title', 'teacher'])
Using iteratees
Most of the time you won't call the iteratee function directly. Lodash will use the function internally when you call a function that can take an iteratee.

e.g.

let names = _.map(people, 'name'); // => ['mary', 'dave', 'oswald']
Here lodash will call iteratee with the string name and use it as the function to call map.

let peopleAged25 = _.filter(people, {age: 25 }); // mary and oswald
Here lodash will call iteratee with the object {age: 25} and use it as the function to filter the people collection.
*/
