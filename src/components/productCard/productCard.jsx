import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import flowerImg from "../../assets/images/img1.webp";
export default function ProductCard() {
  return (
    <div className="container">
    <Card style={{ width: "18rem" }}>
      {/* ../../../public/img1 */}
      {/* <Card.Img variant="top" src="img1.webp" /> */}
      <Card.Img variant="top" src={flowerImg} />
      {/* not working */}
      {/* <Card.Img variant="top" src="../../assets/img1.webp" /> */}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}
