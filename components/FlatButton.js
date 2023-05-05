import { Pressable, StyleSheet, Text, View } from "react-native";
// import colors from "../constant/colors";

function FlatButton({children, onPress, style,text}){
    return <Pressable style={({pressed})=>pressed && styles.pressed} onPress={onPress}>
    <View style={[styles.outerContainer, style]}>
        <Text style={[styles.innerText,text]}>{children}</Text>
    </View>
</Pressable>
}
export default FlatButton

const styles = StyleSheet.create({
    outerContainer: {
      marginHorizontal: 20,
      width: 70,
      height: 40,
      justifyContent: 'center',
      borderRadius: 10,
      overflow: 'visible',
    },
    innerText:{
      textAlign: 'center',
      fontSize: 18,
      textDecorationLine:'underline'
    },
    pressed: {
      opacity: 0.75,
      overflow: 'visible',
      borderRadius: 10,
      color: 'white'

    }
  });