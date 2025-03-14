import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/colors.css';

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
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
          
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Nombre Completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-3"
              />
            </Form.Group>

            <Form.Group controlId="email" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3"
              />
            </Form.Group>

            <Form.Group controlId="password" className="mb-3">
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3"
              />
            </Form.Group>

            <Form.Group controlId="confirmPassword" className="mb-4">
              <Form.Control
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirmar Contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="p-3"
              />
            </Form.Group>

            <Button
              type="submit"
              className="w-100 py-2 mb-3"
              variant="primary"
            >
              Registrarse
            </Button>

            <div className="text-center mt-3">
              <p>¿Ya tienes una cuenta?{' '}
                <Link to="/login" className="text-primary">Inicia Sesión</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;