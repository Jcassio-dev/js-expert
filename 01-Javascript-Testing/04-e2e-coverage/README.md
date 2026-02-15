<file_path>
js-expert/01-Javascript-Testing/04-e2e-coverage/README.md
</file_path>

<edit_description>
Create README.md for Class 04 on E2E Coverage
</edit_description>

# Class 04

## End-to-End Tests with Code Coverage

End-to-end (E2E) tests simulate real user interactions with the application, testing the entire flow from the user's perspective to ensure the system works as expected in a production-like environment. In this lesson, we implemented E2E tests for a simple HTTP API using Supertest to make requests to the server and Mocha as the test runner. Additionally, we integrated NYC for code coverage, which measures the percentage of code executed during tests, helping to identify untested parts of the codebase.

### What was learned:

- How to set up and run E2E tests using Mocha and Supertest.
- Testing HTTP endpoints, including GET and POST requests, and verifying responses.
- Handling server lifecycle in tests (starting and stopping the server).
- Using assertions to validate response status codes, text, and other properties.
- Integrating code coverage with NYC to generate reports and improve test completeness.
- Running tests with coverage using scripts like `npm run test:cov`.

### Libraries used

- **Mocha**: A feature-rich JavaScript test framework running on Node.js, used for organizing and running tests.
- **Supertest**: A library for testing HTTP endpoints by making requests and asserting responses.
- **NYC**: The Istanbul command line interface, used for code coverage reporting.

### Example of E2E test usage

```js
describe('/login:post', () => {
  it('should request login and return HTTP status 200', async () => {
    const response = await supertest(app)
      .post('/login')
      .send({ username: 'cassio', password: 123 })
      .expect(200);

    assert.strictEqual(response.text, 'ok');
  });
});
```

This approach ensures that the application behaves correctly end-to-end, and code coverage helps maintain high-quality, well-tested code.