import React, {Component} from 'react';
import './../App.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="headerClass"> Loan Calculator </header>
        )
    }
};

export default Header;