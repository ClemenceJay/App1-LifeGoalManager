import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, ImageBackground, Modal,KeyboardAvoidingView } from 'react-native';
import React, {useState} from 'react';
import ListeGoal from './composants/ListeGoal';
import AddGoal from './composants/AddGoal';
import ModalDel from './composants/ModalDel';
import ModalEdit from './composants/ModalEdit';
import ModalDone from './composants/ModalDone';
import DisplayGoalDone from './composants/DisplayGoalDone';
import ModalNewChild from './composants/ModalNewChild';

const background = require('./assets/background.jpg');

export default function App() {
  
  const [displayDone, setDisplayDone] = useState(false);
  const [modalDelVisible, setModalDelVisible] = useState(false);
  const [modalDoneVisible, setModalDoneVisible] = useState(false);
  const [modalEditVisible, setModalEditVisible] = useState(false);
  const [modalAddChildVisible, setModalAddChildVisible] = useState(false);
  const [goalToDelete, setgoalToDelete] = useState("");
  const [indexToEdit, setIndexToEdit] = useState("");
  const [indexToDone, setIndexToDone] = useState("");
  const [idParent, setIdParent] = useState("");
  const [nomGoalToEdit, setNomGoalToEdit] = useState("");
  const [newGoalInput, setNewGoalInput] = useState("");
  const [sampleGoals, setSampleGoals] = useState([
    {id : 1, nom: "Faire les courses", done: false, parent:null, child: []},
    {id : 2, nom: "Perdre 5 kgs", done: false, parent:null, child: []},
    {id : 3, nom: "Apprendre un nouveau langage", done: false, parent:null, child: []}
  ]);

  const toggleDisplayDone = () => {
    setDisplayDone(!displayDone);
  }

  const addChild = (idParent) => {
    // création du goal enfant
    let newChild = {
      id: Date.now(),
      nom: newGoalInput,
      done: false,
      parent: idParent,
      child: []
    };
    // Ajout de l'id enfant chez le parent
    setSampleGoals(precedentsGoal => precedentsGoal.map((prevGoal) => {
      if(prevGoal.id === idParent) {
        let arrayChild = prevGoal.child;
        arrayChild.push(newChild.id);
        return {...prevGoal, child: arrayChild}
      }else{
        return prevGoal
      }
    }));

    // Ajout de l'enfant dans la liste des goals
    setSampleGoals([...sampleGoals, newChild]);
    setNewGoalInput("");
    setIdParent("");
    setModalAddChildVisible(false)
  }
  
  const ajouterGoalParent = () => {
    // Génération d'un nouvel objet avec un id unique (grace à Date.now())
    let newGoal = {
      id: Date.now(),
      nom: newGoalInput,
      done: false,
      parent: null,
      child: []
    }
    setSampleGoals([...sampleGoals, newGoal]);
    setNewGoalInput("");
  }
  
  const editChild = (parentId, childId) => {
    // on modifie le champ enfant du parent associé:
    setSampleGoals(precedentsGoal => precedentsGoal.map((prevGoal) => {
      if(prevGoal.id === parentId) {
        let arrayChildUpdate = prevGoal.child.filter((child) => child != childId);
        return {...prevGoal, child: arrayChildUpdate}
      }else{
        return prevGoal
      }
    }));
  }

  const deleteGoal = (goalToDelete) => {
    // on check si c'etait un élement parent pour pouvoir supprimer aussi ses goals enfants:
    if(goalToDelete.child != "") {
      setSampleGoals(sampleGoals.filter((item) => item.id != goalToDelete.id && item.parent != goalToDelete.id));
    }
    // Si non, suppression simple
    else {
      setSampleGoals(sampleGoals.filter((item) => item.id != goalToDelete.id));
    }

    // Si c'etait un enfant, il faut modifier le champ child de son parent associé
    if (goalToDelete.parent != null) {
      editChild(goalToDelete.parent, goalToDelete.id)
    }
    setModalDelVisible(false);
    setgoalToDelete("");
  }

  const doneGoal = (indexGoalToDone) => {
    setSampleGoals(precedentsGoal => precedentsGoal.map((prevGoal) => prevGoal.id === indexGoalToDone ? {...prevGoal, done: true} : prevGoal));
    setModalDoneVisible(false);
    setIndexToDone("");
  }
  
  const editGoal = (indexGoalToEdit) => {
    setSampleGoals(precedentsGoal => precedentsGoal.map((prevGoal) => prevGoal.id === indexGoalToEdit ? {...prevGoal, nom: nomGoalToEdit} : prevGoal));
    setModalEditVisible(false);
    setIndexToEdit("");
    setNomGoalToEdit("");
  }

  const openModalDel = (goalToDelete) => {
    setModalDelVisible(true);
    setgoalToDelete(goalToDelete);
  }

  const openModalDone = (goalToDone) => {
    setModalDoneVisible(true);
    setIndexToDone(goalToDone);
  }

  const openModalEdit = (goal) => {
    setModalEditVisible(true);
    setIndexToEdit(goal.id);
    setNomGoalToEdit(goal.nom);
  }

  const openModalChild = (idParent) => {
    setModalAddChildVisible(true);
    setIdParent(idParent);
  }

  return (
    <ImageBackground style={styles.container} source={background} resizeMode="cover">
      <Modal 
        animationType="fade"
        transparent={true}
        visible={modalDelVisible}>
          <ModalDel goalToDelete={goalToDelete} setModalDelVisible={setModalDelVisible} deleteGoal={deleteGoal}/>
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
      <Modal 
        animationType="fade"
        transparent={true}
        visible={modalAddChildVisible}>
          <ModalNewChild idParent={idParent} setModalAddChildVisible={setModalAddChildVisible} addChild={addChild}  newGoalInput={newGoalInput} setNewGoalInput={setNewGoalInput}/>
      </Modal>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.titre}>Mes Life Goal:</Text>
        <DisplayGoalDone displayDone={displayDone} toggleDisplayDone={toggleDisplayDone}/>
        <ListeGoal listeGoal={sampleGoals} displayDone={displayDone} openModalDel={openModalDel} openModalDone={openModalDone} openModalEdit={openModalEdit} openModalChild={openModalChild}/>
        <AddGoal newGoalInput={newGoalInput} setNewGoalInput={setNewGoalInput} ajouterGoalParent={ajouterGoalParent}/>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titre: {
    fontSize: 34,
    fontWeight: '900',
    color: '#3e3f2cff'
  }
});
