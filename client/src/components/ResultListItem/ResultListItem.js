import React, { Component } from 'react';
// import API from "../../utils/API";

class ResultListItem extends Component {

    state = {
        mounted: false,
        bgColor: "",
        color: "",
        text: "Save"
    }
    
    componentDidMount = () => {
        this.setState({
            mounted: true
        })
        console.log("Mounted!")
    }

    getStyle = () => {
        if (this.state.text === "Save") {
            this.setState({
                bgColor: "#00E000",
                color: "white",
                text: "Saved"
            })
        }
        else {
            this.setState({
                bgColor: "",
                color: "",
                text: "Save"
            })
        }   
    }



    // onClickFunc = () => {
    //     this.props.saveGoogleBook.bind(this, this.props);
    //     // this.checkSaved(this.props.id);
    // }

    // getStyle = (id) => {
    //     let style = {
    //         backgroundColor: "#00E000",
    //         color: "white"
    //     }
    //     if (this.state.mounted) {
    //         console.log("Here's the id", id)
    //         API.getBook(id)
    //         .then(res => {
    //             console.log("Here's the res", res);
    //             if (res.data.id == id) {
    //                 console.log("There's a match!");
    //                 console.log(style);
    //                 return style
    //             }
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //     }
    // }
    
    
    render () {
        
        return (
            
            <div>
                <div className="card">
                    <div className="card-header"></div>
                    <div className="card-body">
                        <img src={this.props.image} style={{maxWidth: "100px"}} alt="book"/>
                        <h5 className="card-title" style={{margin: "10px 0"}}>{this.props.title}</h5>
                        <p className="card-text" >{this.props.description}</p>
                        <p style={{fontStyle: "italic"}}>Author(s): {this.props.authors}</p>
                        <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{marginRight: "6px"}}>View Book</a>
                        <button onClick={() => { this.props.saveGoogleBook.bind(this, this.props); this.getStyle(); }} style={{ backgroundColor: this.state.bgColor, color: this.state.color }} className="btn">{this.state.text}</button>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default ResultListItem;


// () => { this.props.saveGoogleBook.bind(this, this.props); this.checkSaved(this.props.id); }

/*import React from 'react';

function ResultListItem(props) {

    console.log("Here are all the props", props);

    const {title, authors, image, link, description, saveGoogleBook} = props
    return (
        <div>
            <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                    <img src={image} style={{maxWidth: "100px"}}/>
                    <h5 className="card-title" style={{margin: "10px 0"}}>{title}</h5>
                    <p className="card-text" >{description}</p>
                    <p>{authors}</p>
                    <a href={link} target="_blank" className="btn btn-primary" style={{marginRight: "6px"}}>View Book</a>
                    <button onClick={saveGoogleBook.bind(this, props)} className="btn">Save</button>
                </div>
            </div>
        </div>
    )
}

export default ResultListItem;
*/