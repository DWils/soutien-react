import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Profile = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
      axios.get("https://fakestoreapi.com/products/1").then( response => {
        setProduct(response.data);
      })
    }, [])

  return (
    <div>
        <img src={product.image} alt="" width={200} />
        
    </div>
  )
}

export default Profile