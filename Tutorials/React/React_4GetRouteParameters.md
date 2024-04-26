# React Router: Get the current route

- [React Router: Get the current route](#react-router-get-the-current-route)
  - [Accessing current route](#accessing-current-route)
  - [Accessing the Query parameters](#accessing-the-query-parameters)
  - [Accessing the URL parameters](#accessing-the-url-parameters)
  - [Complete code](#complete-code)

**`index.js`**

```jsx
import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
```

**`App.js`**

```jsx

import { Link, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="search?term=phones">Search</Link>
          </li>
          <li>
            <Link to="order/12345">Order Details</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="search" element={<Search />}></Route>
        <Route path="order/:orderId" element={<OrderDetails />}></Route>
      </Routes>
    </div>
  )
}

function Home() {
  return <div>Home</div>
}

function Dashboard() {
  return <div>Dashboard</div>
}

function Search() {
  return <div>Search</div>
}

function OrderDetails() {
  return <div>Order Details</div>
}

export default App
```

## Accessing current route

```js
function Dashboard() {
  const location = useLocation()
  return <div>Location: {location.pathname}</div> // 👉 Location: /dashboard
}
```

## Accessing the Query parameters

```js
function useQuery() {
  // Use the URLSearchParams API to extract the query parameters
  // useLocation().search will have the query parameters eg: ?foo=bar&a=b
  return new URLSearchParams(useLocation().search)
}

function Search() {
  const query = useQuery()
  const term = query.get("term")

  return <div>Search term: {term}</div> // 👉 Search term: phones
}

```

## Accessing the URL parameters

```js
<Route path="order/:orderId" element={<OrderDetails />}></Route>
```

```js
// path /order/12345

function OrderDetails() {
  const { orderId } = useParams()
  return <div>Order Details: {orderId}</div> // 👉 Order Details: 12345
}
```

## Complete code

```js
import { Routes, Route, Link, useParams, useLocation } from "react-router-dom"

function App() {
  return (
    <div className="App">
      {" "}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="search?term=phones">Search</Link>
          </li>
          <li>
            <Link to="order/12345">Order Details</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="search" element={<Search />}></Route>
        <Route path="order/:orderId" element={<OrderDetails />}></Route>
      </Routes>
    </div>
  )
}

function Home() {
  return <div>Home</div>
}

function Dashboard() {
  const location = useLocation()

  return <div>Location: {location.pathname}</div>
}

function useQuery() {
  // Use the URLSearchParams API to extract the query parameters
  // useLocation().search will have the query parameters eg: ?foo=bar&a=b
  return new URLSearchParams(useLocation().search)
}

function Search() {
  const query = useQuery()
  const term = query.get("term")

  return <div>Search term: {term}</div>
}

function OrderDetails() {
  const { orderId } = useParams()
  return <div>Order Details: {orderId}</div>
}

export default App
```