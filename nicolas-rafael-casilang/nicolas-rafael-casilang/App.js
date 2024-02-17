import { Text, View, StyleSheet, Image, Switch } from 'react-native';
import {useState} from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [Enable, setEnable] = useState("");

  // Toggle function 
  const toggle = (state)=>{ 
    setEnable(state); 
  } 

  return (
    <View style={{backgroundColor: Enable ? "yellow" : "black"}}>
      <Text style={{textAlign: 'center', marginTop: 30, color: Enable ? "black" : "white"}}>Created by Nicolas Rafael Casilang</Text>
      <Text style={{textAlign: 'center', marginTop: 200, fontSize: 30, color: Enable ? "black" : "white"}}>AMC MP1</Text>
      <View style={styles.container}>
        <Image source={Enable ? require('./assets/Light.jpg') : require('./assets/Bulb.jpg')} style={styles.image}/>
      </View>
      <View style={styles.container}>
        <Switch
        trackColor={{ false: "gray", true: "aqua" }} 
        thumbColor={Enable ? "blue" : "lightgray"} 
        onValueChange={toggle} 
        value={Enable} 
        style={{marginBottom: 30}}
        />
      </View>
      <Text style={{textAlign: 'center', fontSize: 17, marginBottom: 200, color: Enable ? "black" : "white"}}>{Enable ? "On" : "Off"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    marginTop: 30,
    height: 200,
    width: 200,
  }
});
