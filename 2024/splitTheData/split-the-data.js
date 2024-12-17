/*

This function takes in data in the following format about people and their favourite games.

const gamerData = [
  {
    id: 1,
    name: "Katherine",
    faveGames: ["Minecraft", "Factorio"],
  },
  {
    id: 2,
    name: "Tim",
    faveGames: ["Bingo", "Minecraft"],
  },
];
The function splitTheData returns the data reorganised into a new object with keys of people, games and gamesPeopleLike.

So splitTheData(gamerData) returns:

{
    people: [
        {
            id: 1
            name: 'Katherine'
        },
        {
            id: 2
            name: 'Tim'
        }
    ],
    games: {
        1: 'Minecraft',
        2: 'Factorio',
        3: 'Bingo'
    }
    gamesPeopleLike: [
      [1,1], // Katherine likes Minecraft
      [1,2], // Katherine likes Factorio
      [2,3], // Tim likes Bingo
      [2,1]  // Tim likes Minecraft
    ]
}

*/

const splitTheData = (data) => {
  if (data.length === 0) {
    return {};
  }
//   const returnObject = {};

//   returnObject["people"] = [];
//   returnObject["games"] = {};
//   returnObject["gamesPeopleLike"] = [];
  const returnObject = {
    'people': [],
    'games': {},
    'gamesPeopleLike': []
  }
  let currentGameId = 1;

  data.forEach((element) => {
    element["faveGames"].forEach((game) => {
      const gamesValues = Object.values(returnObject["games"]);

      if (gamesValues.length === 0 || !gamesValues.includes(game)) {
        returnObject["games"][currentGameId] = game;
        currentGameId += 1;
      }

      for (const [key, value] of Object.entries(returnObject["games"])) {
        if (value === game) {
          returnObject["gamesPeopleLike"].push([element.id, Number(key)]);
        }
      }
    });

    returnObject["people"].push({
      id: element["id"],
      name: element["name"],
    });
  });

  return returnObject;
};

module.exports = splitTheData;
