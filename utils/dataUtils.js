// dataUtils.js
import data from '../data.json';

export const getLeagues = () => {
  return data.map(league => ({
    id: league.league_id,
    title: league.league_title,
  }));
};

export const getParticipantsByLeagueId = (leagueId) => {
  const league = data.find(league => league.league_id === leagueId);
  return league ? league.drivers : [];
};

export const getDriverById = (leagueId, driverId) => {
  const league = data.find(league => league.league_id === leagueId);
  if (league) {
    const driver = league.drivers.find(driver => driver.driver_id === driverId);
    return driver ? driver : null;
  }
  return null;
};

export const sortParticipantsByAlphabet = participants => {
  return participants.slice().sort((a, b) => a.firstname.localeCompare(b.firstname));
};

  
