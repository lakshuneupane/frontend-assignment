import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

import './productdetails.css'

const Productdetails = () => {
    const [products, setProducts] = useState([]);

    const {id} = useParams()

    useEffect(() => {
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
  return (
    <div className='productdetail'>
        <div className='product-image'>
            <img 
            src={products.image}
            />
        </div>
        <div className='product-detail'>
            <h2>{ products.title }</h2>
            <p><strong>Price:</strong>${ products.price}</p>
            <p><strong>Category:</strong>{ products.category}</p>
            <p><strong>Description:</strong>${ products.description}</p>
            <button onClick={()=> alert('Added to cart')}>Add To Cart</button>

        </div>
    </div>
  )
}

export default Productdetails