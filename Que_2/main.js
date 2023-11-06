function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`Counter incremented to ${count}`);
  }

  function decrement() {
    count--;
    console.log(`Counter decremented to ${count}`);
  }

  function getCount() {
    return count;
  }

  return {
    increment,
    decrement,
    getCount,
  };
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount()); // Get the current count (should be 1)