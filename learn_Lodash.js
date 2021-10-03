/*

Learn Lodash: _.groupBy, Group Items in Array or Object by Given Value

Challenge: write your own version of groupBy called myGroupBy using vanilla JavaScript that can do the same thing as the lodash version.

The lodash helper function, groupBy, recieves an array and groups the items of the array into an object according to a given criteria. A real life example would be if you had a parking lot of cars you could group them by color. Then you would put the reds ones in one place and the blue ones in another. The array represents the parking lot and the object represents the postitions you've placed the cars in.
Arguments

    collection (Array or Object): The collection to iterate over.
    [iteratee=_.identity] (Function or String or Object): The iteratee to transform keys.

Returns

    (Object): Returns the composed aggregate object.

Examples

groupBy(["one", "two", "three"], "length"); returns  { "3": ["one", "two"], "5": ["three"] }

Notes

Where lodash shines is its versitility. This function can receive a string, an object or a function and return an answer. This makes it difficult for us to write our version in vanilla JS as we have to account for so many different types of inputs.

URL: https://edabit.com/challenge/eJ8vzsdDcKNy97Kbu

*/

//Array.isArray(val) ? val[tipo] : val1 => val1[Object.entries(tipo)[0]] == Object.entries(tipo)[1]

function myGroupBy(collection, iteratee) {
  const values = Array.isArray(collection) ? collection : Object.values(collection);

  return values.reduce((obj, val) => {
    const key = typeof(iteratee) === 'object'
    ? Object.entries(iteratee).every(([k, v]) => val[k] === v)
    : typeof(iteratee) === 'function' ? iteratee(val) : val[iteratee];

    return {
      ...obj,
      [key]: [...(obj[key] || []), val]
    };
  }, {});
}

console.log(myGroupBy(["one", "two", "three"], "length"))