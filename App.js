import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, ImageBackground, Modal } from 'react-native';
import React, {useState} from 'react';
import ListeGoal from './composants/ListeGoal';
import AddGoal from './composants/AddGoal';
import ModalDel from './composants/ModalDel';
import ModalEdit from './composants/ModalEdit';

const background = require('./assets/background.jpg');

export default function App() {
  
  const [modalDelVisible, setModalDelVisible] = useState(false);
  const [modalEditVisible, setModalEditVisible] = useState(false);
  const [indexToDelete, setIndexToDelete] = useState("");
  const [indexToEdit, setIndexToEdit] = useState("");
  const [nomGoalToEdit, setNomGoalToEdit] = useState("");
  const [newGoalInput, setNewGoalInput] = useState("");
  const [sampleGoals, setSampleGoals] = useState([
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon"
  ]);

  const ajouterLifeGoal = () => {
    setSampleGoals([...sampleGoals, newGoalInput]);
    setNewGoalInput("");
  }
  
  const deleteGoal = (goalToDelete) => {
    setSampleGoals(sampleGoals.filter((_,index) => index != goalToDelete));
    setModalDelVisible(false);
    setIndexToDelete("");
  }
  
  const editGoal = (goalToEdit) => {
    setSampleGoals(precedentsGoal => precedentsGoal.map((prevGoal, i) => i === goalToEdit ? nomGoalToEdit : prevGoal))
    setModalEditVisible(false);
    setIndexToEdit("");
    setNomGoalToEdit("");
  }

  const openModalDel = (goalToDelete) => {
    setModalDelVisible(true);
    setIndexToDelete(goalToDelete);
  }

  const openModalEdit = (goalToEdit, nomGoal) => {
    setModalEditVisible(true);
    setIndexToEdit(goalToEdit);
    setNomGoalToEdit(nomGoal);
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
      <View style={styles.container}>
        <Text style={styles.titre}>Mes Life Goal:</Text>
        <ListeGoal listeGoal={sampleGoals} openModalDel={openModalDel} openModalEdit={openModalEdit}/>
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
