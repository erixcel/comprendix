import { Configuration } from "../model/configuration";
import { reading_bear } from "./reading/bear";
import { reading_duck } from "./reading/duck";
import { reading_frog } from "./reading/frog";
import { reading_monkey } from "./reading/monkey";
import { reading_parrot } from "./reading/parrot";
import { reading_penguin } from "./reading/penguin";
import { reading_snake } from "./reading/snake";
import { reading_tortoise } from "./reading/tortoise";

export const LOCAL_ID = "000000001";
export const CONFIG_PARAM = "configuration";

export const configuration: Configuration = {
  id: LOCAL_ID,
  pdf: {
    name: "Sample PDF",
    url: "https://example.com/sample.pdf"
  },
  games: [
    {
      type: "memory",
      image_url: "https://example.com/memory-game.jpg",
      points: 10,
      cards: [
        { id: "card1", image_url: "https://example.com/card1.jpg", flipped: false },
        { id: "card2", image_url: "https://example.com/card2.jpg", flipped: false }
      ]
    },
    {
      type: "puzzle",
      image_url: "https://example.com/puzzle-game.jpg",
      points: 15,
      level: "easy"
    },
    {
      type: "puzzle",
      image_url: "https://example.com/puzzle-game.jpg",
      points: 15,
      level: "medium"
    },
    {
      type: "guess",
      image_url: "https://example.com/guess-game.jpg",
      points: 20,
      cards: [
        { id: "guess1", image_url: "https://example.com/guess1.jpg", name: "Guess 1" },
        { id: "guess2", image_url: "https://example.com/guess2.jpg", name: "Guess 2" }
      ]
    }
  ],
  readings: [
    reading_penguin,
    reading_tortoise,
    reading_duck,
    reading_monkey,
    reading_frog,
    reading_parrot,
    reading_bear,
    reading_snake,
  ]
};
