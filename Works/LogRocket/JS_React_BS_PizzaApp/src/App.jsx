import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pizzas from "./data";
import PizzaCard from "./Components/PizzaCard";
import Confirmation from "./Components/Confirmation";
import { useState } from "react";

function App() {
  const [ordered, setOrdered] = useState(false);

  function displayConfirmation() {
    setOrdered(true);
    setTimeout(() => {
      setOrdered(false);
    }, 3000);
  }

  return (
    <>
      <Container>
        {ordered && <Confirmation toggle={setOrdered}></Confirmation>}
        <Row>
          {pizzas.map((data) => (
            <Col xs={3} className="mb-5" key={`${data.index}`}>
              <PizzaCard
                data={data}
                setOrdered={displayConfirmation}
              ></PizzaCard>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
