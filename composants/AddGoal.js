import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const AddGoal = ({ newGoalInput, setNewGoalInput, ajouterLifeGoal }) => {

  return (
    <View style={styles.containerRow}>
      <TextInput 
        value={newGoalInput}
        onChangeText={() => setNewGoalInput}
        style={styles.input}
        placeholder='Nouvelle tache'/>
      <Button
        title='Add'
        color='#3e3f2cff'
        onPress={ajouterLifeGoal}/>
    </View>
  );
};

const styles = StyleSheet.create({
  containerRow: {
    flexDirection: 'row',
    gap: 5
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: 200
  }
});

export default AddGoal;