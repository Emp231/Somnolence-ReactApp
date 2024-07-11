import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Camera, useCameraDevice, useCameraPermission } from "react-native-vision-camera";

const GSscreen = () => {
    
    const device = useCameraDevice('back')
    const { hasPermission, requestPermission } = useCameraPermission()

    if(device == null) return <Text>NOCAMERA</Text>

    return(
        <Camera
        device={device}
        isActive={true} 
        />
    )
}

export default GSscreen
