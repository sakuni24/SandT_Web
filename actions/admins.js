import axios from '../axios/axios';

const _addAdmin = (admin) => ({
    type: 'ADD_ADMIN',
    book
});

export const addAdmin = (adminData = {
    name: '',
    email: '',
    role: 0,
    username: '',
    password: ''
}) => {
    return (dispatch) => {
        const admin = {
            name: adminData.name,
            email: adminData.email,
            role: adminData.role,
            username: adminData.username,
            password: adminData.password
        };

        return axios.post('admins/assign', admin).then(result => {
            dispatch(_addAdmin(result.data));
        });
    };
};

const _removeAdmin = ({ id } = {}) => ({
    type: 'REMOVE_ADMIN',
    id
});

export const removeAdmin = ({ id } = {}) => {
    return (dispatch) => {
        return axios.delete('admins/${id}'').then(() => {
            dispatch(_removeAdmin({ id }));
        })
    }
};

const _editAdmin = (id, updates) => ({
    type: 'EDIT_ADMIN',
    id,
    updates
});

export const editAdmin = (id, updates) => {
    return (dispatch) => {
        return axios.put('admins/${id}'', updates).then(() => {
            dispatch(_editAdmin(id, updates));
        });
    }
};

const _getAdmins = (admins) => ({
    type: 'GET_ADMINs',
    admins
});

export const getAdmins = () => {
    return (dispatch) => {
        return axios.get('admins').then(result => {
            const admins = [];

            result.data.forEach(item => {
                admins.push(item);
            });

            dispatch(_getAdmins(admins));
        });
    };
};
