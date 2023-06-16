import React, { useState, useEffect } from "react";
import Back from "./Back";

function UseEffectPage() {
  /****************************** Execute at every render ********************************/

  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    console.log("rendered");
  });
  /****************************** Execute at specific resource change ********************************/

  const [resourceType2, setResourceType2] = useState("posts");
  const [items, setItems] = useState([])

  useEffect(() => {
    console.log("rendered");
  }, [resourceType2]);

  /****************************** Example of Cleanup (return) ********************************/

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    // return (
    //   window.removeEventListener('resize', handleResize)
    // )

  }, []);

  /****************************** Execute at specific resource change ********************************/

  const [resourceType3, setResourceType3] = useState("posts");
  //Fake JSON Data API
  //https://jsonplaceholder.typicode.com/guide/

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType3}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType3]);

  /**************************************************************/

  return (
    <>
      <Back></Back>
      Execute at every render
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      <br />
      <br />
      <hr></hr>
      Execute at specific resource change
      <div>
        <button onClick={() => setResourceType2("posts")}>Posts</button>
        <button onClick={() => setResourceType2("users")}>Users</button>
        <button onClick={() => setResourceType2("comments")}>Comments</button>
      </div>
      <h1>{resourceType2}</h1>
      <br />
      <br />
      <hr></hr>
      Example of creating and cleaning event listeners
      <div>
        <b>Resize to see the effect : {windowWidth}</b>
      </div>
      <br />
      <br />
      <hr></hr>
      Example of specific resource change with fetch API
      <div>
        <button onClick={() => setResourceType3("posts")}>Posts</button>
        <button onClick={() => setResourceType3("users")}>Users</button>
        <button onClick={() => setResourceType3("comments")}>Comments</button>
      </div>
      <h1>{resourceType3}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  );
}

export default UseEffectPage;
