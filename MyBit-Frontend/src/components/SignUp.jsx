import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import "./css/SignUp.css"

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [role, setRole] = useState('ROLE_DONOR'); // Default role
  const [adhaar, setAdhaar] = useState(['']); // For multiple Adhaar input
  const [pan, setPan] = useState(['']); // For multiple Pan input
  const [regNo, setRegNo] = useState(''); // Only for NGO

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'role':
        setRole(value);
        break;
      case 'adhaar':
        setAdhaar([...adhaar, value]); // Add new Adhaar to the array
        break;
      case 'pan':
        setPan([...pan, value]); // Add new Pan to the array
        break;
      case 'regNo':
        setRegNo(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const info = {
      adhaar,
      pan,
      regNo: role === 'ROLE_NGO' ? regNo : '', // RegNo only for NGO
    };

    const data = {
      firstName,
      lastName,
      email,
      password,
      city,
      info,
      role,
    };

    try {
      const response = await axios.post(
        role === 'ROLE_DONOR' ? 'https://localhost:8443/user/add/donor' : 'https://localhost:8443/user/add/ngo',
        data
      );
      console.log('User created successfully:', response.data);
      // Handle successful registration (e.g., redirect to login page)
    } catch (error) {
      console.error('Registration failed:', error.response.data);
      // Handle registration errors (e.g., display error message)
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <Row>
        <Col md={6}>
          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
</Col>
</Row>
<Row>
  <Col md={6}>
    <Form.Group controlId="city">
      <Form.Label>City</Form.Label>
      <Form.Control
        type="text"
        name="city"
        value={city}
        onChange={handleInputChange}
        required
      />
    </Form.Group>
  </Col>
  <Col md={6}>
    <Form.Group controlId="role">
      <Form.Label>Role</Form.Label>
      <Form.Select
        name="role"
        value={role}
        onChange={handleInputChange}
      >
        <option value="ROLE_DONOR">Donor</option>
        <option value="ROLE_NGO">NGO</option>
      </Form.Select>
    </Form.Group>
  </Col>
</Row>
{role === 'ROLE_DONOR' && (
  <Row>
    <Col md={6}>
      <Form.Group controlId="adhaar">
        <Form.Label>Adhaar (Add multiple if needed)</Form.Label>
        <Form.Control
          type="text"
          name="adhaar"
          value={adhaar.join(', ')} // Display multiple Adhaar
          onChange={handleInputChange}
          required
        />
      </Form.Group>
    </Col>
    <Col md={6}>
      <Form.Group controlId="pan">
        <Form.Label>Pan (Add multiple if needed)</Form.Label>
        <Form.Control
          type="text"
          name="pan"
          value={pan.join(', ')} // Display multiple Pan
          onChange={handleInputChange}
          required
        />
      </Form.Group>
    </Col>
  </Row>
)}
{role === 'ROLE_NGO' && (
  <Row>
    <Col md={6}>
      <Form.Group controlId="regNo">
        <Form.Label>Registration Number</Form.Label>
        <Form.Control
          type="text"
          name="regNo"
          value={regNo}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
    </Col>
  </Row>
)}
<Button variant="primary" type="submit">
  Sign Up
</Button>
</Form>
);
};

export default SignUp;
