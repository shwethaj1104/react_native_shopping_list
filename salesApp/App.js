// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, Image, Button, Alert,Platform,StatusBar ,
  Dimensions
} from 'react-native';


export default function App() {
  //Dimensios component will not get us updated dimensions when phone is switched from portrait to landscape so we use useDimensions hook
  console.log(Dimensions.get("screen"))
  // console.log(useImageDimensions())
  const handlePress=()=>{
    console.log("text click")
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text numberOfLines={1} onPress={handlePress}>Welcome</Text> */}

      {/* image inside project */}
      {/* <Image source={require('./assets/favicon.png')}/> */}

      {/* image from web */}
      {/* <Image fadeDuration={1000} source={{
        width:200,
        height:200,
        uri:"https://picsum.photos/200/300"}}/> */}

      {/* works both on ios and android */}
        {/* <Button title='ALERT' 
        onPress={()=>
        Alert.alert("Mytitle", "my message", [
          {text:"Yes",onPress:()=>console.log("Yes")},
          {text:"No",onPress:()=>console.log("No")}
        ])}>
        </Button> */}

        {/* works only on ios */}
        {/* <Button title='prompt' onPress={()=>
        Alert.prompt("Mytitle", "my message", text=>console.log("prompted"))}></Button> */}

      {/* occupies exactly half of the screen */}
        {/* <View
        style={{backgroundColor:"dodgerblue",width:"50%",height:70}}></View> */}
        {/* flex */}
        <View style={{backgroundColor:"white",flex:1,flexDirection:'column',alignItems:"center"}}>
          <View style={{backgroundColor:"dodgerblue", width:100,height:100, alignSelf:"flex-start"}} />
          <View style={{backgroundColor:"gold",  width:100,height:100}} />
          <View style={{backgroundColor:"tomato", width:100,height:100}} />
        </View>

      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent:'center',
    // alignItems:'center',
    // paddingTop:Platform.OS==='android' ? 20 : 0
    paddingTop:Platform.OS==='android' ? StatusBar.currentHeight : 0
  },
});
