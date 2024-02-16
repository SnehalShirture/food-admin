import axios from "axios";
import React, {  useEffect, useState } from "react";
import { Button, Container,Form, Row,Card,Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

function OrderDetails() {
  const { orderid } = useParams();
  const [orderData, setOrderData] = useState({});
  const [orderStatus,setOrderStatus]=useState("")

 useEffect(()=>{
    const orddata ={
        orderid:orderid
    }
    axios
    .post("http://localhost:5000/api/getorderById", orddata)
    .then((result) => {
      setOrderData(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
},{})

const updateOrderStatus = ()=>{
    const UpdateOrderStatus={
        oid:orderid,
        OrderStatus:orderStatus
    }
    axios
    .post("http://localhost:5000/api/updateOrderStatus", UpdateOrderStatus)
    .then((result) => {
      console.log('Data',result)
      window.location.reload(false)
    })
    .catch((err) => {
      console.log(err);
    });
    
}

   

  return (
    <div>
      OrderDetails
      <h3>{orderid}</h3>
      <Container>
        <Row>
        <h3>
            <b>Customer Details</b>
          </h3>
          <h4>{orderData?.CustId?.CustFirstName}</h4>
          <h4>{orderData?.CustId?.CustMobNo}</h4>
          <h4>{orderData?.OrderStatus}</h4>
        </Row>
        <Row>
          <h3>Order Items </h3>
          {orderData?.OrderItems?.map((item) => {
            return (
              <Col>
                <Card>
                  <Card.Img
                    className="crd-image"
                    src={`http://localhost:5000${item.FoodId.foodimg}`}
                  ></Card.Img>

                  <Card.Text>{item.FoodId.foodname}</Card.Text>
                  <Card.Text>{item.Qty}</Card.Text>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Row>
          <Form>
            <Form.Group>
              <Form.Label>Food type</Form.Label>
              <Form.Label>Select Type</Form.Label>
              <Form.Check
                onChange={(e) => setOrderStatus(e.target.value)}
                type="radio"
                name="type"
                value="Pending"
                label="Pending"
                
              />
              <Form.Check
                onChange={(e) => setOrderStatus(e.target.value)}
                type="radio"
                name="type"
                value="Approve"
                label="Approve"
                
              />
              <Form.Check
                onChange={(e) => setOrderStatus(e.target.value)}
                type="radio"
                name="type"
                value="Dispatch"
                label="Dispatch"
              />
              <Form.Check
                onChange={(e) => setOrderStatus(e.target.value)}
                type="radio"
                name="type"
                value="Intransit"
                label="Intransit"
              />
              <Form.Check
                onChange={(e) => setOrderStatus(e.target.value)}
                type="radio"
                name="type"
                value="Delivered"
                label="Delivered"
              />
              <Form.Check
                onChange={(e) => setOrderStatus(e.target.value)}
                type="radio"
                name="type"
                value="Cancel"
                label="Cancel"
              />
            </Form.Group>
          </Form>
          <Row>
            <Button>
              <Button onClick={() => updateOrderStatus()}>Update Status</Button>
              <Button>Delete</Button>
            </Button>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default OrderDetails;
