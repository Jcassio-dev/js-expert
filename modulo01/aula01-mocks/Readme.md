# Class 01

## Mocks
<p>&nbsp;Instead of replicating your tests, you create objects that assume that test A is working, store its result in a fixed object, so you can test the path from B to C without depending on A.</p>
<p>&nbsp;Bringing it to a real environment, imagine that you need to create a function responsible for converting the content of a CSV file into JSON. 
A common business rule in this type of operation is to validate the content, checking whether it is empty, whether it is in the correct format or whether it has the desired properties.</p>
<p>&nbsp;For each of the operations you will create a different mock to test the behavior, so the tests are decoupled and much more intelligent, without replication.</p>

## Libs

### Assert (node internal module)
```The node:assert module provides a set of assertion functions for verifying invariants.```
#### rejects:(block: (() => promise) | promise, message: string | Error)
 
 ```checks if the passed result is the same as the expected message, if not, rejects it by throwing an error```


