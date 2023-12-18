// DriverScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getDriverById } from '../utils/dataUtils';

const DriverScreen = ({ route }) => {
  const { leagueId, driverId } = route.params;
  const driver = getDriverById(leagueId, driverId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`${driver.firstname} ${driver.lastname}`}</Text>
      <Text>{`Car: ${driver.car}`}</Text>
      <Text>{`Total Points: ${calculateTotalPoints(driver.race)}`}</Text>

      <Text style={styles.subtitle}>Race Details:</Text>
      <FlatList
  data={driver.race}
  keyExtractor={(item, index) => `${item.driver_id || index}_${item.race_id || index}`}
  renderItem={({ item }) => (
    <View style={styles.raceItem}>
      <Text>{`Race: ${item.race_information}`}</Text>
      <Text>{`Qualification Position: ${item.qualification_position}`}</Text>
      <Text>{`Qualification Result: ${item.qualification_result}`}</Text>
      <Text>{`Qualification Points: ${item.qualification_points}`}</Text>
      <Text>{`Tandem Result: ${item.tandem_result}`}</Text>
      <Text>{`Tandem Points: ${item.tandem_points}`}</Text>
    </View>
  )}
/>

    </View>
  );
};

const calculateTotalPoints = (races) => {
    return races.reduce((total, race) => {
      const tandemPoints = race.tandem_points || 0;
      return total + tandemPoints;
    }, 0);
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  raceItem: {
    marginBottom: 16,
  },
});

export default DriverScreen;
