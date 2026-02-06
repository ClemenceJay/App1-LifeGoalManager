import React from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

const ModalDone = ({ goalModal, setModalVisible, markAsDoneGoal }) => {

    return (
        <View style={styles.modalContent}>
            <Text>Bravo !</Text>
            <View style={styles.containerRow}>
                <Button
                    title='CONTINUER'
                    color='#D5B994'
                    onPress={() => {
                        setModalVisible(false);
                        markAsDoneGoal(goalModal);
                    }}/>
            </View>
        </View>
    );
};
  
const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: "#F7F3F2",
        padding:15,
        borderRadius:15,
        gap:10

    },
    containerRow: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center'
    },
    text : {
        color: 'white',
    }
});

export default ModalDone;