import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid/Grid";
import Nav from "../components/Nav/Nav";
import Jumbotron from "../components/Jumbotron/Jumbotron";

class Home extends Component {


    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                <Jumbotron />
                Welcome to the home page.
                </Container>
            </div>
        )
    }
}

export default Home
