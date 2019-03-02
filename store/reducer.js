import {
    CLOSE_MODAL,
    FETCH_CONTACTS_REQUEST,
    SHOW_MODAL,
    FETCH_CONTACTS_SUCCESS,
    FETCH_CONTACTS_FAILURE
} from "./actionTypes";

const initialState = {
    contacts: null,
    contact: null,
    loading: false,
    error: null,
    order: {},
    isActiveModal: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTACTS_REQUEST:
            return {...state, loading: true};
        case FETCH_CONTACTS_SUCCESS:
            return {...state, loading: false, contacts: action.contacts};
        case FETCH_CONTACTS_FAILURE:
            return {...state, loading: false, error: action.error};
        case SHOW_MODAL:
            return {...state, contact: {...state.contacts[action.id]}, isActiveModal: true};
        case CLOSE_MODAL:
            return {...state, isActiveModal: false};
        default:
            return state;
    }
};

export default reducer;