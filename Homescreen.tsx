import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackPramList } from "./App";



const Home = ({ navigation }: { navigation: any }) => {
    return(
        <View style={styles.container}>
        <Button title="Get Started" onPress={() => navigation.navigate("GSscreen")}></Button>
        <Button title="Help" onPress={() => navigation.navigate("Helpscreen")}></Button>
        <Button title="About" onPress={() => navigation.navigate("Aboutscreen")}></Button>
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
      width: '800%', 
      marginBottom: 20,
      paddingVertical: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
  });
