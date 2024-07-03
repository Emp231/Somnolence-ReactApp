import { StyleSheet, Text, View, TouchableOpacity    } from "react-native";
import React from "react";

const Home = ({ navigation }: { navigation: any }) => {
    return(
        <View style={styles.container}>

        <Text style={styles.topText}>
            Welcome to Somnolence!
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("GSscreen")}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Helpscreen")}>
        <Text style={styles.buttonText}>Help</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Aboutscreen")}>
        <Text style={styles.buttonText}>About</Text>
      </TouchableOpacity>
      </View>
    )
}

export default Home
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    button: {
      backgroundColor: '#3498db',
      width: '80%', 
      marginBottom: 20,
      paddingVertical: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
    topText: {
        paddingVertical:0,
        marginBottom:200,
        fontSize:46,
        fontWeight:'900'
    }
  });
