import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavbarData } from "./NavbarData";
import { useNavigate } from "react-router-dom";

function NavBarMenu() {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" data-bs-theme="dark" className="fixed-top">
      <Container fluid>
        <Navbar.Brand href="/" className="fs-3">
          My Web App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto ps-5 ms-4 my-4 my-lg-0 fs-6 fw-medium"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {NavbarData.map((item, index) => {
              return !item.subNav ? (
                <Nav.Link key={index} onClick={() => navigate(item.path)}>
                  {item.title}
                </Nav.Link>
              ) : (
                <NavDropdown
                  key={index}
                  title={item.title}
                  id="navbarScrollingDropdown"
                >
                  {item.subNav.map((subItem, subIndex) => {
                    return subItem.divider ? (
                      <NavDropdown.Divider />
                    ) : (
                      <NavDropdown.Item
                        key={subIndex}
                        onClick={() => navigate(subItem.path)}
                        className="fs-6 fw-medium"
                      >
                        {subItem.icon}
                        {subItem.title}
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown>
              );
            })}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarMenu;
