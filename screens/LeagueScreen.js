// LeagueScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import * as dataUtils from '../utils/dataUtils';

const LeagueScreen = ({ route, navigation }) => {
  const { leagueId } = route.params;
  const participants = dataUtils.getParticipantsByLeagueId(leagueId);
  const [sortedParticipants, setSortedParticipants] = useState([]);

  const handleSortByAlphabet = () => {
    const sorted = dataUtils.sortParticipantsByAlphabet(participants);
    setSortedParticipants(sorted);
  };

  const handleParticipantPress = (driverId) => {
    navigation.navigate('Driver', { leagueId, driverId });
  };

  return (
    <View>
      <Button title="Sort Alphabetically" onPress={handleSortByAlphabet} />

      <Text>Participants:</Text>
      <FlatList
        data={sortedParticipants.length > 0 ? sortedParticipants : participants}
        keyExtractor={item => item.driver_id.toString()}
        renderItem={({ item }) => (
          <Button title={`${item.firstname} ${item.lastname}`} onPress={() => handleParticipantPress(item.driver_id)} />
        )}
      />
    </View>
  );
};

export default LeagueScreen;
