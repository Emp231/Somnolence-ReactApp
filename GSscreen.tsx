import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Camera, useCameraDevice, useCameraPermission, useCameraDevices } from "react-native-vision-camera";



const GSscreen = () => {

    useEffect(() => {
        checkPermission();
    }, []);

    const checkPermission = async () => {
        const newCameraPermission = await Camera.requestCameraPermission();
        
    };

    const device = useCameraDevice('back')
    const { hasPermission, requestPermission } = useCameraPermission()

    if(device == null) return <Text>NOCAMERA</Text>

    return(
        <View style={{flex:1}}>
            <Camera
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true} 
            />
        </View>
    )

}

export default GSscreen
