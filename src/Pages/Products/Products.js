import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import {useFetch} from './../../helpers/useFetch/useFetch.helper'
import "./products.css";

import {useQueryClient, useQuery} from '@tanstack/react-query'

const Products = () => {
  const [products, setProducts] = useState([]);
  const [tempProducts, setTempProducts] = useState([]);
  const [search, setSearch] = useState()
  const [debounceValue, setDebounce] = useState()


  const fetchData = async ()=>{
    const res = await axios({method:'GET', url:'https://fakestoreapi.com/products'})
    const result = await res.data

    return result
  }

  const {data, isLoading} = useQuery({queryKey:"products", queryFn: fetchData} )


  useEffect(()=>{
      setProducts(data)
      setTempProducts(data)
  },[data])

  const filterProduct = () =>{
    const filteredItem = tempProducts?.filter((item)=>{
        if(debounceValue?.length === ''){
          return {...tempProducts}
        }else{
          if(item?.category.toLowerCase().includes(debounceValue?.toLowerCase() )){
            return item
          }else{
            return 
          }
        }
    })
    setProducts(filteredItem)
  }

  useEffect(()=>{
    filterProduct()
  },[debounceValue])

  useEffect(()=>{
     setTimeout(()=>{
       return setDebounce(search) 
    },2000) 
  },[search])


  const navigate = useNavigate();

  


  return (
    <div className="product">
      <div className="inputContainer"> 
        <input name="search" value={search} onChange={(e)=> (setSearch(e.target.value)) } placeholder="Search by category" />
      </div>
      <div className="title">
        <p>All Products</p>
      </div>
      <div className="products">
        { isLoading ? (<div>...Loading</div>): products.length > 0 ? (products.map((product) => (
          <div className="product-card">
            <div className="card-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="card-body">
              <h3>{product.title}</h3>
              <h4>${product.price}</h4>
              <button
                onClick={() => {
                  navigate(`/productdetails/${product?.id}`);
                }}
              >
                View Details
              </button>
            </div>
          </div>)
        )):(
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default Products;
