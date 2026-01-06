import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const CardGoal = ({ nomGoal, index, deleteGoal }) => {

  return (
        <View style={styles.listeCardGoal}>
            <Text style={styles.text}>{nomGoal}</Text>
            <Button
                title='X'
                color='#D5B994'
                onPress={() => deleteGoal(index)}/>
        </View>
    );
};

const styles = StyleSheet.create({
  text : {
    fontWeight: '600',
    color: '#717258ff',
  },
  listeCardGoal: {
    marginTop:2,
    paddingTop : 7,
    paddingBottom : 7,
    paddingLeft : 10,
    paddingRight : 10,
    borderWidth: 1,
    borderColor: '#717258ff',
    backgroundColor: '#F7F3F2',
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