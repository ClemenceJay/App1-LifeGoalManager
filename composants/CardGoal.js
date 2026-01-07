import React from 'react';
import { Button, Pressable, StyleSheet, Text, Image, View } from 'react-native';

const CardGoal = ({ goal, index, openModalDel, openModalDone, openModalEdit }) => {

  return (
        <View style={styles.listeCardGoal}>
          <Pressable>
            <Text style={styles.text} onPress={() => openModalEdit(index, goal)}>{goal.nom}</Text>
          </Pressable>
          <View style={styles.containerRow}>
            <Pressable onPress={() => openModalDone(index)}>
              <Image
              source={require('../assets/check-mark.png')}
              style={{width: 25, height: 25}}/>
            </Pressable>
            <Button
                title='X'
                color='#D5B994'
                onPress={() => openModalDel(index)}/>
          </View>
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
  },
  containerRow: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  },
});

export default CardGoal;