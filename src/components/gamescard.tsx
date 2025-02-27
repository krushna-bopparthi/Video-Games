import React from "react";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/usegames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./criticScore";

interface Props {
  game: Game;
}
const gamescard = ({ game }: Props) => {
  return (
    <Card >
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent='space-between'>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
       
      </CardBody>
    </Card>
  );
};

export default gamescard;
