const URL = "https://api.rawg.io/api/games";

let Genres = new Map();
let Platforms = new Map();
let Store = new Map();

Platforms.set("xbox", 1);
Platforms.set("playStation4", 18);
Platforms.set("pc", 4);

Store.set("steam", 1);
Store.set("playstationstore", 3);
Store.set("xboxstore", 2);
Store.set("epicgames", 11);

Genres.set("action", 4);
Genres.set("indie", 51);
Genres.set("adventure", 3);
Genres.set("rpg", 5);
Genres.set("strategy", 10);
Genres.set("shooter", 2);
Genres.set("casual", 40);
Genres.set("simulation", 14);
Genres.set("puzzle", 7);
Genres.set("arcade", 11);
Genres.set(" platformer", 83);
Genres.set(" racing", 1);
Genres.set("sports", 15);
Genres.set("massivelyMultiplayer", 59);
Genres.set(" family", 19);
Genres.set("fighting", 6);
Genres.set("boardGames", 28);
Genres.set("educational", 34);
Genres.set("card", 17);

module.exports = {
  Platforms: Platforms,
  Store: Store,
  Genres: Genres,
  URL: URL,
};
