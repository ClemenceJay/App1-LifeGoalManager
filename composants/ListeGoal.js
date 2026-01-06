import React from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import CardGoal from './CardGoal'

const ListeGoal = ({ listeGoal, openModalDel }) => {

  return (
      <FlatList
        style={styles.listeGoal}
        data={listeGoal}
        renderItem={({item, index}) => <CardGoal nomGoal={item} index={index} openModalDel={openModalDel}/>}
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
    maxHeight: '65%'
  }
});

export default ListeGoal;