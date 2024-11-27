import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { BarChart } from "react-native-chart-kit";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const { width, height } = Dimensions.get("window");

const BarCom = (config) => {
    const { title, labels, data, goalTittle, Completion, name } = config
    return (
        <>

            <View style={styles.goalContainer}>
                <Text style={styles.goalTitle}>{goalTittle}</Text>
                <Text style={styles.goalCompletion}>
                    {Completion}
                </Text>
            </View>
            <View style={styles.iconContainer}>
                <MaterialIcons
                    name={name}
                    size={20}
                    color={'blue'}
                    style={styles.bottomTabIcon}
                />
                <Text style={styles.bartittle}>{title}</Text>
            </View>
            <BarChart
                data={{
                    labels: labels,
                    datasets: [{ data }],
                }}
                width={width * 0.9}
                height={height * 0.25}
                chartConfig={{
                    backgroundColor: "#1cc910",
                    backgroundGradientFrom: "#eff3ff",
                    backgroundGradientTo: "#efefef",
                    decimalPlaces: 1,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </>
    );
};



const styles = StyleSheet.create({
    bartittle: { fontSize: 16, fontWeight: "bold", marginVertical: 8, color: 'blue' },
    goalContainer: {
        marginBottom: 16,
    },
    goalTitle: {
        fontSize: 18,
        fontWeight: '400',
        color: 'red'
    },
    goalCompletion: {
        fontSize: 16,
        color: 'green'

    },
    iconContainer: {
        flexDirection: 'row',

    },
    bottomTabIcon: {
        color: 'blue',
        textAlignVertical: 'center',
        marginBottom: -3
    }

});

export default BarCom;
