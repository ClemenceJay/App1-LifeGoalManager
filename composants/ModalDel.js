import React from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

const ModalDel = ({ goalToDelete, setModalDelVisible, deleteGoal }) => {

    return (
      <View style={styles.modal}>
        <View style={styles.modalContent}>
            <Text>Etes vous sûr de vouloir supprimer ce goal ?</Text>
            <View style={styles.containerRow}>
                <Button title='OUI' color='#D5B994' onPress={() =>  deleteGoal(goalToDelete)}/>
                <Button title='ANNULER' color='#D5B994' onPress={() => setModalDelVisible(false) }/>
            </View>
        </View>
      </View>
    );
};
  
const styles = StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#5a5a5aab"
    },
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