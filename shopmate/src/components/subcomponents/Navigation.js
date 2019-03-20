import React, {Component} from 'react';
import './styles/navigation.scss'

class Navigation extends Component {
    render() {
        return (
            <div className="nav">
                <ul>
                    <li className="app-logo">
                        <a href="#">shopmate</a>
                    </li>
                    <li>
                        <a href="#">Women</a>
                    </li>
                    <li>
                        <a href="#">Men</a>
                    </li>
                    <li>
                        <a href="#">Kids</a>
                    </li>
                    <li>
                        <a href="#">Shoes</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navigation;