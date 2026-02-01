
const Fibonacci = require("./fibonacci");

const assert = require("assert");

const { createSandbox } = require("sinon");
const sinon = new createSandbox();



; (async () => {
    {
        const fibonacci = new Fibonacci();
        const spy = sinon.spy(
            fibonacci,
            fibonacci.execute.name
        );

        const results = [...fibonacci.execute(5)]

        const expectedCallCount = 6;
        assert.strictEqual(spy.callCount, expectedCallCount);

        const { args } = spy.getCall(2);
        const expectedParams = [3, 1, 2]
        assert.deepStrictEqual(args, expectedParams, "Os arrays são diferentes")


        const expectedResults = [0, 1, 1, 2, 3]
        assert.deepStrictEqual(results, expectedResults, "Os resultados são diferentes")
    }
})()