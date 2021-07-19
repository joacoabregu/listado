import  { useState, useEffect } from 'react';
import axios from 'axios';


function Books() {
    let [books, setBooks] = useState([]);

    useEffect(() =>{
       axios.get('https://fakerapi.it/api/v1/books')
        .then((response) => {
            console.log(response.data);
            setBooks(response.data.data);
        })
        .catch((error) => {
            console.error(error)
        })

    }, [])
    if(!books.length){
        return <h1>Searching...</h1>       
    } else{
        return(
            <table >
                <thead>
                <tr>
                    <th >Title</th>
                    <th >Author</th>
                    <th >Genre</th>
                    <th >Description</th>
                    <th >ISBN</th>
                    <th >Cover</th>
                    <th >Published</th>
                    <th >Publisher</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book, index) => {
                    return (
                        <tr key={index} >
                            <td >{book.title}</td>
                            <td >{book.author}</td>
                            <td >{book.genre}</td>
                            <td >{book.description}</td>
                            <td >{book.isbn}</td>
                            <td><img alt="cover" src={book.image} width="640" height="480" /></td>     
                            <td >{book.published}</td>
                            <td >{book.publisher}</td>

                        </tr>
                    )
                })}
                </tbody>
            </table>
            
        )
    }
    
}

export default Books;