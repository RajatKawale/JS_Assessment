function cacheMemorize(func) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key] === undefined) {
      cache[key] = func(...args);
    }

    return cache[key];
  };
}

// Example usage:

const addTwoNumbers = (x, y) => {
  console.log(`Calculating ${x} * ${y}`);
  return x * y;
};

const memorizedFunction = cacheMemorize(addTwoNumbers);

console.log(memorizedFunction(2, 3)); // Calls 'addTwoNumbers' function
console.log(memorizedFunction(2, 3)); // Returns the cached value
console.log(memorizedFunction(4, 5)); // Calls 'addTwoNumbers'
console.log(memorizedFunction(4, 5)); // Returns the cached value