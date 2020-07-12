const adminsReducerDefaultState = [];

export default (state = adminsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ADMIN':
            return [
                ...state,
                action.admin
            ];
        case 'REMOVE_ADMIN':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_ADMIN':
            return state.map((admin) => {
                if (admin.id === action.id) {
                    return {
                        ...admin,
                        ...action.updates
                    };
                } else {
                    return admin;
                }
            });
        case 'GET_ADMINs':
            return action.admins;
        default:
            return state;
    }
};
