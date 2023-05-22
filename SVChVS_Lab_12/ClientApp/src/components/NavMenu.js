import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
            isHidden: true,
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand style={{ paddingLeft: 10 }} href="/">Магазин колец</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link style={{ paddingLeft: 10 }} href="/RingsPage">Ассортимент</Nav.Link>
                            <Nav.Link style={{ paddingLeft: 10 }} href="/About">О нас</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
