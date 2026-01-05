import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const CardGoal = ({ nomGoal, index, deleteGoal }) => {

  return (
        <View style={styles.listeCardGoal}>
            <Text style={styles.text}>{nomGoal}</Text>
            <Button
                title='X'
                color='#611961ff'
                onPress={() => deleteGoal(index)}/>
        </View>
    );
};

const styles = StyleSheet.create({
  text : {
    color: 'white',
  },
  listeCardGoal: {
    marginTop:2,
    paddingTop : 7,
    paddingBottom : 7,
    paddingLeft : 10,
    paddingRight : 10,
    backgroundColor: '#611961ff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    flexDirection:'row',
    justifyContent: 'space-between',
    gap:10,
    alignItems: 'center'
  }
});

export default CardGoal;