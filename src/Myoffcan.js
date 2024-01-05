import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Navbar, Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

const Myoffcan = () => {
  const [show, setshow] = useState(false);

  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);
  return (
    <div>
      <Navbar>
        <FaBars
          className="nav-ic"
          onClick={handleShow}
          size={20}
          color="black"
        />
        <Navbar.Brand>Food-Admin</Navbar.Brand>
      </Navbar>
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link>
              <Link to="/home">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/dashboard">Dash-Board</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/addfood">Add Food</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/allfoods">All Foods</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/order">Orders</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/customerlist">Customer List</Link>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Myoffcan;
