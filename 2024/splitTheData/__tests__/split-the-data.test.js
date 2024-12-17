const splitTheData = require("../split-the-data");

describe("splits data and reorganizes data into a new object with different keys", () => {
  test("empty array returns an empty object", () => {
    const input = [];
    const output = {};
    expect(splitTheData(input)).toEqual(output);
  });
  test("array returns an object - people array", () => {
    const input = [
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
    const output = {
      people: [
        {
          id: 1,
          name: "Katherine",
        },
        {
          id: 2,
          name: "Tim",
        },
      ],
      games: {
        1: "Minecraft",
        2: "Factorio",
        3: "Bingo",
      },
      gamesPeopleLike: [
        [1, 1], // Katherine likes Minecraft
        [1, 2], // Katherine likes Factorio
        [2, 3], // Tim likes Bingo
        [2, 1], // Tim likes Minecraft
      ],
    };
    const people = [
      {
        id: 1,
        name: "Katherine",
      },
      {
        id: 2,
        name: "Tim",
      },
    ];
    expect(splitTheData(input)["people"]).toEqual(people);
  });
  test("array returns an object - games object", () => {
    const input = [
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
    const output = {
      people: [
        {
          id: 1,
          name: "Katherine",
        },
        {
          id: 2,
          name: "Tim",
        },
      ],
      games: {
        1: "Minecraft",
        2: "Factorio",
        3: "Bingo",
      },
      gamesPeopleLike: [
        [1, 1], // Katherine likes Minecraft
        [1, 2], // Katherine likes Factorio
        [2, 3], // Tim likes Bingo
        [2, 1], // Tim likes Minecraft
      ],
    };
    const games = {
      1: "Minecraft",
      2: "Factorio",
      3: "Bingo",
    };
    expect(splitTheData(input)["games"]).toEqual(games);
  });
  test("array returns an object - games people like object", () => {
    const input = [
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
    const output = {
      people: [
        {
          id: 1,
          name: "Katherine",
        },
        {
          id: 2,
          name: "Tim",
        },
      ],
      games: {
        1: "Minecraft",
        2: "Factorio",
        3: "Bingo",
      },
      gamesPeopleLike: [
        [1, 1], // Katherine likes Minecraft
        [1, 2], // Katherine likes Factorio
        [2, 3], // Tim likes Bingo
        [2, 1], // Tim likes Minecraft
      ],
    };
    const gamesPeopleLike = [
      [1,1], // Katherine likes Minecraft
      [1,2], // Katherine likes Factorio
      [2,3], // Tim likes Bingo
      [2,1]  // Tim likes Minecraft
    ]
    expect(splitTheData(input)["gamesPeopleLike"]).toEqual(gamesPeopleLike);
  });
});
