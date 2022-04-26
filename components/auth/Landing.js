import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

export default function Landing({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", backgroundColor: "red" }}>
            <Button title='register'
                onPress={() => { navigation.navigate("Register") }}
            />
            <Button title='login'
                onPress={() => { navigation.navigate("Login") }}
            />
        </View>
    )
}