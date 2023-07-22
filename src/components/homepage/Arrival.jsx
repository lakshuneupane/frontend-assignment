import React from 'react'
import {useState,useEffect }from'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './arrival.css'


const Arrival = () => {
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
      axios
        .get("https://fakestoreapi.com/products?limit=5")
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
  return (
    <div className='arrival'>
        <div className='arrival-heading'>
            <p>New Products</p>
        </div>
        <div className='new-products'>
            {products.map((product) => (
                <div className=''>
                    <div className='product-container'>
                        <div className='image-container'>
                            <img 
                                src={product.image}
                                alt={product.title}
                            />
                        </div>
                        <div className='conatiner-body'>
                            <h3>{product.title}</h3>
                            <p>${product.price}</p>
                            <button onClick={ () => {
                              navigate (`/productdetails/${product?.id}`);
                            }}>View Details</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Arrival