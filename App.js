import { StatusBar } from 'expo-status-bar'; 
import React,{Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends Component{
  renderItem =()=>{
    
  }

  render(){
    return (
    <View style={styles.container}>
      <FlatList
        
      />
    </View>
   );
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
