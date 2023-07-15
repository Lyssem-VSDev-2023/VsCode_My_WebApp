import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBarMenu from "./Components/NavBar/NavBarMenu";
import Sidebar from "./Components/Sidebar";
import styled from "styled-components";

const ColContent = styled(Col)`
  position: fixed;
  top: 85px;
  left: 268px;
  // background-color: red;
`;

const FooterContainer = styled.div`
  position: fixed;
  height: 50px;
  bottom: 0;
  left: 250px;
  width: 100%;
  padding-right: 370px;
  padding-top: 10px;
  background-color: #edeaea;
`;

const Layout = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <NavBarMenu></NavBarMenu>
          </Col>
        </Row>
        <Row className="d-flex flex-column ">
          <Col>
            <Sidebar></Sidebar>
          </Col>

          <ColContent className="align-items-start">
            <Outlet></Outlet>

            <FooterContainer className="text-center">
              2023 - Learning Web App of Lyes
            </FooterContainer>
          </ColContent>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
