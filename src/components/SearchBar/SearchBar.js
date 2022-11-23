import React from "react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { colors } from '../../styles/theme';
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchBar = () => {
  const { light } = colors;

  return (
    <InputGroup>
      <InputRightElement children={<AiOutlineSearch />} />
      <Input backgroundColor={light} placeholder="Procure aqui" />
    </InputGroup>
  );
};
