import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, Image, Button, Alert,Platform } from 'react-native';

export default function App() {
  const handlePress=()=>{
    console.log("text click")
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Welcome</Text>
      {/* <Image source={require('./assets/favicon.png')}/> */}
      <Image fadeDuration={1000} source={{
        width:200,
        height:200,
        uri:"https://picsum.photos/200/300"}}/>

        <Button title='ALERT' 
        onPress={()=>
        Alert.alert("Mytitle", "my message", [
          {text:"Yes",onPress:()=>console.log("Yes")},
          {text:"No",onPress:()=>console.log("No")}
        ])}>
        </Button>

        {/* works only on ios */}
        <Button title='prompt' onPress={()=>
        Alert.prompt("Mytitle", "my message", text=>console.log("prompted"))}></Button>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent:'center',
    alignItems:'center',
    paddingTop:Platform.OS==='android' ? 20 : 0
  },
});
