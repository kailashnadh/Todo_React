import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class HeaderComponent extends Component {
    render() {
        //console.log(isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://kailashnadh.pb.online" className="navbar-brand">askKailash</a></div>
                    <ul className="navbar-nav">
                        <Link className="nav-link" to="/todos">Todos</Link>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent