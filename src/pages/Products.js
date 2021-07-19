import  { useState, useEffect } from 'react';
import axios from 'axios';


function Products() {
    let [products, setProducts] = useState([]);

    useEffect(() =>{
       axios.get('https://fakerapi.it/api/v1/products')
        .then((response) => {
            console.log(response.data);
            setProducts(response.data.data);
        })
        .catch((error) => {
            console.error(error)
        })

    }, [])
    if(!products.length){
        return <h1>Searching...</h1>       
    } else{
        return(
            <table >
                <thead>
                <tr>
                    <th >Name</th>
                    <th >Description</th>
                    <th >Price</th>
                    <th >Image</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product, index) => {
                    return (
                        <tr key={index} >
                            <td >{product.name}</td>
                            <td >{product.description}</td>
                            <td >{product.price}</td>
                            <td><img alt="cover" src={product.image} width="640" height="480"/></td>  

                        </tr>
                    )
                })}
                </tbody>
            </table>
            
        )
    }
    
}

export default Products;