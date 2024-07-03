import React from "react";
import {
    View, 
    Text, 
    StyleSheet
} from 'react-native';

const Mainscreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Make sure to give the app permission to use your camera
        </Text>
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    },
    text: {
    fontSize: 18,
    textAlign: 'center',
    },
});

export default Mainscreen;
