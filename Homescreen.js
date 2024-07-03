import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {

    const navigation = useNavigation()
    const onPressGetStarted = () => {
        navigation.navigate('Mainscreen')
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Somnolence!</Text>
  
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>About</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  // Styles
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff', // Adjust as needed
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 50, // Adjust spacing from top
    },
    buttonContainer: {
      marginTop: 50, // Adjust spacing between title and buttons
    },
    button: {
      backgroundColor: '#3498db', // Example button color
      padding: 15,
      marginVertical: 10,
      width: 200,
      alignItems: 'center',
      borderRadius: 10,
    },
    buttonText: {
      fontSize: 18,
      color: '#fff', // Button text color
    },
  });
  
  export default HomeScreen;