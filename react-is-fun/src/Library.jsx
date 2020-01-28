import React from 'react';
import Book from "./Book"

const Library = ({books}) => {
    return(
       <div>
           {books.map(book => <Book key={book.key}  title={book.title} author={book.author} pages={book.pages}/>
           )}
       </div>
    )
}

export default Library;