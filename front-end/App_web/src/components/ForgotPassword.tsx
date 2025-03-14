import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/colors.css';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password recovery logic here
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <div className="text-center mb-4">
            <Image
              src="/internow-logo.png"
              alt="Internow"
              className="mx-auto"
              height={100}
              style={{ maxWidth: '100%' }}
            />
          </div>
          
          <div className="text-center mb-4">
            <h2>Recuperar Contraseña</h2>
            <p className="text-muted">Ingresa tu correo electrónico para recibir instrucciones de recuperación</p>
          </div>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email" className="mb-4">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-3"
                required
              />
            </Form.Group>

            <Button
              type="submit"
              className="w-100 py-2 mb-3"
              variant="primary"
            >
              Enviar Instrucciones
            </Button>

            <div className="text-center mt-3">
              <Link to="/login" className="text-primary">Volver al inicio de sesión</Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;