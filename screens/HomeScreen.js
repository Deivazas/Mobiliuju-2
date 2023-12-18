// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getLeagues } from '../utils/dataUtils';

const HomeScreen = ({ navigation }) => {
  const leagues = getLeagues();

  const handleLeaguePress = (leagueId) => {
    navigation.navigate('League', { leagueId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a League</Text>
      {leagues.map(league => (
        <Button
          key={league.id}
          title={league.title}
          onPress={() => handleLeaguePress(league.id)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
