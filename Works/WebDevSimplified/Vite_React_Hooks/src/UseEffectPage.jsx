import React, { useState, useEffect } from "react";
import Back from "./Back";
import { result } from "lodash";

function UseEffectPage() {
  /****************************** Execute at every render ********************************/

  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    console.log("rendered");
  });
  /****************************** Execute at specific resource change ********************************/

  const [resourceType2, setResourceType2] = useState("posts");

  useEffect(() => {
    console.log("rendered");
  }, [resourceType2]);

  /****************************** Example of Cleanup (return) ********************************/

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // return (
    //   window.removeEventListener('resize', handleResize)
    // )
  }, []);

  /****************************** Execute at specific resource change ********************************/

  const [resourceType3, setResourceType3] = useState("posts");
  //Fake JSON Data API
  //https://jsonplaceholder.typicode.com/guide/

  const [items, setItems] = useState([]);
  let resURL = `https://jsonplaceholder.typicode.com/${resourceType3}`;

  useEffect(() => {
    fetch(resURL)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType3]);

  console.log(items);

  /**************************************************************/

  return (
    <>
      <Back></Back>
      Execute at every render
      <div>
        <button
          className="secondary bg-dark text-light me-2 p-2"
          onClick={() => setResourceType("posts")}
        >
          Posts
        </button>
        <button
          className="secondary bg-dark text-light me-2 p-2"
          onClick={() => setResourceType("users")}
        >
          Users
        </button>
        <button
          className="secondary bg-dark text-light me-2 p-2"
          onClick={() => setResourceType("comments")}
        >
          Comments
        </button>
      </div>
      <h1>{resourceType}</h1>
      <br />
      <br />
      <hr></hr>
      Execute at specific resource change
      <div>
        <button
          className="secondary bg-dark text-light me-2 p-2"
          onClick={() => setResourceType2("posts")}
        >
          Posts
        </button>
        <button
          className="secondary bg-dark text-light me-2 p-2"
          onClick={() => setResourceType2("users")}
        >
          Users
        </button>
        <button
          className="secondary bg-dark text-light me-2 p-2"
          onClick={() => setResourceType2("comments")}
        >
          Comments
        </button>
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
        <button
          className="secondary bg-dark text-light me-2 p-2"
          onClick={() => setResourceType3("posts")}
        >
          Posts
        </button>
        <button
          className="secondary bg-dark text-light me-2 p-2"
          onClick={() => setResourceType3("users")}
        >
          Users
        </button>
        <button
          className="secondary bg-dark text-light me-2 p-2"
          onClick={() => setResourceType3("comments")}
        >
          Comments
        </button>
      </div>
      <h1>{resourceType3}</h1>
      {items.map((it, index) => {
        const i = it.body;
        return <pre key={index}>{i}</pre>;
      })}
    </>
  );
}

export default UseEffectPage;
