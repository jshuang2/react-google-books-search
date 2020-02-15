import React, { Component } from 'react'
import { Col, Row, Container } from "../components/Grid/Grid";
import Nav from "../components/Nav/Nav";
import Jumbotron from "../components/Jumbotron/Jumbotron";

class Saved extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Jumbotron fluid>
                </Jumbotron>
                Welcome to the saved page.
            </div>
        )
    }
}

export default Saved
