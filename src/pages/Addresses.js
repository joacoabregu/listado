import  { useState, useEffect } from 'react';
import axios from 'axios';


function Addresses() {
    let [addresses, setAddresses] = useState([]);

    useEffect(() =>{
       axios.get('https://fakerapi.it/api/v1/addresses')
        .then((response) => {
            setAddresses(response.data.data);
        })
        .catch((error) => {
            console.error(error)
        })

    }, [])
    if(!addresses.length){
        return <h1>Searching...</h1>       
    } else{
        return(
            <table >
                <thead>
                <tr>
                    <th >Street</th>
                    <th >Street Name</th>
                    <th >Number</th>
                    <th >City</th>
                    <th >Zipcode</th>
                    <th >Country</th>
                </tr>
                </thead>
                <tbody>
                {addresses.map((address, index) => {
                    return (
                        <tr key={index} >
                            <td >{address.street}</td>
                            <td >{address.streetName}</td>
                            <td >{address.buildingNumber}</td>
                            <td >{address.city}</td>
                            <td >{address.zipcode}</td>
                            <td >{address.country}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            
        )
    }
    
}

export default Addresses;