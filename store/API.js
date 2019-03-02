import axios from "../axios-instance";

export const API = {
    getContacts: () => axios.get('contacts.json')
};