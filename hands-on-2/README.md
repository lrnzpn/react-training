# Dad Jokes
API Docs - [https://icanhazdadjoke.com/api](https://icanhazdadjoke.com/api)

### Objectives
To further understand how useState, useEffect, and useReducer works.

In this example, useEffect is used to call our API, useState is used to store data in a controlled way, and useReducer to store and manage simple state logic.

In the real world, there will be more complex use cases, so it depends on how you approach these problems.

### How to use the API with Axios

```
axios.get(url, {
  headers: {
    Accept: "application/json"
  }
}).then((res) => {
  ...
}).catch((err) => {
  ...
});
```