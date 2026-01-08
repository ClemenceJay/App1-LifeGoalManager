import React from 'react';
import { Button, Pressable, StyleSheet, Text, Image, View } from 'react-native';

const CardGoal = ({ goal, openModalDel, openModalDone, openModalEdit, openModalChild }) => {

  // Modification de l'image si le goal est marqué comme "done" ou pas
  const imageDone = goal.done ? require('../assets/undo.png') : require('../assets/check-mark.png');

  // On affiche le bouton "done" uniquement aux taches qui n'ont pas d'enfant
  // On affiche le bouton d'ajout d'enfant uniquement aux taches qui n'ont pas de parents

  return (
        <View style={[styles.listeCardGoal, goal.done && styles.done]}>
          <Pressable>
            <Text style={styles.text} onPress={() => openModalEdit(goal)}>{goal.nom}</Text>
          </Pressable>
          <View style={styles.containerRow}>
            {goal.child == "" ?
              <Pressable onPress={() => openModalDone(goal)}>
                <Image
                source={imageDone}
                style={{width: 20, height: 20}}/>
              </Pressable> : null
            }
            {goal.parent == null && !goal.done ?
            <Pressable onPress={() => openModalChild(goal.id)}>
              <Image
              source={require('../assets/addGoal.png')}
              style={{width: 25, height: 25}}/>
            </Pressable> : null
            }
            <Pressable onPress={() => openModalDel(goal)}>
              <Image
              source={require('../assets/trash.png')}
              style={{width: 25, height: 25}}/>
            </Pressable>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
  text : {
    fontWeight: '600',
    color: '#717258ff',
    maxWidth: 200
  },
  listeCardGoal: {
    marginTop:2,
    paddingTop : 7,
    paddingBottom : 7,
    paddingLeft : 10,
    paddingRight : 10,
    borderWidth: 1,
    borderColor: '#717258ff',
    borderRadius:15,
    flexDirection:'row',
    justifyContent: 'space-between',
    gap:10,
    alignItems: 'center',
    backgroundColor: '#F7F3F2',
  },
  done: {
    backgroundColor: '#abababff',
  },
  containerRow: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  },
});

export default CardGoal;