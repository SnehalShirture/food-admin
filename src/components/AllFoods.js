import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function AllFoods() {
  const [foodData, setfoodData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getallfood")
      .then((result) => {
        console.log("FOODS", result.data);
        setfoodData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Container>
        <Row>
          {foodData.map((food) => {
            return (
              <Col sm={12} md={6} lg={4}>
                <Card>
                  <Card.Img
                    className="crd-image"
                    src={`http://localhost:5000${food.foodimg}`}
                  ></Card.Img>
                  <Card.Title>{food.foodname}</Card.Title>
                  <Card.Text>{food.foodcategory}</Card.Text>
                  <Card.Text>{food.foodtype}</Card.Text>
                  <Card.Text>{food.foodprice}</Card.Text>

                  <Card.Footer>
                    <Button>Update</Button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default AllFoods;
