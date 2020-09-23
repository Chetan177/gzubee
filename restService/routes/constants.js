
const URL = "https://api.rawg.io/api/" 
const Platforms = {
  Xbox: 1,
  PlayStation4: 18,
  PC: 4,
};

const Store = {
  Steam: 1,
  PlayStationStore: 3,
  XboxStore: 2,
  EpicGames: 11,
};

const Genres = {
  Action: 4,
  Indie: 51,
  Adventure: 3,
  RPG: 5,
  Strategy: 10,
  Shooter: 2,
  Casual: 40,
  Simulation: 14,
  Puzzle: 7,
  Arcade: 11,
  Platformer: 83,
  Racing: 1,
  Sports: 15,
  MassivelyMultiplayer: 59,
  Family: 19,
  Fighting: 6,
  BoardGames: 28,
  Educational: 34,
  Card: 17,
};

module.exports = { Platforms: Platforms, Store: Store, Genres: Genres, URL: URL};
