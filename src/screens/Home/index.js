import React, { useContext, useState } from "react";
import { ScrollView, Text, View, FlatList } from "react-native";
import styles from "./styles";
import InputBox from "../../component/inputbox";
import ButtonCom from "../../component/BottomCom";
import { HealthDataContext } from "../../utlis/contextData";


const Home = () => {
  const [waterIntake, setWaterIntake] = useState('');
  const [steps, setSteps] = useState('');
  const [sleepHours, setSleepHours] = useState('');
  const { saveDailyData } = useContext(HealthDataContext);

  const data = [
    { id: '1', placeholder: 'Water Intake (L)', value: waterIntake, onChangeText: setWaterIntake, name: 'water-drop' },
    { id: '2', placeholder: 'Steps', value: steps, onChangeText: setSteps, name: 'mode-night' },
    { id: '3', placeholder: 'Sleep Hours', value: sleepHours, onChangeText: setSleepHours, name: 'do-not-step' },
  ];

  const handleSave = () => {
    const today = new Date().toISOString().split('T')[0];
    const formData = { date: today, waterIntake, steps, sleepHours };
    console.log("saveDailyData", formData);
    saveDailyData(formData);
    setWaterIntake('');
    setSteps('');
    setSleepHours('');
  };

  const renderItem = ({ item }) => (
    <InputBox
      placeholder={item.placeholder}
      keyboardType="numeric"
      value={item.value}
      onChangeText={item.onChangeText}
      name={item.name}
    />
  );

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.innerContainer} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Log Today's Data</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item?.id}
        />
        <ButtonCom btn="Save" onPress={handleSave} />
      </ScrollView>
    </View>
  );
};

export default Home;
