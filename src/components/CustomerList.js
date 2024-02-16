import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row , Col , Card , Button } from "react-bootstrap";

function CustomerList() {
  const [CustData, setCustData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getallCust")
      .then((result) => {
        console.log("CUSTOMER",result.data);
        setCustData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Container>
        <Row>
          {CustData.map((Customer) => {
            return (
              <Col sm={12} md={6} lg={4}>
                <Card>
                  <Card.Body>
                    <h4>{Customer.CustFirstName}</h4>
                    <h4>{Customer.CustLastName}</h4>
                    <h4>{Customer.CustAdd}</h4>
                    <h4>{Customer.CustMobNo}</h4>
                    <h4>{Customer.CustEmail}</h4>
                    <h4>{Customer.CustPassword}</h4>
                  </Card.Body>
                </Card>
                <Card.Footer>
                  <Row>
                    <Button>Update</Button>
                  </Row>
                  </Card.Footer>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default CustomerList;
