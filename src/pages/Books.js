import  { useState, useEffect } from 'react';
import axios from 'axios';


function Books() {
    let [books, setBooks] = useState([]);

    useEffect(() =>{
       axios.get('https://fakerapi.it/api/v1/books')
        .then((response) => {
            console.log(response.data.data);
            setBooks(response.data.data);
        })
        .catch((error) => {
            console.error(error)
        })

    }, [])
    return(
        books.map((book, index) => {
            return <p key={index}>{book.title}</p>
        })
    )
}

export default Books;