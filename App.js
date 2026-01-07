import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, ImageBackground, Modal } from 'react-native';
import React, {useState} from 'react';
import ListeGoal from './composants/ListeGoal';
import AddGoal from './composants/AddGoal';
import ModalDel from './composants/ModalDel';
import ModalEdit from './composants/ModalEdit';
import ModalDone from './composants/ModalDone';
import DisplayGoalDone from './composants/DisplayGoalDone';

const background = require('./assets/background.jpg');

export default function App() {
  
  const [modalDelVisible, setModalDelVisible] = useState(false);
  const [modalDoneVisible, setModalDoneVisible] = useState(false);
  const [modalEditVisible, setModalEditVisible] = useState(false);
  const [indexToDelete, setIndexToDelete] = useState("");
  const [indexToEdit, setIndexToEdit] = useState("");
  const [indexToDone, setIndexToDone] = useState("");
  const [nomGoalToEdit, setNomGoalToEdit] = useState("");
  const [newGoalInput, setNewGoalInput] = useState("");
  const [sampleGoals, setSampleGoals] = useState([
    {nom: "Faire les courses", done: false},
    {nom: "Perdre 5 kgs", done: false},
    {nom: "Apprendre un nouveau langage", done: false}
  ]);
  const [displayDone, setDisplayDone] = useState(false);

  const toggleDisplayDone = () => {
    setDisplayDone(!displayDone);
  }
  const ajouterLifeGoal = () => {
    let newGoal = {nom: newGoalInput, done: false}
    setSampleGoals([...sampleGoals, newGoal]);
    setNewGoalInput("");
  }
  
  const deleteGoal = (goalToDelete) => {
    setSampleGoals(sampleGoals.filter((_,index) => index != goalToDelete));
    setModalDelVisible(false);
    setIndexToDelete("");
  }

  const doneGoal = (indexGoalToDone) => {
    setSampleGoals(precedentsGoal => precedentsGoal.map((prevGoal, i) => i === indexGoalToDone ? {...prevGoal, done: true} : prevGoal));
    console.log(sampleGoals);
    setModalDoneVisible(false);
    setIndexToDone("");
  }
  
  const editGoal = (indexGoalToEdit) => {
    setSampleGoals(precedentsGoal => precedentsGoal.map((prevGoal, i) => i === indexGoalToEdit ? {...prevGoal, nom: nomGoalToEdit} : prevGoal));
    setModalEditVisible(false);
    setIndexToEdit("");
    setNomGoalToEdit("");
  }

  const openModalDel = (goalToDelete) => {
    setModalDelVisible(true);
    setIndexToDelete(goalToDelete);
  }

  const openModalDone = (goalToDone) => {
    setModalDoneVisible(true);
    setIndexToDone(goalToDone);
  }

  const openModalEdit = (indexGoalToEdit, goal) => {
    setModalEditVisible(true);
    setIndexToEdit(indexGoalToEdit);
    setNomGoalToEdit(goal.nom);
  }

  return (
    <ImageBackground style={styles.container} source={background} resizeMode="cover">
      <Modal 
        animationType="fade"
        transparent={true}
        visible={modalDelVisible}>
          <ModalDel indexToDelete={indexToDelete} setModalDelVisible={setModalDelVisible} deleteGoal={deleteGoal}/>
      </Modal>
      <Modal 
        animationType="fade"
        transparent={true}
        visible={modalEditVisible}>
          <ModalEdit indexToEdit={indexToEdit} nomGoalToEdit={nomGoalToEdit} setModalEditVisible={setModalEditVisible} editGoal={editGoal} setNomGoalToEdit={setNomGoalToEdit}/>
      </Modal>
      <Modal 
        animationType="fade"
        transparent={true}
        visible={modalDoneVisible}>
          <ModalDone indexToDone={indexToDone} setModalDoneVisible={setModalDoneVisible} doneGoal={doneGoal}/>
      </Modal>
      <View style={styles.container}>
        <Text style={styles.titre}>Mes Life Goal:</Text>
        <DisplayGoalDone displayDone={displayDone} toggleDisplayDone={toggleDisplayDone}/>
        <ListeGoal listeGoal={sampleGoals} displayDone={displayDone} openModalDel={openModalDel} openModalDone={openModalDone} openModalEdit={openModalEdit}/>
        <AddGoal newGoalInput={newGoalInput} setNewGoalInput={setNewGoalInput} ajouterLifeGoal={ajouterLifeGoal}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titre: {
    fontSize: 34,
    fontWeight: '900',
    color: '#3e3f2cff'
  }
});
