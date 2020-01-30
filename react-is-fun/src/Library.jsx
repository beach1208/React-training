import React from 'react';
import Book from "./Book"

const Hiring = () => 
    <div>
        <p>The library is hiring.</p>
    </div>

const NotHiring = () => 
    <div>
        <p>The library is not hiring.</p>
    </div>

class Library extends React.Component {
    state = { 
        open: false,
        freeBookmark: false,
        hiring: true
    } 

    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open,
        }))
    }
    render(){
        const { books } = this.props;
        return(
            <div>
                {this.state.hiring ? <Hiring/> : <NotHiring/>}
                <h1>The librry is {this.state.open ? 'open' : 'closed'}</h1>
                <button onClick={this.toggleOpenClosed}>Change</button>
                {books.map(book => 
                <Book
                    key={book.key}
                    title={book.title}
                    author={book.author}
                    pages={book.pages}
                    freeBookmark={this.state.freeBookmark}
                />
           )}
            </div>
        )
    }
}

export default Library;