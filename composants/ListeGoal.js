import React from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import CardGoal from './CardGoal'

const ListeGoal = ({ listeGoal, displayDone, openModalDel, openModalDone, openModalEdit }) => {
  // On créé une nouvelle liste en ajoutant l'index d'origine à l'objet
  let listToDisplay = listeGoal.map((goal,index) => {
    return {goal, index}
  })
  
  // On créé une nouvelle liste sans les goal avec le statut done (sauf si on demande l'affichage de ces goal)
  if (!displayDone) {
    listToDisplay = listToDisplay.filter((item) => !item.goal.done)
  }
  
  return (
    <FlatList
    style={styles.listeGoal}
    data={listToDisplay}
    renderItem={({item}) => {
        return <CardGoal goal={item.goal} index={item.index} openModalDel={openModalDel} openModalDone={openModalDone} openModalEdit={openModalEdit}/>}}
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