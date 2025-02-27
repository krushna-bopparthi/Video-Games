import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColorSwitchMode from "../ColorSwitchMode";

const navbar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize={"60px"}></Image>
      <ColorSwitchMode></ColorSwitchMode>
    </HStack>
  );
};

export default navbar;
