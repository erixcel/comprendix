import { Configuration } from "../model/configuration";
import { game_match_image_2 } from "./game/match-image";
import { game_match_text_3 } from "./game/match-text";
import { game_number_1 } from "./game/number";
import { game_puzzle_1, game_puzzle_2, game_puzzle_3 } from "./game/puzzle";
import { game_text_1, game_text_2, game_text_3 } from "./game/text";
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
    game_puzzle_1,
    game_text_1,
    game_number_1,
    game_puzzle_2,
    game_text_2,
    game_match_image_2,
    game_puzzle_3,
    game_text_3,
    game_match_text_3,
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
