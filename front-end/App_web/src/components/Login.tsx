import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/colors.css';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
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
            <Form.Group controlId="email" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-3"
              />
            </Form.Group>

            <Form.Group controlId="password" className="mb-4">
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 rounded-3"
              />
            </Form.Group>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <Form.Group controlId="rememberMe">
                <Form.Check
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  label="Recuérdame"
                />
              </Form.Group>
              <Link to="/forgot-password" className="text-primary">¿No recuerdas tu contraseña?</Link>
            </div>

            <Button
              type="submit"
              className="w-100 py-2 mb-3"
              variant="primary"
            >
              Iniciar Sesión
            </Button>

            <div className="text-center mt-3">
              <p>¿No tienes cuenta?{' '}
                <Link to="/register" className="text-primary">Regístrate</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;