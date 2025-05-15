import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function ProductCard() {
  return (
    <div className="container">
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://www.apple.com/newsroom/images/product/iphone/standard/iphone8plus_product_red_back_041018_carousel.jpg.large.jpg" />
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
