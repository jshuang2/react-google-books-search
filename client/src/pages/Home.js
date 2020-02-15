import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid/Grid";
import Nav from "../components/Nav/Nav";

class Home extends Component {
    render() {
        return (
            <div>
                <Nav />
                Welcome to the home page.
            </div>
        )
    }
}

export default Home
