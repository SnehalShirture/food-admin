import React, { useState } from "react";
import { Row, Container, Form, Button } from "react-bootstrap";
import axios from "axios";

function AddFood() {
  const [foodname, setFoodName] = useState("");
  const [foodtype, setFoodType] = useState("");
  const [foodcategory, setFoodCategory] = useState("");
  const [foodimg, setFoodImg] = useState("");
  const [foodprice, setFoodPrice] = useState("");

  const submitForm = () => {
    const foodData = {
      foodname: foodname,
      foodtype: foodtype,
      foodcategory: foodcategory,
      foodimg: foodimg,
      foodprice: Number(foodprice),
    };
    axios
      .post("http://localhost:5000/api/addFood", foodData)
      .then((result) => {
        alert("Food Added");
        console.log("DATA", result.data);
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  async function handlechangeimage(e) {
    const imgData = new FormData();
    imgData.append("image", e.target.files[0]);
    axios
      .post("http://localhost:5000/uploadfile", imgData)
      .then((result) => {
        console.log("Res", result.data);
        setFoodImg(result.data.filepath);
        alert("Images Uploaded");
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }

  return (
    <div>
      <Container>
        <Row>
          <h2>||My Food Form ||</h2>
          <Form>
            <Form.Group>
              <Form.Label> Food Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Food Name"
                onChange={(e) => setFoodName(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Food type</Form.Label>
              <Form.Label>Select Type</Form.Label>
              <Form.Check
                onChange={(e) => setFoodType(e.target.value)}
                type="radio"
                name="type"
                value="Non Veg"
                label="Non Veg"
              />
              <Form.Check
                onChange={(e) => setFoodType(e.target.value)}
                type="radio"
                name="type"
                value="Veg"
                label="Veg"
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Food Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Food Price"
                onChange={(e) => setFoodPrice(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Select Category</Form.Label>
              <Form.Select onChange={(e) => setFoodCategory(e.target.value)}>
                <option value="Rice">Rice</option>
                <option value="Soups">Soups</option>
                <option value="Desert">Desert</option>
                <option value="Fast Food">Fast Food</option>
                <option value="Others">Othersc</option>
              </Form.Select>
            </Form.Group>

            <Row>
              <Form.Group>
                <Form.Label> Food Image</Form.Label>
                <Form.Control type="file" onChange={handlechangeimage} />
              </Form.Group>
            </Row>
          </Form>
          <Button onClick={() => submitForm()}>Add Food</Button>
        </Row>
      </Container>
    </div>
  );
}

export default AddFood;
