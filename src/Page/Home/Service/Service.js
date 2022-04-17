import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Service = ({ service }) => {
    const { id, name, img, price, description } = service;
    const navigate = useNavigate()
    const handleCheckout = (name, id) => {
        navigate(`/service/${id}`)
    }

    return (
        <div className='gy-3 col-sm-12 col-md-6 col-lg-4'>
            <div className="card "  >
                <img src={img} className="card-img-top w-100" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Price: {price}</p>
                    <p className="card-text"><small>{description}</small></p>
                    <Button onClick={() => handleCheckout(name, id)} className="btn btn-primary">Go somewhere</Button>
                </div>
            </div>
        </div>
    );
};

export default Service;