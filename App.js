import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from 'react';


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
    <View style={styles.container}>
      <Text style={styles.titre}>Mes Life Goal:</Text>
      <View style={styles.listeGoal}>
        {sampleGoals.map((goal, index) => (
          <View key={index} style={styles.cardGoal}>
            <Text style={styles.text} >{goal}</Text>
            <Button
               title='X'
               color='#611961ff'
               onPress={() => deleteGoal(index)}/>
          </View>
        ))}
      </View>
      <View  style={styles.containerRow}>
        <TextInput 
          value={newGoalInput}
          onChangeText={setNewGoalInput}
          style={styles.input}
          placeholder='Nouvelle tache'/>
        <Button
          title='Add'
          color='#611961ff'
          onPress={ajouterLifeGoal}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    color: 'white',
  },
  bold: {
    fontWeight: 'bold'
  },
  titre: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  listeGoal: {
    margin: 20
  },
  cardGoal: {
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
  },
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
