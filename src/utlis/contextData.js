import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HealthDataContext = createContext();

export const HealthDataProvider = ({ children }) => {
    const [weeklyData, setWeeklyData] = useState([]);
    const [dailyGoals, setDailyGoals] = useState({
        waterIntake: 2,
        steps: 10000,
        sleepHours: 8,
    });

    useEffect(() => {
        loadWeeklyData();
    }, []);

    const saveDailyData = async (data) => {
        const existingData = await AsyncStorage.getItem('healthData');
        const updatedData = existingData ? JSON.parse(existingData) : [];
        updatedData.push(data);
        await AsyncStorage.setItem('healthData', JSON.stringify(updatedData));
        setWeeklyData(updatedData);
    };


    const loadWeeklyData = async () => {
        const data = await AsyncStorage.getItem('healthData');
        if (data) setWeeklyData(JSON.parse(data));
    };


    const calculateCompletion = (actual, goal) => {
        return Math.min((actual / goal) * 100, 100).toFixed(0);
    };

    return (
        <HealthDataContext.Provider
            value={{
                weeklyData,
                saveDailyData,
                dailyGoals,
                calculateCompletion,
            }}
        >
            {children}
        </HealthDataContext.Provider>
    );
};
