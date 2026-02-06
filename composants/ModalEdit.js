import React from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

const ModalEdit = ({ goalModal, setModalVisible, setNomGoalToEdit, editGoal, nomGoalToEdit }) => {

    return (
        <View style={styles.modalContent}>
            <Text>Modifier le goal</Text>
            <TextInput 
                value={nomGoalToEdit}
                onChangeText={setNomGoalToEdit}
                style={styles.input}/>
            <View style={styles.containerRow}>
                <Button style={styles.boutons} title='ANNULER' color='#D5B994' onPress={() => setModalVisible(false) }/>
                <Button style={styles.boutons} title='Valider' color='#D5B994' onPress={() => editGoal(goalModal.id)}/>
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
    },
    
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: 200
  }
});

export default ModalEdit;