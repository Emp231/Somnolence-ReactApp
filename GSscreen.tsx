import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import { Camera, useCameraDevice, useCameraPermission } from "react-native-vision-camera";



const GSscreen = () => {
    const deviceOne = useCameraDevice('back')
    const { hasPermission, requestPermission } = useCameraPermission()
    
    if (deviceOne == null) return <Text>NoCAMERA</Text>

    return (
        <Camera
          device={deviceOne}
          isActive={true}
        />
      )

}

export default GSscreen

