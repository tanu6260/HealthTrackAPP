import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const { height, width } = Dimensions.get('window')

const InputBox = (config) => {
    const { placeholder, onChangeText, value, keyboardType, editable, autoCapitalize, name } = config

    return (
        <View style={styles.container}>

            <MaterialIcons
                name={name}
                size={20}
                color={'red'}
                style={styles.bottomTabIcon}
            />
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={'gray'}
                onChangeText={onChangeText}
                value={value}
                keyboardType={keyboardType}
                editable={editable}
                style={styles.input}
                autoCapitalize={autoCapitalize}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        width: width * .94,
        borderRadius: 10,
        backgroundColor: 'white',

        paddingLeft: width * .03,

        borderColor: 'gray',
        marginBottom: height * .03,
    },

    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: 'black', fontFamily: '' },

    input: {

        fontSize: width * .038,
        color: 'black',

    },
    bottomTabIcon: {
        color: 'black',
        textAlignVertical:'center',
        marginBottom:-3
    }

});

export default InputBox;
