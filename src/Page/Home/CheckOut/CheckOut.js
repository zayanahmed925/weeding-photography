import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './CheckOut.css';

const CheckOut = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('thanks for booking')
    }
    // const { serviceId } = useParams()
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='title text-center mt-3'>Please Submit</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Phone number" required />
                </Form.Group>

                <Button className='px-5 confirm-btn  py-2 ' variant="primary" type="submit">
                    Confirm
                </Button>
            </Form>

        </div>
    );
};

export default CheckOut;