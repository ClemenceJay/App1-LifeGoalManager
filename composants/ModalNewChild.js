import React from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

const ModalNewChild = ({ idParent, setModalAddChildVisible, addChild,  newGoalInput, setNewGoalInput}) => {

    return (
      <View style={styles.modal}>
        <View style={styles.modalContent}>
            <Text>Ajouter un objectif enfant?</Text>
            <TextInput value={newGoalInput} onChangeText={setNewGoalInput} style={styles.input} placeholder='Objectif enfant'/>
            <View style={styles.containerRow}>
                <Button title='Add' color='#3e3f2cff' onPress={() => addChild(idParent)}/>
                <Button title='ANNULER' color='#D5B994' onPress={() => {setModalAddChildVisible(false); setNewGoalInput("")} }/>
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

export default ModalNewChild;