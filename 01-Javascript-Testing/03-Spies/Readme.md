# Class 03

## Spies

Spies are used to monitor the behavior of functions during tests, allowing you to track how many times a function was called, with which arguments, and what values were returned. This is especially useful for verifying side effects and ensuring that your code interacts correctly with dependencies.

In this class, we learned how to:

- Use Sinon.js to create spies on class methods
- Track the number of times a method is called
- Inspect the arguments passed to each call
- Validate the results produced by the method

### Example: Fibonacci Sequence

We implemented a `Fibonacci` class with a generator method to produce Fibonacci numbers. In the test, we used Sinon to spy on the `execute` method, verifying:

- The method was called the expected number of times
- The arguments for specific calls matched expectations
- The output sequence was correct

### Libraries Used

- **Sinon.js**: For creating spies and inspecting function calls
- **Node.js Assert**: For assertions in tests

Spies are essential for testing interactions and side effects, making your tests more robust and reliable.
