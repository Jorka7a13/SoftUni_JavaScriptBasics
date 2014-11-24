function findYoungestPerson(persons) {
    var result = persons[0];
    var minAge = persons[0].age;

    for(var index in persons) {
        if(persons[index].age < minAge) {
            minAge = persons[index].age;
            result = persons[index];
        }
    }

    return result.firstname + ' ' + result.lastname;
}

var persons = [
    { firstname : 'George', lastname: 'Kolev', age: 32},
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Baba', lastname: 'Ginka', age: 40}];

console.log('The youngest person is ' + findYoungestPerson(persons));
