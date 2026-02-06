import React from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

const ModalDel = ({ goalModal, setModalVisible, deleteGoal }) => {

    return (
        <View style={styles.modalContent}>
            <Text>Etes vous sûr de vouloir supprimer ce goal ?</Text>
            <View style={styles.containerRow}>
                <Button title='OUI' color='#D5B994' onPress={() =>  deleteGoal(goalModal)}/>
                <Button title='ANNULER' color='#D5B994' onPress={() => setModalVisible(false) }/>
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

export default ModalDel;