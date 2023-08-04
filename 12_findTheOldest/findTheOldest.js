const findTheOldest = function(persons) {
    let oldestPersonName = "",
        biggestAge = 0,
        age = 0;
    persons.forEach(person => {
        age = (person.yearOfDeath - person.yearOfBirth);
        if (age > biggestAge){
            biggestAge = age;
            oldestPersonName = person.name;
        }
    })
    return age;
};

// Do not edit below this line
module.exports = findTheOldest;
