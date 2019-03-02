import {API} from "./API";
import {
    CLOSE_MODAL,
    FETCH_CONTACTS_FAILURE,
    FETCH_CONTACTS_REQUEST,
    FETCH_CONTACTS_SUCCESS, SHOW_MODAL,

} from "./actionTypes";

export const getContactsRequest = () => {
    return {type: FETCH_CONTACTS_REQUEST};
};
export const getContactsSuccess = contacts => {
    return {type: FETCH_CONTACTS_SUCCESS, contacts};
};
export const getContactsFailure = error => {
    return {type: FETCH_CONTACTS_FAILURE, error}
};

export const getContacts = () => {
    return (dispatch) => {
        dispatch(getContactsRequest());
        API.getContacts().then(response => {
            dispatch(getContactsSuccess(response.data));
        }, error => {
            dispatch(getContactsFailure(error));
        });
    }
};

export const showModal = (id) => {
    console.log('[show]',id);
    return {type: SHOW_MODAL, id};
};

export const closeModal = () => {
    return{type: CLOSE_MODAL};
};