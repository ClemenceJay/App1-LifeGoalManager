import React from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const CardGoal = ({ nomGoal, index, openModalDel, openModalEdit }) => {

  return (
        <View style={styles.listeCardGoal}>
          <Pressable>
            <Text style={styles.text} onPress={() => openModalEdit(index, nomGoal)}>{nomGoal}</Text>
          </Pressable>
          <Button
              title='X'
              color='#D5B994'
              onPress={() => openModalDel(index)}/>
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
    borderRadius:15,
    flexDirection:'row',
    justifyContent: 'space-between',
    gap:10,
    alignItems: 'center'
  }
});

export default CardGoal;