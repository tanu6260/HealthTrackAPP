import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import React from 'react';
const { height, width } = Dimensions.get('window')
const ButtonCom = (config) => {
    const {
        btn,
        onPress,
    } = config
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
            style={
                styles.btncontainer
            }>
            <Text style={styles.button}>{btn}</Text>
        </TouchableOpacity>
    );
};

export default ButtonCom;
const styles = StyleSheet.create({
    btncontainer: {
        marginTop: height * 0.03,
        alignItems: 'center',
        width: width * 0.9,
        backgroundColor: 'orange',
        justifyContent: 'center',
        borderRadius: width * 0.07,
        height: height * 0.06,
        textAlignVertical:'center'
    },
    button: {
        color: 'white',
        fontSize: width * 0.05,
        marginBottom: -3,
    },
});
