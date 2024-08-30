import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col, Form } from 'react-bootstrap';
import Total from '../Total/Total';

const Cart = ({ cartCount, setCartCount,handleRemoveFromCart }) => {

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return; 

    const updatedCart = cartCount.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartCount(updatedCart);
    localStorage.setItem('add-cart', JSON.stringify(updatedCart));
  };

  return (
      <>
      <Total cartCount={cartCount}/>
      {cartCount.map((item) => (
        <Card key={item.id} className="mb-3">
          <Card.Header>{item.category}</Card.Header>
          <Row >
            <Col md={4}>
              <Card.Img src={item.image} style={{ width: '100%', height: 'auto' }} />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>Price: ${item.price}</Card.Text>
                <Card.Text>
                  <Row className="align-items-center">
                    <Col xs="auto">
                      Quantity:
                      <Form.Control
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                        style={{ width: '60px', display: 'inline-block', textAlign: 'center', margin: '0 10px' }}
                      />
                    </Col>
                    <Col xs="auto">
                      Total: ${item.price * item.quantity}
                    </Col>
                  </Row>
                </Card.Text>
                <Button variant="danger" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </>
  );
};

export default Cart;
