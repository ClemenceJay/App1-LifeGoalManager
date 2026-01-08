import React from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

const ModalEdit = ({ indexToEdit, nomGoalToEdit, setModalEditVisible, setNomGoalToEdit, editGoal }) => {

    return (
      <View style={styles.modal}>
        <View style={styles.modalContent}>
            <Text>Modifier le goal</Text>
            <TextInput 
                value={nomGoalToEdit}
                onChangeText={setNomGoalToEdit}
                style={styles.input}/>
            <View style={styles.containerRow}>
                <Button style={styles.boutons} title='ANNULER' color='#D5B994' onPress={() => setModalEditVisible(false) }/>
                <Button style={styles.boutons} title='Valider' color='#D5B994' onPress={() => editGoal(indexToEdit)}/>
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
    },
    
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: 200
  }
});

export default ModalEdit;