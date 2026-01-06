import React from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import CardGoal from './CardGoal'

const ListeGoal = ({ listeGoal, deleteGoal }) => {

  return (
      <FlatList
        style={styles.listeGoal}
        data={listeGoal}
        renderItem={({item, index}) => <CardGoal nomGoal={item} index={index} deleteGoal={deleteGoal}/>}
      />
    );
  };
  
const styles = StyleSheet.create({
  text : {
    color: 'white',
  },
  listeGoal: {
    margin: 20,
    flexShrink:1,
    flexGrow: 0
  }
});

export default ListeGoal;