import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      axios.get("https://fakestoreapi.com/products").then( response => {
        setProducts(response.data);
      })
    }, [])
    

  return (
    <>
        {products.map(products => <img src={products.image} width={200}/>)}
    </>
    
  )
}

export default Home