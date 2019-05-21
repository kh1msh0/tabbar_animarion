import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tabbar from "./src/components/Tabbar"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabbar/>
        {/* <Text>ascsdcsdc</Text> */}
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ea3345',
    justifyContent: 'flex-end',
  },
});
