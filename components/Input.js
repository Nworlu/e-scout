import { StyleSheet, Text, TextInput, View } from "react-native"
// import colors from "../constant/colors"

function Input({textConfig,style,inputDesign, label}){
    return <View style={[styles.inputContainer, style]}>
        <Text style={styles.label} >{label}</Text>
        <TextInput {...textConfig} style={[styles.input,inputDesign]} />
    </View>
}

export default Input

const styles = StyleSheet.create({
    inputContainer:{
        marginTop: 20
    },
    label:{
        marginVertical: 10,
        fontSize: 16
    },
    input:{
        borderWidth: 2,
        borderColor: 'lightgrey',
        paddingVertical: 13,
        borderRadius:5,
        color: 'black',
        fontSize: 16,
        paddingHorizontal: 10,
        fontWeight: 'bold',
    }
})