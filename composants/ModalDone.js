import React from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import CardGoal from './CardGoal'

const ModalDone = ({ indexToDone, setModalDoneVisible, doneGoal }) => {

    return (
      <View style={styles.modal}>
        <View style={styles.modalContent}>
            <Text>Bravo !</Text>
            <View style={styles.containerRow}>
                <Button
                    style={styles.boutons}
                    title='CONTINUER'
                    color='#D5B994'
                    onPress={() => {
                        setModalDoneVisible(false);
                        doneGoal(indexToDone);
                    }}/>
            </View>
        </View>
      </View>
    );
};
  
const styles = StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#5a5a5aab"
    },
    modalContent: {
        backgroundColor: "#F7F3F2",
        padding:15,
        borderRadius:15,
        gap:10

    },
    containerRow: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center'
    },
    text : {
        color: 'white',
    }
});

export default ModalDone;