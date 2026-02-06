import React from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import ModalDel from './ModalDel';
import ModalEdit from './ModalEdit';
import ModalDone from './ModalDone';
import ModalNewChild from './ModalNewChild';

const ModaleGenerale = ({ typeModale, setModalVisible, goalModal, deleteGoal, editGoal, setNomGoalToEdit, nomGoalToEdit, markAsDoneGoal }) => {

    // Affichage des modales selon le type d'action
    return (
        <View style={styles.modal}>
            {typeModale =='del'? <ModalDel setModalVisible={setModalVisible} goalModal={goalModal} deleteGoal={deleteGoal}/> : null}
            {typeModale =='edit'? <ModalEdit setModalVisible={setModalVisible} goalModal={goalModal} editGoal={editGoal} setNomGoalToEdit={setNomGoalToEdit} nomGoalToEdit={nomGoalToEdit}/> : null}
            {typeModale =='done'? <ModalDone setModalVisible={setModalVisible} goalModal={goalModal} markAsDoneGoal={markAsDoneGoal}/> : null}
            {typeModale =='newchild'? <ModalNewChild setModalVisible={setModalVisible} goalModal={goalModal}/> : null}
        </View>
    );
};
  
const styles = StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#5a5a5aab"
    }
});

export default ModaleGenerale;