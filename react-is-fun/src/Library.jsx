import React from 'react';
import Book from "./Book"


class Library extends React.Component {
    state = { 
        open: false,
        freeBookmark: false
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
                <h1>The librry is {this.state.open? 'open' : 'closed'}</h1>
                <button onClick={this.props.toggleOpenClosed}>Change</button>
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