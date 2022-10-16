import React, { useState } from "react";
import {
  Box,
  Input,
  InputLeftElement,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { CalendarIcon, ArrowUpDownIcon } from "@chakra-ui/icons";
function Dates() {
  const [date, setDate] = useState();
  return (
    <Box m={6} p={1} w={300}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<ArrowUpDownIcon color="gray.200" />}
        />
        <Input
          type="date"
          placeholder="Pick date"
          cursor={"pointer"}
          value={date}
          w={300}
        />
      </InputGroup>
    </Box>
  );
}

export default Dates;
