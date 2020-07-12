import React from 'react';
import AdminForm from './AdminForm';
import { connect } from 'react-redux';
import { editAdmin } from '../actions/admins';

const EditAdmin = (props) => (
    <div className='container__box'>
        <AdminForm
            admin={props.admin}
            onSubmitAdmin={(admin) => {
                props.dispatch(editAdmin(props.admin.id, admin));
                props.history.push('/');
            }}
        />
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        admin: state.find((admin) =>
            admins.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditAdmin);
