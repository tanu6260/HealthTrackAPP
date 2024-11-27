import React, { useContext } from "react";
import { ScrollView, Text, View, FlatList } from "react-native";
import styles from "./styles";

import { HealthDataContext } from "../../utlis/contextData";
import BarCom from "../../component/BarCom";

const WeeklyReport = () => {
    const { weeklyData, dailyGoals } = useContext(HealthDataContext);

    const getDayName = (dateString) => {
        const date = new Date(dateString);
        const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return dayNames[date.getDay()];
    };

    const labels = weeklyData.map((day) => getDayName(day.date));

    const calculateCompletion = (actual, goal) => {
        return Math.min((actual / goal) * 100, 100).toFixed(0);
    };

    const average = (data, key) =>
        data.length ? data.reduce((sum, item) => sum + (item[key] || 0), 0) / data.length : 0;

    const chartData = [
        {
            id: '1',
            title: "Water Intake (Liters)",
            labels: labels,
            data: weeklyData.map((day) => parseFloat(day.waterIntake) || 0),
            unit: "L",
            goalTittle: `Water Intake Goal: ${dailyGoals.waterIntake}L`,
            Completion: `Completion: ${calculateCompletion(average(weeklyData, 'waterIntake'), dailyGoals.waterIntake)}%`,
            name: 'water-drop' 
        },
        {
            id: '2',
            title: "Steps Count",
            labels: labels,
            data: weeklyData.map((day) => parseInt(day.steps) || 0),
            unit: "",
            goalTittle: `Steps Goal: ${dailyGoals.steps}`,
            Completion: `Completion: ${calculateCompletion(average(weeklyData, 'steps'), dailyGoals.steps)}%`,
            name: 'do-not-step'
        },
        {
            id: '3',
            title: "Sleep Hours",
            labels: labels,
            data: weeklyData.map((day) => parseFloat(day.sleepHours) || 0),
            unit: "hrs",
            goalTittle: `Sleep Hours Goal: ${dailyGoals.sleepHours} hrs`,
            Completion: `Completion: ${calculateCompletion(average(weeklyData, 'sleepHours'), dailyGoals.sleepHours)}%`,
             name: 'mode-night'
        },
    ];

    const renderItem = ({ item }) => (
        <BarCom
            title={item.title}
            labels={item.labels}
            data={item.data}
            unit={item.unit}
            goalTittle={item.goalTittle}
            Completion={item.Completion}
            name= {item?.name}
        />
    );

    return (
        <View style={styles.mainContainer}>
            <ScrollView style={styles.innerContainer}>
                <Text style={styles.title}>Weekly Overview</Text>
                <FlatList
                    data={chartData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </ScrollView>
        </View>
    );
};

export default WeeklyReport;
