import React, { Component } from 'react'
import ResultListItem from "../ResultListItem/ResultListItem";

class ResultList extends Component {

    

    render() {
        return (
            this.props.bookState.map((book) => (
            <ResultListItem 
            id={book.id}
            title={book.volumeInfo.title}
            link={book.volumeInfo.previewLink}
            authors={book.volumeInfo.authors}
            image={book.volumeInfo.imageLinks}
            description={book.volumeInfo.description}
            saveGoogleBook={this.props.saveGoogleBook}
            />
        ))
        )
                           
    }
}

export default ResultList


