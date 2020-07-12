import { createStore, applyMiddleware } from "redux";
import admins from '../reducers/admins';
import thunk from 'redux-thunk';

export default () => {
    return createStore(admins, applyMiddleware(thunk));
};
