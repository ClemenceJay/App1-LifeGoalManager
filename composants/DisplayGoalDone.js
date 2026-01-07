import React from 'react';
import { Button, StyleSheet } from 'react-native';

const DisplayGoalDone = ({ toggleDisplayDone, displayDone }) => {
    let buttonTitle = displayDone? "Masquer mes goals terminés" : "Afficher tous mes goals";
    return (
        <Button
        title={buttonTitle}
        color='#3e3f2cff'
        onPress={() => toggleDisplayDone()}/>
    );
};

const styles = StyleSheet.create({

});

export default DisplayGoalDone;