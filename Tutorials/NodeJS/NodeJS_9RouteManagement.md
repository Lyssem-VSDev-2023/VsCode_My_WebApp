# **Route management in Node.js**

- [**Route management in Node.js**](#route-management-in-nodejs)
  - [URL](#url)
    - [Scheme](#scheme)
    - [Authority](#authority)
    - [Path](#path)
    - [Query](#query)
    - [Fragment](#fragment)
  - [Route](#route)
    - [Route parameter](#route-parameter)
    - [Query parameter](#query-parameter)
  - [General pattern management](#general-pattern-management)
  - [HTTP verb](#http-verb)
  - [Exercise - Route and query parameters](#exercise---route-and-query-parameters)
    - [Implement a route to return a single product](#implement-a-route-to-return-a-single-product)
    - [Implement a route to return all products](#implement-a-route-to-return-all-products)
  - [Read and write](#read-and-write)
    - [Configure your app to receive data](#configure-your-app-to-receive-data)
    - [Handle the request data](#handle-the-request-data)
  - [Exercise - Read and write](#exercise---read-and-write)
    - [Implement reading from the API (`get`)](#implement-reading-from-the-api-get)
    - [Implement writing (`post`)](#implement-writing-post)
    - [Implement update data (`put`)](#implement-update-data-put)
    - [Implement deleting (`delete`)](#implement-deleting-delete)
    - [Implement `CRUD`](#implement-crud)

---

- An application has various **resources**, like **products** or **orders**. Divide your application into **sections** for the resources. Using sections helps you maintain and extend the app.

- An easy way to extend a web app is to make sure that **resources are accessible** through **dedicated URLs**. Two URLs trigger two different parts of code in your web app.

## URL

[&#9650;](#route-management-in-nodejs)

A URL is an **address** that a user enters into a client, like a browser, to **locate** a specific **server** and a specific **resource**. Knowing how the URL works helps you organize your app around it.

```text
http://localhost:8000/products/1?page=1&pageSize=20
```

The URL conforms to a syntax that looks like this:

```text
scheme:[//authority]path[?query][#fragment]
```

### Scheme

- The **scheme part** of a **URL** indicates the **protocol**. In the preceding example of a typical URL, the scheme is **`http`**. Other examples of schemes are **`https`**, **`ftp`**, **`irc`**, and **`file`**.

### Authority

- The authority consists of **optional user info** (username@password) and a **host**. In the example **URL**, **`localhost`** is the host part and points to your own machine as the web server. On the web, the host part is usually a domain name, like `google` or `microsoft`.

- The **host** is a friendly name that you specify instead of an **`IP address`**. The IP address is the **actual web address**. It's a series of numbers, such as **`127.0.0.1`**. An IP address makes it easy for routers to route requests from one part of the web to another. However, it's not human friendly. **Hosts and domain** names exist so that we can **remember** them.

### Path

- The **`path`** portion of the **URL** consists of zero to many **segments**. Each segment is separated by a **`slash (/)`**. In the example URL, the only segment is **`/products`**. A segment filters down the exact resources you're interested in.

### Query

- A **query** is an optional part of the URL that's defined after the **`question mark (?)`** character. It consists of **query parameter/value** **pairs** delimited by either an **`ampersand (&)`** or a **`semicolon (;)`**. It **filters** data further by asking for many records from a specific page.

- The **query** in the example URL is **`?page=1&pageSize=20`**. Imagine that you have 2 million records on a resource. It would take a long time to return all those records. If you specify that you want 20 records, the data returns quickly and is small in size.

### Fragment

- The fragment part of the URL helps you be even more specific. For example, a fragment can sort the data that you ask for in a particular order.

## Route

[&#9650;](#route-management-in-nodejs)

A route is a **subsection** of a URL that usually **points** to a specific **resource**. `Express` handles the following concepts for routes that help you be more intentional.

### Route parameter

- A route parameter in a URL signals that you want to access a **specific resource** from a collection.

- Look at the route **`/orders/1/items/2`**. The route parameters are **`1`** and **`2`**. The **`1`** signals that you want a **specific order** with the unique key **`1`**. The **`2`** asks for a **specific order item** with the unique key **`2`**. These route parameters return a **specific resource** rather than all resources of a specific type.

- `Express` defines routes and **associates** different **handlers** with them. **Handlers** are code that's **invoked** when a **certain path is matched**. `Express` has a **pattern-handling** mechanism to manage different-**looking routes**. The following table shows different routes expressed as route patterns.

|Route|Express route pattern|
|-|-|
|/products|products/|
|/products/1 and products/114|products/:id|
|/orders/1/items/2|orders/:orderId/items/:itemId|
|xyz|**|

- Write code to match the table for **`/products/114`**, like this:

```js
app.get('/products/:id', (req, res) => {
  // handle this request `req.params.id`
})
```

- Route **parameters** are written to a **`params`** property on the **`req`** request object.
- A request of **`/products/114`** would have **`req.params.id`** that contains **`114`**.

### Query parameter

- The **query** part of the URL is a set of **key/value pairs** that exist after the **`?`** character.

- The route example, **`/products?page=1&pageSize=20`**, shows the query parameters **`page`** and **`pageSize`**. These two parameters work in tandem to help you filter down the size of a returned response.

- Imagine if the route **`/products`** returned 2 million records from a database. That response would be huge, and it would take a long time to appear. That time creates a poor user experience and a strain on the app. A better approach is to use query parameters to limit the size of the response.

- `Express` has an easy way of handling **query parameters**. Given the route **`/products?page=1&pageSize=20`**, the query parameters are written to a query object on the **`res`** request object, like the following example:

```js
app.get('/products', (req, res) => {
  // handle this request `req.query.page` and `req.query.pageSize`
})
```

- To create a request with the route `/products?page=1&pageSize=20`, **`req.query`** has the following **value**:

```json
{
  page: 1,
  pageSize: 20
}
```

## General pattern management

[&#9650;](#route-management-in-nodejs)

- So far, you've seen simple routes like `/products` and `/orders/1/items/2`. There are other patterns, like **`**`**, which can mean **catch-all**. You would normally define such a route to make sure that **unexpected requests**, like typos, are handled in a graceful way. This route helps provide a good user experience.

## HTTP verb

[&#9650;](#route-management-in-nodejs)

An **`HTTP verb`** expresses the what. `HTTP verbs` like **`get`** and **`post`** represent different intentions. By using the verb **`get`**, you're saying that you want to **read data** from the resource. The verb **`post`** means that you want to **write data** toward the resource.

`Express` has specific methods that let you associate code with a specific URL fragment and `HTTP verb`.

## Exercise - Route and query parameters

[&#9650;](#route-management-in-nodejs)

**`PS:`**  
Refer to the following folder for the exercise files:

> **exercise9_http_route**

1. create and **`app.js`** with the following code:

**`app.js`**

```js
const express = require('express')
const app = express()
const port = 3000

const products = [
{
  id: 1,
  name: "Ivanhoe",
  author: "Sir Walter Scott",
},
{
  id: 2,
  name: "Colour Magic",
  author: "Terry Pratchett",
},
{
  id: 3,
  name: "The Bluest eye",
  author: "Toni Morrison",
},
];

app.get('/', (req, res) => res.send('Hello API!'))

app.get("/products/:id", (req, res) => {
  res.json(products.find(p => p.id === +req.params.id));
});

app.get('/products', (req, res) => {})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

### Implement a route to return a single product

**1. locate** the following code:

```js
app.get("/products/:id", (req, res) => {});
```

**2. Replace** it with this code:

```js
app.get("/products/:id", (req, res) => {
  res.json(products.find(p => p.id === +req.params.id));
});
```

**3. Run the Server** through the app.js with the follwoing:

```text
node app.js
```

**4. Open** a browser on this adress

```text
http://localhost:3000/products/1
```

The following result should appear

```json
{
  "id": 1,
  "name": "Ivanhoe",
  "author": "Sir Walter Scott"
}
```

### Implement a route to return all products

**1. locate** the following code:

```js
app.get('/products', (req, res) => {})
```

**2. Replace** it with this code:

```js
app.get('/products', (req, res) => {
  const page = +req.query.page;
  const pageSize = +req.query.pageSize;

  if (page && pageSize) {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    res.json(products.slice(start, end));
  } else {
    res.json(products);
  }
})
```

**3. Run the Server** through the app.js with the follwoing:

```text
node app.js
```

**4. Open** a browser on this address

```text
http://localhost:3000/products?page=1&pageSize=2
```

The following result should appear

```json
[{
  "id": 1,
  "name": "Ivanhoe",
  "author": "Sir Walter Scott"
},
{
  "id": 2,
  "name": "Colour Magic",
  "author": "Terry Pratchett"
}]
```

- The response shows the **first two** of three records. This response means that the query parameters, `page` and `pageSize`, filtered down the response size.

**5. Change** the address to:

```text
http://localhost:3000/products?page=2&pageSize=2
```

The following result should appear

```json
[{
  "id": 3,
  "name": "The Bluest eye",
  "author": "Toni Morrison"
}]
```

- The response shows the **3rd pending** record.

## Read and write

[&#9650;](#route-management-in-nodejs)

- So far, you've seen examples of **requests** made toward a **web application** when the **client** wants to *read data*. However, you likely want to **write data** too.

- To **write data**, use an **`HTTP verb`** that matches your intention. Because incoming data can have various forms, configure your `Express` application to match **how the data arrives** to your app:

  ```js
  app.get('/<path>', (req, res) => {
    // handling the request
  })
  ```

### Configure your app to receive data

- To handle a client **sending data** to the web application, configure `Express` differently **depending** on the **format** of the incoming data. For example, data might be in **`HTML`** or **`JSON`** format. These are common steps, regardless of the data format.

  >**`Note:`**
  >Data is sent through the body of the request.

- **Import a body parser**. You need to **convert** the **incoming data** into a format that's **readable**. Import the `body-parser` library that's installed with `Express`:

  ```js
  let bodyParser = require('body-parser');
  ```

- **Configure data type**. Configure `Express` to parse the incoming **body data** into the intended **format**. The following code converts the data to JSON:

  ```js
  app.use(bodyParser.json({ extended: false }));
  ```

- The **data** that a **client sends** is now available on the **`body`** property on the **`req`** request object. You can now **read** this data and talk to a data source. You can then either **create a resource** from that data or **update a resource**, depending on whether the request uses a **`POST`** or a **`PUT`** verb.

### Handle the request data

- To **handle** an incoming request, use either the **`post()`** or the **`put()`** method on the Express instance. Both methods work, but **`post()`** tells `Express` that you want to **create a resource**. The **`put()`** method is used to convey that a resource should be **updated** using the incoming data. Here's an example:

```js
app.post('/<path>', (req, res) => {
  console.log('req.body', req.body) // contains incoming data
})
```

## Exercise - Read and write

[&#9650;](#route-management-in-nodejs)

**`PS:`**  
Refer to the following folder for the exercise files:

> **exercise10_http_read_write**

**Open** the `app.js` to inspect it. It contains the skeleton of the program

```js
const express = require('express')
const app = express()
const port = 3000

let bodyParser = require('body-parser');
app.use(bodyParser.json());

let products = [];

app.post('/products', function(req, res) {
  // implement
});

app.put('/products', function(req, res) {
  // implement
});

app.delete('/products/:id', function(req, res) {
  // implement
});

app.get('/products', (req, res) => {
  // implement
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```

### Implement reading from the API (`get`)

**1. Replace** the following code:

```js
app.get('/products', (req, res) => {
  // implement
})
```

with

```js
app.get('/products', (req, res) => {
  res.json(products);
})
```

**2. Test** the function by launching the Web app:

```text
node app.js
```

Then in a seperate Terminal, execute the `client-get.js`

```text
node client-get.js
```

You should get the following output:

```text
Received data []
Connection closed
```

### Implement writing (`post`)

**1. Replace** the following code:

```js
app.post('/products', function(req, res) {
  // implement
});
```

with

```js
app.post('/products', function(req, res) {
  const newProduct = { ...req.body, id: products.length + 1 }
  products = [ ...products, newProduct]
  res.json(newProduct);
});
```

The new code **reads** incoming data from **`req.body`** and constructs a JavaScript object from it. **Next**, it's added to the **`products`** array. **Finally**, the new **`product`** is returned to the user.

**2. Test** the function by launching the Web app:

```text
node app.js
```

Then in a seperate Terminal, execute the `client-post.js`

```text
node client-post.js
```

You should get the following output:

```text
response {"name":"product","id":1}
Closed connection
```

**3. To check** the data written to the API, in the second terminal:

```text
node client-get.js
```

You should get the following output:

```text
response {"name":"product","id":1}
Closed connection
```

### Implement update data (`put`)

**1. Replace** the following code:

```js
app.put('/products', function(req, res) {});
```

with

```js
app.put('/products', function(req, res) {
  let updatedProduct;
  products = products.map(p => {
    if (p.id === req.body.id) {
      updatedProduct = { ...p, ...req.body };
      return updatedProduct;
    }
    return p;
  })
  res.json(updatedProduct);
});
```

The new code **locates** the record in the **`products`** array that matches the **`id`** property, and it **updates** that record.

**2. Test** the function by launching the Web app:

```text
node app.js
```

Then in a seperate Terminal, execute the `client-post.js`

```text
node client-post.js
```

Then update the posted record, execute the `client-put.js`

```text
node client-put.js
```

You should get the following output:

```text
response {"name":"product","id":1}
Closed connection
```

**3. To check** the updated data in the API, in the second terminal:

```text
node client-get.js
```

You should get the following output:

```text
response {"name":"product-updated","id":1}
Closed connection
```

### Implement deleting (`delete`)

**1. Replace** the following code:

```js
app.delete('/products/:id', function(req, res) {});
```

with

```js
app.delete('/products/:id', function(req, res) {
  const deletedProduct = products.find(p => p.id === +req.params.id);
  products = products.filter(p => p.id !== +req.params.id);
  res.json(deletedProduct);
});
```

The new code finds the **`product`** item to be **deleted**. Then it **filters out** that item from the **`products`** array and responds with a filtered version of products.

**2. Test** the function by launching the Web app:

```text
node app.js
```

Then in a seperate Terminal, execute the `client-post.js`

```text
node client-post.js
```

Then delete the posted record, execute the `client-delete.js`

```text
node client-delete.js
```

You should get the following output:

```text
response {"name":"product","id":1}
Closed connection
```

**3. To check** the deleted record in the API, in the second terminal:

```text
node client-get.js
```

You should get the following output:

```text
Received data []
Connection closed
```

### Implement `CRUD`

Implementing **`CRUD`** for a resource is a common task. `Express` has a **`route()`** method just for this purpose. When you use the **`route()`** method, your code is **grouped** so that it's easier to read.

To implement **`CRUD`**, replace the code in **`app.js`** with this code:

```js
const express = require('express')
const app = express()
const port = 3000

let bodyParser = require('body-parser');
app.use(bodyParser.json());

let products = [];

app.route('/products')
 .get((req, res) => {
   res.json(products);
 })
 .post((req, res) => {
   const newProduct = { ...req.body, id: products.length + 1 }
   products = [...products, newProduct]
   res.json(newProduct);
 })
.put((req, res) => {
   let updatedProduct;
   products = products.map(p => {
     if (p.id === req.body.id) {
       updatedProduct = { ...p, ...req.body };
       return updatedProduct;
     }
     return p;
   })
   res.json(updatedProduct);
 })
 .delete((req, res) => {
   const deletedProduct = products.find(p => p.id === +req.body.id);
   products = products.filter(p => p.id !== +req.body.id);
   res.json(deletedProduct);
 })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

To delete a record in the CRUD implementation, use the **`client-delete-route.js`**

```text
node client-delete-route.js
```
