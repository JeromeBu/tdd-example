Focus will not be to do very algorithmic TDD but rather how to use it on a real application.
We will build a very classical Todo list app.

The architecture will be Clean Architecture (Ports/Adapters architecture)

# Objectives :

We will first work on the unit tests, in the domain.
The storage will be done with an In Memory adapter.

## Add Todo :

- You cannot add a Todo with a text of less than 3 caracters long
- You can save a Todo
- Trailing white spaces should be removed, and text should be capitalize
- You cannot add 2 Todos with the same uuid

## List Todos :

- You can list all the Todos that have been added

## Bonus :

- Add e2e tests and make the API available
- You can add Todos only between 08h and 12h
- Build a repository adapter to store in JSON file (with corresponding integration tests) instead of in memory

The following commands are availables, self explanatory :

```
npm start
npm run test:unit
npm run test:e2e
npm run test:integration
npm run test:all
```
