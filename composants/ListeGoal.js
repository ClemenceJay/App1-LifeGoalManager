import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import CardGoal from './CardGoal'

const ListeGoal = ({ listeGoal, deleteGoal }) => {

  return (
    <View style={styles.listeGoal}>
      {listeGoal.map((goal, index) => (
        <CardGoal nomGoal={goal} key={index} index={index} deleteGoal={deleteGoal}/>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  text : {
    color: 'white',
  },
  listeGoal: {
    margin: 20
  }
});

export default ListeGoal;