import React from "react";
import { Stack, Container, Heading } from "@chakra-ui/react";
import Employees from "./components/Employees";
import Dates from "./components/Dates";
function App() {
  return (
    <Stack direction="row" margin={4}>
      <Container maxWidth="lg">
        <Heading variant="h4">Select employee dropdown</Heading>
        <Employees />
      </Container>
      <Container maxWidth="lg">
        <Heading variant="h4">Date picker</Heading>
        <Dates />
      </Container>
    </Stack>
  );
}

export default App;
