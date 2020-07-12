import React from 'react';
import { connect } from 'react-redux';
import Admin from './Admin';

const AdminList = (props) => (
    <div>
        Admin List:
        <ul>
            {props.admins.map(admin => {
                return (
                    <li key={admin.id}>
                        <Admin {...admin} />
                    </li>
                );
            })}
        </ul>

    </div>
);

const mapStateToProps = (state) => {
    return {
        admins: state
    };
}

export default connect(mapStateToProps)(AdminList);
