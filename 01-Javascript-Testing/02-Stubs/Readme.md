# Class 02

## Stubs

Stubs are objects that replace real functions in tests, allowing you to control their behavior and return values. With stubs, you can simulate responses from external dependencies (like APIs) and test specific flows without relying on external factors or the functioning of other parts of the system.

In this lesson's example, the `sinon` package was used to create stubs and control the return of the `makeRequest` method from the `Service` class. This made it possible to test the `getPlanets` method in isolation, simulating different API responses.

### What was learned:

- How to create stubs with `sinon` for class instance methods.
- How to configure different return values for the stub depending on the received arguments.
- How to test functions that depend on external calls without actually making those calls.
- How to ensure the test validates only the logic of the method in question, without depending on external integrations.

### Libraries used

- **Sinon**: library for creating stubs, spies, and mocks in tests.
- **Assert**: Node.js internal module for making assertions in tests.

### Example of stub usage

```js
const stub = sinon.stub(service, service.makeRequest.name);
stub.withArgs(BASE_URL_1).resolves(mocks.tatooine);
stub.withArgs(BASE_URL_2).resolves(mocks.alderaan);
```

This way, tests become faster, more predictable, and isolated, making code maintenance and evolution easier.
