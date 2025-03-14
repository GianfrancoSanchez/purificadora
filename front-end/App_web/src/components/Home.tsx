import React from 'react';
import { Container, Row, Col, Card, Form, InputGroup, Button, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/colors.css';
import { BsSearch, BsPlus, BsHouseDoor, BsGrid, BsClipboardCheck, BsPerson, BsPeople } from 'react-icons/bs';

interface ProductItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  // Sample product data based on the image
  const products: ProductItem[] = [
    {
      id: 1,
      name: 'Descripción de la planta',
      price: 57.00,
      image: '/plants/plant1.jpg'
    },
    {
      id: 2,
      name: 'Descripción de la planta',
      price: 37.00,
      image: '/plants/plant2.jpg'
    },
    {
      id: 3,
      name: 'Descripción de la planta',
      price: 37.00,
      image: '/plants/plant3.jpg'
    },
    {
      id: 4,
      name: 'Descripción de la planta',
      price: 17.00,
      image: '/plants/plant4.jpg'
    },
    {
      id: 5,
      name: 'Descripción de la planta',
      price: 37.00,
      image: '/plants/plant5.jpg'
    },
    {
      id: 6,
      name: 'Descripción de la planta',
      price: 17.00,
      image: '/plants/plant6.jpg'
    }
  ];

  return (
    <Container fluid className="px-0 pb-5 mb-5" style={{ maxWidth: '500px', margin: '0 auto' }} as="div">
      {/* Header with profile, search and add button */}
      <div className="p-3 bg-light sticky-top">
        <Row className="align-items-center mb-2">
          <Col xs={2}>
            <div className="rounded-circle overflow-hidden" style={{ width: '40px', height: '40px' }}>
              <img 
                src="/profile-placeholder.jpg" 
                alt="Profile" 
                className="w-100 h-100 object-fit-cover"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Col>
          <Col xs={8} className="text-center">
            <h5 className="mb-0 fw-bold">Insumos</h5>
          </Col>
          <Col xs={2} className="text-end">
            <Button 
              variant="light" 
              className="rounded-circle p-1" 
              style={{ width: '35px', height: '35px' }}
            >
              <BsPlus size={24} />
            </Button>
          </Col>
        </Row>
        
        <InputGroup className="mb-3">
          <InputGroup.Text className="bg-light border-end-0">
            <BsSearch />
          </InputGroup.Text>
          <Form.Control
            placeholder="Buscar"
            className="bg-light border-start-0"
          />
        </InputGroup>
      </div>

      {/* Product Grid */}
      <Row className="g-3 px-3">
        {products.map(product => (
          <Col xs={6} key={product.id}>
            <Card className="border-0 shadow-sm h-100">
              <div className="position-relative" style={{ height: '120px', overflow: 'hidden' }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <Card.Body className="p-2">
                <Card.Title className="fs-6 mb-1">{product.name}</Card.Title>
                <Card.Text className="text-primary mb-0">${product.price.toFixed(2)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Bottom Navigation */}
      <Nav className="fixed-bottom bg-white border-top" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div className="d-flex justify-content-around w-100 py-2">
          <Nav.Link className="text-center" active>
            <BsHouseDoor size={24} />
            <div className="small">Inicio</div>
          </Nav.Link>
          <Nav.Link className="text-center" onClick={() => navigate('/stock')}>
            <BsGrid size={24} />
            <div className="small">Stock</div>
          </Nav.Link>
          <Nav.Link className="text-center">
            <BsClipboardCheck size={24} />
            <div className="small">Pedidos</div>
          </Nav.Link>
          <Nav.Link className="text-center">
            <BsPeople size={24} />
            <div className="small">Clientes</div>
          </Nav.Link>
        </div>
      </Nav>
    </Container>
  );
};

export default Home;