import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeAdmin } from '../actions/admins';

const Admin = ({ id, name, email, role, username, password }) => (
    <div>
        <Link to={'/admin/${id}'}>
            <h4>{name} ({role})</h4>
        </Link>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>

        <button onClick={() => {
            dispatch(removeAdmin({ id }));
        }}>Remove</button>
    </div>
);

export default connect()(Admin);
