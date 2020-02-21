import React, { Component } from 'react'
import ResultListItem from "../ResultListItem/ResultListItem";

class ResultList extends Component {

    

    render() {
        console.log("Props", this.props)
        return (
            this.props.bookState.map((book) => (
            <ResultListItem 
            key={book.id}
            title={book.volumeInfo.title}
            link={book.volumeInfo.previewLink}
            authors={book.volumeInfo.authors}
            image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : <h5>No image to display</h5>}
            description={book.volumeInfo.description}
            saveGoogleBook={this.props.saveGoogleBook}
            />
        ))
        )
                           
    }
}

export default ResultList


