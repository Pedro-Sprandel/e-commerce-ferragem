import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Button, SearchBar } from "../index";
import { colors } from "../../styles/theme";

export const Header = () => {
  const { primary, secondary, light } = colors;

  return (
    <Flex
      backgroundColor={primary}
      alignItems="center"
      justifyContent="space-between"
      px="40"
    >
      <Text>Logo</Text>
      {/* <Image src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" /> */}
      <Box py="2" w="full" px="20">
        <SearchBar />
      </Box>
      <Flex gap="4">
        <Button bgColor={secondary} color={light} title="Entrar" />
        <Button bgColor={secondary} color={light} title="Cadastrar" />
      </Flex>
    </Flex>
  );
};
