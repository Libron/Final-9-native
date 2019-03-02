import React, {Component} from 'react';
import {connect} from "react-redux";

import {StyleSheet, View, Button} from 'react-native';
import {closeModal, getContacts} from "../../store/actions";
import Contacts from "../Contacts/Contacts";
import ModalContact from "../ModalContact/ModalContact";


class ContactList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Contacts />

                <View>
                    <Button
                        onPress={this.props.syncContacts}
                        title="sync contacts"
                        color="green"
                    />
                </View>

                <ModalContact
                    contact={this.props.contact}
                    visible={this.props.visible}
                    closeModal={this.props.closeModal}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        contact: state.contact,
        visible: state.isActiveModal
    }
};

const mapDispatchToProps = dispatch => {
    return {
        syncContacts: () => dispatch(getContacts()),
        closeModal: () => dispatch(closeModal()),
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    }

});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);