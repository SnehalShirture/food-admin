import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Orders() {
  const [orderData, setOrderData] = useState([]);
  const navi = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getallOrder")
      .then((result) => {
        setOrderData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Container>
        <Row>
          {orderData.map((order) => {
            return (
              <Col sm={12} md={6} lg={3}>
                <Card>
                  {/* <Card.Img
                    className="crd-image"
                    src={`http://localhost:5000${food.foodimg}`}
                  ></Card.Img> */}
                  <div className="content">
                    <Card.Title>{order.OrderTotal}</Card.Title>
                    <Card.Text>{order.OrderSize}</Card.Text>
                    <Card.Text>{order.OrderStatus}</Card.Text>
                    <Card.Text>{order.OrderDate}</Card.Text>
                  </div>

                  <Card.Footer>
                    <Button onClick={() => navi(`/orderdetails/${order._id}`)}>
                      Details
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Orders;
