import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('thanks')
    }
    // const { serviceId } = useParams()
    return (
        <div className='container w-50 mx-auto'>


        </div>
    );
};

export default CheckOut;