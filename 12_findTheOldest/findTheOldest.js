const findTheOldest = function(people) {

    //finds property in each object of array and returns existing year if empty
    for (let key in people) {
        if (people[key].yearOfDeath === undefined) {
            people[key].yearOfDeath = new Date().getFullYear();
        }
    }

    console.table(people);

    //function that sorts objects by years lived with oldest at people[0]
   people.sort(function(a, b) {
        const person1 = a.yearOfDeath - a.yearOfBirth;
        const person2 = b.yearOfDeath - b.yearOfBirth;
        //if <0, sort a before b
        return person1 > person2 ? -1 : 1;
      });

      const oldest = people[0];
      return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
