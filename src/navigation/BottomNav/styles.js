import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
    bottomTabIcon: {
        marginBottom: height * -0.014,
    },

});
export default styles;
