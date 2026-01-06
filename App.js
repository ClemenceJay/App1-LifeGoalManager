import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';
import React, {useState} from 'react';
import ListeGoal from './composants/ListeGoal';
import AddGoal from './composants/AddGoal';

const background = require('./assets/background.jpg');

export default function App() {

  const [newGoalInput, setNewGoalInput] = useState("");
  const [sampleGoals, setSampleGoals] = useState([
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon"
  ]);

  const ajouterLifeGoal = () => {
      setSampleGoals([...sampleGoals, newGoalInput]);
      setNewGoalInput("");
  }

  const deleteGoal = (goalToDelete) => {
    setSampleGoals(sampleGoals.filter((_,index) => index != goalToDelete));
  }

  return (
    <ImageBackground style={styles.container} source={background} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.titre}>Mes Life Goal:</Text>
        <ListeGoal listeGoal={sampleGoals} deleteGoal={deleteGoal}/>
        <AddGoal newGoalInput={newGoalInput} setNewGoalInput={setNewGoalInput} ajouterLifeGoal={ajouterLifeGoal}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titre: {
    fontSize: 34,
    fontWeight: '900',
    color: '#3e3f2cff'
  }
});
