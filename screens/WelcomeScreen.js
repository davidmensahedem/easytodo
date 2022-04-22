import React from 'react';
import { ImageBackground, StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import AppButton from '../components/button';









export default function WelcomeScreen({navigation}) {
    return (
        <ImageBackground resizeMethod="contain" style={styles.backgroundImage} source={require("../assets/todo-background-image.jpg")}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo.png")} />
                <Text style={styles.logoText}>EasyTodo</Text>
            </View>
            <AppButton title="Add Task" onPress={()=>navigation.push("Tasks")} color="#4caf50"/>
            
           
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
        backgroundColor: "#f1f1f1",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 20

    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20
    },
    logoText: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    }
});


