import { StatusBar } from 'expo-status-bar';
import React from "react";
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
} from 'react-native';

const Header1 = () =>
    (
        <Text style={styles.title}>Welcome to my android app!</Text>
    );

const Separator = () => <View style={styles.separator} />;

const ALittleButton = () =>
    (
        <Button
            title="Press me"
            onPress={() => Alert.alert('Simple Button pressed')}
        />
    );

function App() {
  return (
    <View style={styles.container}>
      <Header1/>
      <Text>Testing stuff</Text>
      <Separator/>
      <Separator/>
      <ALittleButton/>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    textShadowColor: 'black',
    marginVertical: 50,
    fontSize: 20,
    fontStyle: 'italic',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;