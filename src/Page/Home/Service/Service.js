import React from 'react';

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div className='gy-3 col-sm-12 col-md-6 col-lg-4'>
            <div className="card "  >
                <img src={img} className="card-img-top w-100" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Price: {price}</p>
                    <p className="card-text"><small>{description}</small></p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default Service;