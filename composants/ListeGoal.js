import React from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import CardGoal from './CardGoal'

const ListeGoal = ({ listeGoal, displayDone, openModalDel, openModalDone, openModalEdit, openModalChild }) => {
  
  let listToDisplay = listeGoal;
  
  // On créé une nouvelle liste sans les goal avec le statut done (sauf si on demande l'affichage de ces goal)
  if (!displayDone) {
    listToDisplay = listToDisplay.filter((goal) => !goal.done)
  }
  
  return (
    <FlatList
    style={styles.listeGoal}
    data={listToDisplay}
    renderItem={(goal) => {
        return <CardGoal goal={goal.item} openModalDel={openModalDel} openModalDone={openModalDone} openModalEdit={openModalEdit} openModalChild={openModalChild}/>}}
      />
    );
  };
  
const styles = StyleSheet.create({
  text : {
    color: 'white',
  },
  listeGoal: {
    margin: 20,
    flexGrow: 0,
    flexShrink: 1,
    marginRight: 5,
    marginLeft: 5,
    maxHeight: '65%',
  }
});

export default ListeGoal;