import React from 'react';

import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';

const ContactCard = (props) => {
    return (
        <TouchableOpacity
            key={props.contact.id}
            style={styles.Item}
            onPress={() => props.contact.showModal(props.contact.id)}
        >
            <View style={styles.avatar}>
                <Image
                    style={{width: 80, height: 80}}
                    source={{uri: props.contact.avatar}}
                />
            </View>

            <View style={styles.fullname}>
                <Text>{props.contact.firstname + ' ' + props.contact.lastname}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ContactCard;

const styles = StyleSheet.create({
    Item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignItems: 'center',
        marginBottom: 5,
        padding: 15
    },
    avatar: {
        flex: 1
    },
    fullname: {
        flex: 3,
        justifyContent: 'flex-start',
        paddingLeft: 5,
    }
});