import React, {Component} from 'react';

class Nav extends Component {
    render() {
        console.log('navbar - rendered');
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    Navbar {" "}
                    <span className="badge badge-pill badge-secondary">
                        {this.props.totalCounters}
                    </span>
                </a>
            </nav>
        );
    }
}

export default Nav;
