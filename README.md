# ExpressJS Typescript Example

The point of this repository is to show an example of how to use dependency injection with the [ExpressJS](https://expressjs.com) framework in Node.js. It incorporates declaring the dependency types in Typescript, and includes a test to show how you can mock the dependencies.

We'll want to make dependencies for any external service we communicate with, and low level things such as database access. In the context of unit tests, the test itself can decide what kind of dependencies to provide to the application, such as using a real database connection to a local database used for testing, or simply mocking the database layer.

For dependencies that rely on the request object itself, a decent solution is to have the dependency simply be a function that accepts the request object or the request body, and returns the actual useful dependency. This keeps code as clean as possible in the API layer of your application.

## Example

Provide application dependencies in your entrypoint:

https://github.com/mickmister/express-dependency-injection-example/blob/79dbc3891e42507847f76431ca9241cffc578fc8/src/index.ts#L9-L14

Assign dependencies to the Express request object using middleware:

https://github.com/mickmister/express-dependency-injection-example/blob/79dbc3891e42507847f76431ca9241cffc578fc8/src/express_app.ts#L6-L12

Configure the Typescript compiler to include this change to the Express request object:

https://github.com/mickmister/express-dependency-injection-example/blob/79dbc3891e42507847f76431ca9241cffc578fc8/src/types/express.d.ts#L1-L9

Then you can use the dependencies, and the Typescript compiler already knows the type of each dependency through type inference:

https://github.com/mickmister/express-dependency-injection-example/blob/79dbc3891e42507847f76431ca9241cffc578fc8/src/controllers/users_controller.ts#L6-L13

Provide dependencies in your tests. Note that the database service dependency is fairly superficial. We should ideally make the test realistic and use a test database if possible.

https://github.com/mickmister/express-dependency-injection-example/blob/f50ab30b71c283431093aa3569545226d555c47d/src/controllers/users_controller.test.ts#L19-L31
