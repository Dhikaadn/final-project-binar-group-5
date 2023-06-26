import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function RequiredForm() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: ''
  });

  const { nama, email, pesan } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data yang dikirim
    console.log(formData);
  };

  const isFormValid = nama !== '' && email !== '' && pesan !== '';

  return (
    <div>
      <h2>Formulir</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="nama">
          <Form.Label>Nama:</Form.Label>
          <Form.Control
            type="text"
            name="nama"
            value={nama}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="pesan">
          <Form.Label>Pesan:</Form.Label>
          <Form.Control
            as="textarea"
            name="pesan"
            value={pesan}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!isFormValid}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default RequiredForm;