import React, { useState } from "react";
import ListRendering from "./UI/ListRendering/ListRendering";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Back from "./Back";

function Home() {
  const [item, setItem] = useState(0);

  return (
    <>
      <Button onClick={() => setItem(1)}>List Rendering</Button>
      <div>
        {(() => {
          switch (item) {
            case 1:
              return (
                <>
                  <Back></Back>
                  <ListRendering></ListRendering>
                </>
              );
            default:
              return null;
          }
        })()}
      </div>
    </>
  );

  // return (

  //   <div>
  //     <br />
  //     <Button onClick={() => handleClick(1)}>List Rendering</Button>
  //     <br />
  //     <br />
  //     <b>Most Used</b>
  //     <ListRendering></ListRendering>
  //   </div>
  // );
}

export default Home;
