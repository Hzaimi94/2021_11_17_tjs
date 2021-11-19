import React from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.scss";
import { Navbar as NavBar, Nav, Container } from "react-bootstrap";
// Où le charger dans index.html
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { LinkContainer } from "react-router-bootstrap";

const Navbar = () => (
  <div className={styles.Navbar} data-testid="Navbar">
    <NavBar bg="primary" variant="dark">
      <Container>
        <NavBar.Brand href="/">Navbar</NavBar.Brand>
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/thumbnail">
            <Nav.Link>Thumbnail</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/edit">
            <Nav.Link>Edit</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </NavBar>
  </div>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
