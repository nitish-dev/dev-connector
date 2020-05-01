import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

    //if logged in
    const authLinks = (
        <ul>
            <li><a onClick={logout}> <i className="fas fa-sign-out-alt" /> Logout</a></li>

        </ul>
    )
    //if logged out
    const guestLinks = (
        <ul>
            <li><Link to="">Developers</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    )
    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to="/"><i className="fas fa-code"></i> DevConnector</Link>

            </h1>
            {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
        </nav>
    )
}
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps, { logout })(Navbar);
