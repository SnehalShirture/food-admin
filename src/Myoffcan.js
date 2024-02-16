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
        <Navbar.Brand>Cafe-Minions</Navbar.Brand>
      </Navbar>
      <Offcanvas
        placement="end"
        show={show}
        onHide={handleClose}
        style={{ backgroundColor: "#2c3e50", color: "#ffffff" }}
        onClick={() => handleClose()}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ colorText: "red" }}>
            Offcanvas
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link onClick={() => handleClose()}>
              <Link to="/home">Home</Link>
            </Nav.Link>
            <br />
            <br />
            <Nav.Link onClick={() => handleClose()}>
              <Link to="/dashboard">Dash-Board</Link>
            </Nav.Link>
            <br />
            <br />
            <Nav.Link onClick={() => handleClose()}>
              <Link to="/addfood">Add Food</Link>
            </Nav.Link>
            <br />
            <br />
            <Nav.Link onClick={() => handleClose()}>
              <Link to="/allfoods">All Foods</Link>
            </Nav.Link>
            <br />
            <br />
            <Nav.Link onClick={() => handleClose()}>
              <Link to="/order">Orders</Link>
            </Nav.Link>
            <br />
            <br />
            <Nav.Link onClick={() => handleClose()}>
              <Link to="/customerlist">Customer List</Link>
            </Nav.Link>
            <br />
            <br />
            <Nav.Link onClick={() => handleClose()}>
              <Link to="/orderdetails">Order Details</Link>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Myoffcan;
