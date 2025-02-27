import { SimpleGrid, Text } from "@chakra-ui/react";
import usegames, { Game, Platform } from "../hooks/usegames";
import gamescard from "./gamescard";
import Gamescard from "./gamescard";
import GamecardSkeleton from "./gamecardSkeleton";
import Gamecardcontainer from "./gamecardcontainer";
import { Genre } from "../hooks/UseGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const gamesgrid = ({gameQuery}: Props) => {
  const { data, error, isLoading } = usegames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Text>Dev</Text>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <Gamecardcontainer key={skeleton}>
              <GamecardSkeleton ></GamecardSkeleton>
            </Gamecardcontainer>
          ))}
        {data.map((game) => (
          <Gamecardcontainer key={game.id}>
            <Gamescard  game={game} />
          </Gamecardcontainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default gamesgrid;
