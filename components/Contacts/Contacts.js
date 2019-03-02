import React, {Component} from 'react';
import {FlatList, Text} from "react-native";
import {getContacts, showModal} from "../../store/actions";
import ContactCard from "../ContactCard/ContactCard";
import {connect} from "react-redux";

class Contacts extends Component {
    componentDidMount() {
        this.props.getContacts();
    };

    render() {
        if (!this.props.contacts) {
            return <Text style={{textAlign: 'center'}}>Loading...</Text>;
        }

        const contacts = Object.keys(this.props.contacts).map(contactId => (
            {
                ...this.props.contacts[contactId],
                id: contactId,
                showModal: this.props.showModal
            }
        ));

        return (
            <FlatList
                data={contacts}
                renderItem={(contact) => <ContactCard contact={contact.item} />}
                keyExtractor={contact => contact.id}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getContacts:() => dispatch(getContacts()),
        showModal: (id) => dispatch(showModal(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);