import React from 'react';

function ResultListItem(props) {
    console.log("These are the main props" + props);
    return (
        <div>
            <div className="card">
                <h5 className="card-header">Featured</h5>
                <div className="card-body">
                    <p>{props.image}</p>
                    <h5 className="card-title">{props.title}</h5>
                    <p>{props.id}</p>
                    <p className="card-text" >{props.description}</p>
                    <p>{props.authors}</p>
                    <a href={props.link} className="btn btn-primary">View Book</a>
                    <button onClick={() => props.saveGoogleBook}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default ResultListItem;