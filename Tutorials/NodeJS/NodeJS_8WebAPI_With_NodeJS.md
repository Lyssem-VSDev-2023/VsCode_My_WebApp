# **Build a web API with Node.js and Express**

- [**Build a web API with Node.js and Express**](#build-a-web-api-with-nodejs-and-express)
  - [Create an Express framework web application](#create-an-express-framework-web-application)
  - [HTTP module in Node.js](#http-module-in-nodejs)
  - [Streams](#streams)
  - [Express framework](#express-framework)
  - [Route management in Express](#route-management-in-express)
  - [Serve different content types](#serve-different-content-types)
  - [Exercise - Create a new Express web application](#exercise---create-a-new-express-web-application)
    - [Create a basic web app with Express](#create-a-basic-web-app-with-express)
    - [Create a web app that returns JSON data](#create-a-web-app-that-returns-json-data)
  - [Manage a request lifecycle with middleware](#manage-a-request-lifecycle-with-middleware)
    - [Request steps](#request-steps)
    - [Request pipeline](#request-pipeline)
  - [Exercise - Manage request lifecycle](#exercise---manage-request-lifecycle)
    - [Add basic authorization to an Express framework](#add-basic-authorization-to-an-express-framework)
    - [Protect the route](#protect-the-route)
    - [Add authorization header](#add-authorization-header)

---

## Create an Express framework web application

[&#9650;](#build-a-web-api-with-nodejs-and-express)

The following are important concepts to consider when you build web applications and APIs:

- **Routing:** Your application is divided into different sections based on parts of the URL address.

- **Support for different content types:** The data to serve up might exist in different file formats, Such as plain text, JSON, HTML, CSV, and more.

- **Authentication/Authorization:** Some data might be sensitive. A user might need to sign in or have a specific role or permission level to access the data.

- **Read/Write data:** Users usually need to both view and add data to the system. To add data, users might enter data in a form or upload files.

- **Time to market:** To create web applications and APIs efficiently, choose tools and libraries that provide solutions to common problems.

## HTTP module in Node.js

[&#9650;](#build-a-web-api-with-nodejs-and-express)

`Node.js` comes with a built-in **`HTTP module`**. It's a fairly small module that handles most types of requests. It supports common types of data like **headers**, the **URL**, and **payloads**.

The following classes help manage a request from start to finish:

- **`http.Server`**: Represents an instance of an `HTTP Server`. This object needs to be instructed to **listen** to different events on a specific port and address.

- **`http.IncomingMessage`**: This object is a **readable stream** created either by **`http.Server`** or **`http.ClientRequest`**. Use it to access **status**, **headers**, and **data**.

- **`http.ServerResponse`**: This object is a stream created internally by the `HTTP Server`. This class defines what the **response** should look like, for example, the **type of headers** and the **response content**.

**Example web application:**

```js
const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('hello world');
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

```

1. **Create the server:** The `createServer()` method creates an instance of the `http.Server` class.
2. **Implement the callback:** The `createServer()` method expects a function known as a **`callback`**. When the callback is invoked, we supply the method with instances of the **`http.IncomingMessage`** and **`http.ServerResponse`** classes. In this example, we supply the **`req`** and **`res`** instances:
   - **Client request:** The **`req`** object investigates which **headers** and **data** were sent in the `client's request`.
   - **Server response:** The server constructs a response by telling the **`res`** object the **data** and **response headers** it should answer back with.
3. **Start listening to requests:** The **`listen()`** method is invoked with a **specified port**. After the call to the **`listen()`** method, the server is ready to **accept client requests**.

## Streams

[&#9650;](#build-a-web-api-with-nodejs-and-express)

- Streams aren't a `Node.js` concept, but rather an **operating system concept**. Data is sent, **chunk by chunk**, from **client to server** and from **server to client**. **`Streams`** make the server capable of handling many concurrent requests.

In our example, the **`req`** and **`res`** parameters are streams. Use the **`on()`** method to **listen** to incoming data from a client request like this:

```js
req.on('data', (chunk) => {
  console.log('You received a chunk of data', chunk)
})
```

Use the **`end()`** method for data sent back to the client in the res object response stream:

```js
res.end('some data')
```

## Express framework

[&#9650;](#build-a-web-api-with-nodejs-and-express)

- HTTP module in `Node.js` is adapted for small apps, for large projects, use **`Express framework`**
- **Good features:** Express has a set of features that makes you fast and productive.
- **Abstracts away complexity:** Express abstracts away complicated concepts like streams, for example, and makes the whole development experience a lot easier.
- **Solves common Web problems:** Express helps you with common problems such as route management, caching, and redirection.
- **Trusted by millions of developers:** According to GitHub, 6.8 million developers currently use Express for their web applications.

## Route management in Express

[&#9650;](#build-a-web-api-with-nodejs-and-express)

- The `Express` framework uses the **URL**, **route**, and **HTTP verbs** for route management.

- **HTTP verbs** like **`post`**, **`put`**, and **`get`** describe the **action** desired by the client. Each **HTTP verb** has a specific meaning for what should happen to the data. Express helps **register routes** and **pair** them to appropriate **HTTP verbs** to organize the web application.

- `Express` has **dedicated methods** for handling different **HTTP verbs**, and has a smart system to associate different routes with different pieces of your code. In the following example, Express helps you handle requests aimed toward a route with the address **`/products`** that is associated with the **HTTP verb** **`get`**:

```js
app.get('/products', (req, res) => {
  // handle the request
})
```

- Express sees **`get`** toward **`/products`** as different from **`post`** toward **`/products`**, as shown in this next code example:

```js
app.get('/products', (req, res) => {
  // handle the request
})

app.post('/products', (req, res) => {
  // handle the request
})
```

- The HTTP verb **`get`** means that a user wants **to read data**. The HTTP verb **`post`** means that they want **to write data**.

## Serve different content types

[&#9650;](#build-a-web-api-with-nodejs-and-express)

- The **`res`** object of `Express` comes with a set of **helper functions** to return different types of data. To return **plain text**, you would use the **`send()`** method like so:

```js
res.send('plain text')
```

- To return **JSON** in `Express`, use the **`json()`** method, like this:

```js
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify({ id: 1, name: "Catcher in the Rye" }))
```

- The **`Content-Type`** header in HTTP is **set** and the **`response`** is also **converted** from a `JavaScript` object to a `stringify` version before being returned back to the calling client.

Comparing the two code examples, you can see that Express saves a few lines of typing by using helper methods for common file types, like JSON and HTML.

## Exercise - Create a new Express web application

[&#9650;](#build-a-web-api-with-nodejs-and-express)

**`PS:`**  
Refer to the following folder for the exercise files:

> **exercise7_http**

### Create a basic web app with Express

**1 . Create** a **web app** Sub Folder

**2 . in a terminal** pointing to the folder, initialize the `Node.js` project

```text
npm init -y
```

**3 . Install** the `Express Framwork` (**Main App**)

```text
npm install express
```

**4 . Create** an **`app.js`** file under the webapp folder with the following code:

**`app.js`**

```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```

**5 . Run** the app through the terminal:

```text
node app.js
```

Output should be:

```text
Example app listening on port 3000!
```

**6 . In a browser**, go to [http://localhost:3000](http://localhost:3000). You should see the following output:

```text
Hello World!
```

**7 . In the terminal**, press **`Ctrl + C`** to **stop** the web Express program.

### Create a web app that returns JSON data

**1 . In the same** **`app.js`** file, add the following code:

```js
app.get("/products", (req,res) => {
  const products = [
  {
    id: 1,
    name: "hammer",
  },
  {
    id: 2,
    name: "screwdriver",
  },
  {
    id: 3,
    name: "wrench",
  },
 ];

 res.json(products);
});
```

The new full content should be:

**`app.js`**

```js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/products", (req,res) => {
   const products = [
     {
       id: 1,
       name: "hammer",
     },
     {
       id: 2,
       name: "screwdriver",
     },
     ,
     {
       id: 3,
       name: "wrench",
     },
   ];

  res.json(products);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```

**5 . run the** app through the terminal:

```text
node app.js
```

Output should be:

```text
Example app listening on port 3000!
```

6 . In a browser, go to [http://localhost:3000/products](http://localhost:3000/products). You should see the following output:

```text
[{"id":1,"name":"hammer"},{"id":2,"name":"screwdriver"},{"id":3,"name":"wrench"}]
```

7 . In the terminal, press **`Ctrl + C`** to **stop** the web Express program.

## Manage a request lifecycle with middleware

[&#9650;](#build-a-web-api-with-nodejs-and-express)

### Request steps

In some cases, when a **request** reaches a **web application**, you might need to verify that the user is **logged in** or that they're allowed to see the particular resource. The steps might look like this:

- **Pre request:** Investigate whether the user sent the **proper credentials** through a request header. If the credentials are **verified**, send the request to the **next step**.
- **Construct the response:** Talk to some kind of data source, like a **database** or an **endpoint**. This step returns the resource, as long as the request asks for the resource correctly.
- **Post request:** An optional step to run a piece of code after the request is handled. You might run this step for logging purposes.

To run a **`pre`** or **`post`** request, implement the **`use()`** method on your `Express` instantiated object. A **`pre`** or **`post`** request in Express is known as a **`middleware`**, and has the following syntax form:

```js
app.use((req, res, next) => {})
```

The method passed into the **`use()`** method has three parameters, **`req`**, **`res`**, and **`next`**. The parameters have the following meanings:

- **`req:`** The **incoming** request that contains **request headers** and the **calling URL**. It might also have a **body of data** if the client sent data with their request.
- **`res:`** A **response stream** to use for writing information, such as **headers** and **data** that you want to **send back** to the **calling client**.
- **`next:`** A **parameter** that signals the **request is OK** and is **ready** to be processed. If the **`next()`** parameter **isn't** called, processing of the request **stops**. Also, it's good practice to tell the client why the request isn't processed, such as call:

```js
res.send('\<specify a reason why the request is stopped>'\).
```

### Request pipeline

If you have **`routes`** that could benefit from having **`middleware`** run **`pre`** or **`post`** a request, set it up so that:

- **`Middleware`** that needs to run before the request **`(pre request)`** is defined **before** the actual request.
- **`Middleware`** that needs to run after the request **`(post request)`** is defined **after** the actual request.

```js
app.use((req, res, next) => {
  // Pre request
})
app.get('/protected-resource', () => {
  // Handle the actual request
})

app.use((req, res, next) => {
  // Post request
})
app.get('/login', () => {})
```

You can also run pre request middleware code as an argument to the request handling, like this:

```js
app.get(
  '/<some route>',
 () => {
   // Pre request middleware
 }, () => {
   // Handle the actual request
 })
```

## Exercise - Manage request lifecycle

[&#9650;](#build-a-web-api-with-nodejs-and-express)

### Add basic authorization to an Express framework

**`PS:`**  
Refer to the following folder for the exercise files:

> **exercise8_http_middlware**

- Most applications have parts that **anyone can access**. But, some parts need to be **protected**. There are different ways to protect an application. In this exercise, you'll implement a **simple protection** system to understand how the **mechanism of middleware** works in the `Express` framework.

**1 . Create an app.js** file with the following code:

**`app.js`**

```js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/users", (req, res) => {
  res.json([
    {
      id: 1,
      name: "User Userson",
    },
  ]);
});

app.get("/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "The Bluest Eye",
    },
  ]);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```

- The code contains a functioning **`Express application`** with **three routes**: `slash /`, `/users`, and `/products`.

**2 . Create an client.js** file with the following code:

**`client.js`**

```js
const http = require("http");

http.get(
  {
    port: 3000,
    hostname: "localhost",
    path: "/users",
    headers: {},
  },
  (res) => {
    console.log("connected");
    res.on("data", (chunk) => {
      console.log("chunk", "" + chunk);
    });
    res.on("end", () => {
      console.log("No more data");
    });
    res.on("close", () => {
      console.log("Closing connection");
    });
  }
);

```

- The `client application` code connects to the address [http://localhost:3000/users](http://localhost:3000/users) for the **`/users`** **route**. The client listens for three events: **data**, **end**, and **close**.

**3 . Run** the `server app` in a terminal

```text
node app.js
```

**4 . Run** the `client application` in a second terminal

```text
node client.js
```

**Output of the client app terminal:**

```text
connected
chunk [{"id":1,"name":"User Userson"}]
No more data
Closing connection
```

- The Express program responds with some **user data**, chunk `[{"id":1,"name":"User Userson"}]`. All the parts of the application **work**.

The client program ends after it displays the output.

**5 . In the first** terminal, press **`Ctrl + C`** to stop the program.

### Protect the route

- To protect this `route`, we'll add some code to the Express application.

**1. Create** a copy of the **`app.js`** file called **`app_V2.js`**, and In the code of the **`app_V2.js`** file. Locate the `const app = express()` statement.

- After this statement, add the following code:

```js
function isAuthorized(req, res, next) {
  const auth = req.headers.authorization;
  if (auth === 'secretpassword') {
    next();
  } else {
    res.status(401);
    res.send('Not permitted');
  }
}
```

**2. Next**, locate the following section of code in the same file:

```js
app.get("/users", (req, res) => {
  res.json([
    {
      id: 1,
      name: "User Userson",
    },
  ]);
});
```

Replace this section with the following code:

```js
app.get("/users", isAuthorized, (req, res) => {
  res.json([
    {
      id: 1,
      name: "User Userson",
    },
  ]);
});
```

- In the updated code, the **`isAuthorized`** **middleware** is added as the second argument.

**3 . Run** the Express server program

```text
node app_V2.js
```

**4 . In the second** terminal, start client application:

```text
node client.js
```

In the second terminal, you should see the following output:

**Output:**

```text
connected
chunk Not permitted
No more data
Closing connection
```

- The **`isAuthorized()`** **middleware** is invoked and looks for an **authorization header** that has a specific value. Because you didn't provide a specific value as part of your request, the code **didn't respond** with specific user data. **Instead**, the response was **`chunk Not permitted`**.

**5 . In the** first terminal, press **`Ctrl + C`** to stop the program.

### Add authorization header

You need to add an authorization header for a specific value.

**1. Create** a copy of the **`client.js`** file called **`client_V2.js`**, and In the code of the **`app_V2.js`** file. Locate the `headers: {},` statement.

- Replace this statement, with the following code:

```js
headers: {
  authorization: 'secretpassword'
},
```

**2 . In a first** terminal, run the Express program:

```text
node app_V2.js
```

**3 . In the second** terminal, run the following command to run the clientV2 again:

```text
node client_V2.js
```

In the second terminal, you should now see the following output:

**Output:**

```text
connected
chunk [{"id":1,"name":"User Userson"}]
No more data
Closing connection
```

- The user **data is returned** because you passed an **authorization header** with an accepted value.

**4 . In the first** terminal, press **`Ctrl + C`** to stop the program.

**`Caution:`**
Be aware that an **authentication/authorization** meant for **real world** use needs to be a bit more **robust** than our example. It's worth looking up concepts such as **`OAuth`**, **`JSON Web Tokens`**, **`JWT`** and the **`library bcrypt`** to make sure your app has a **decent level of protection**.
