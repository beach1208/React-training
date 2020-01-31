import React from 'react';
import PropTypes from 'prop-types';
import Book from "./Book"
import Hiring from "./Hiring"
import NotHiring from "./NotHiring"

class Library extends React.Component {

    static defaultProps = {
        books: [
            {"title": "Tahoe Tales", "author" : "Chet Whitney", "pages": 1000}
        ]
    }

    state = { 
        open: false,
        freeBookmark: false,
        hiring: true,
        data: [],
        loading: false
    } 

    componentDidMount(){
        this.setState({ loading: true })
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
        .then(data => data.json())
        .then(data => this.setState({data, loading: false}))
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
                {this.state.loading ? "Loading..." : 
                    <div>
                        {this.state.data.map(product => {
                            return(
                                <div>
                                    <h3>Library Profuct of the week!</h3> 
                                    <h4>{product.name}</h4>
                                    <img src={product.image} height={100}/>
                                </div>
                            )
                        })}
                    </div>
                }
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

Library.propTyoes = {
    books: PropTypes.array
}

Book.propTyoes = {
    titie: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
}

export default Library;