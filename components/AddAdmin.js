import React from 'react';
import AdminForm from './AdminForm';
import { connect } from 'react-redux';
import { addAdmin } from '../actions/admins';

const AddAdmin = (props) => (
    <div>
        <h3>Set Admin information:</h3>
        <AdminForm
            onSubmitAdmin={(admin) => {
                props.dispatch(addAdmin(admin));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddAdmin);
