import { Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        flex: 1,
    },
    innerContainer: {
        backgroundColor: 'white',
        alignSelf: 'center',
        width: width * 0.94
    },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: 'black', textAlign:'center' , marginTop:height*0.04,},
   
})

export default styles;