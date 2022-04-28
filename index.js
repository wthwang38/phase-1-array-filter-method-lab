// Code your solution here

 //findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.  
const findMatching = (array, name) => {
    return array.filter(
        (item) => item.toLowerCase() === name.toLowerCase()
        );
    }
//fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

const fuzzyMatch = (array, string) => {
    return array.filter(
       (driver) => driver.toLowerCase().startsWith(string.toLowerCase())
    );
}
//matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.

const matchName = (array, string) => {
    return array.filter(
        (driver) => {
          return driver.name === string
        });
}

