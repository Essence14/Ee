import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './components/auth/landing';
import Register from './components/auth/register';
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBs209b9rgkAUWTDwdxmEY9SWIc_-5CZr0",
  authDomain: "social-media-9cfde.firebaseapp.com",
  projectId: "social-media-9cfde",
  storageBucket: "social-media-9cfde.appspot.com",
  messagingSenderId: "566292505135",
  appId: "1:566292505135:web:cf255331611dc0397edcda"
};
if (firebase.Apps.length === 0) {
  firebase.initialiseApp(firebaseConfig)
}
const Stack = createStackNavigator()
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      loggedIn: false
    }
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.setState({
          loaded: true,
          loggedIn: false
        })
      }
      else {
        this.setState({ loggedIn: true, loaded: true })
      }
    })
  }
  render() {
    const { loggedIn, loaded } = this.state
    if (!loaded) {
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>
          loading
        </Text>
      </View>
    }
    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={Landing} options={{ HeadersShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ HeadersShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>
          ThisAccountIsAlreadyInUse
        </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
