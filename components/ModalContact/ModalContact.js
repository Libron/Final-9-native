import React, {Component} from 'react';
import {Modal, Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

class ModalContact extends Component {
    render() {
        if (!this.props.contact) {
            return  null
        }

       return (
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.visible}
                    onRequestClose={this.props.closeModal}>

                    <View  style={styles.Modal}>
                        <Text style={styles.header}>Подробная информация:</Text>

                        <View style={styles.content}>
                            <View>
                                <Image
                                    style={{width: 300 , height: 300}}
                                    source={{uri: this.props.contact.avatar}}
                                />
                            </View>
                            <Text style={styles.text}>{this.props.contact.firstname + ' ' + this.props.contact.lastname}</Text>
                            <Text style={styles.text}>{this.props.contact.phone}</Text>
                            <Text style={styles.text}>{this.props.contact.email}</Text>
                        </View>

                        <TouchableOpacity style={styles.footer} onPress={this.props.closeModal}>
                            <Text style={styles.btn}>GO HOME</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
        );
    }
}

const styles = StyleSheet.create({
    Modal: {
        flex: 1,
        backgroundColor: '#bf360c',
        justifyContent: 'space-between',
    },
    header: {
        flex: 1,
        alignContent: 'center',
        fontSize: 25,
        marginTop: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    },
    content: {
        flex: 8,

        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f57c00',
    },
    text: {
        fontSize: 25,
    },
    footer: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        color: '#fff3e0',
        fontWeight: 'bold',
        fontSize: 20,
    }
});

export default ModalContact;