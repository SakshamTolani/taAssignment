import React, { useEffect, useState } from "react";
import {
  Box,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Image,
  Checkbox,
  Stack,
  Divider,
  DarkMode,
  MenuDivider,
  Radio,
  Avatar,
  HStack,
  Center,
  SimpleGrid,
  Text,
  Spacer,
  Flex,
  FormControl,
  AvatarGroup,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";

const practitioners = [
  { id: 1, name: "Oliver Hansen", src: "https://bit.ly/sage-adebayo" },
  { id: 2, name: "Van Henry", src: "https://bit.ly/dan-abramov" },
  { id: 3, name: "April Tucker", src: "https://bit.ly/prosper-baba" },
];
const assistants = [
  { id: 4, name: "Ralph Hubbard", src: "https://bit.ly/kent-c-dodds" },
  { id: 5, name: "Omar Alexander", src: "https://bit.ly/ryan-florence" },
  { id: 6, name: "Carlos Abbott", src: "https://bit.ly/prosper-baba" },
  { id: 7, name: "Miriam Wagner", src: "https://bit.ly/code-beast" },
  { id: 7, name: "Miriam Wagner", src: "https://bit.ly/code-beast" },
  { id: 7, name: "Miriam Wagner", src: "https://bit.ly/code-beast" },
  { id: 7, name: "Miriam Wagner", src: "https://bit.ly/code-beast" },
  { id: 7, name: "Miriam Wagner", src: "https://bit.ly/code-beast" },
];
const individuals = [
  { id: 16, name: "John Doe", src: "https://bit.ly/dan-abramov" },
];
const countEmp = (
  practitioners.length +
  assistants.length +
  individuals.length
).toString();
const countAll =
  countEmp.length > 1
    ? countEmp.split("")[0] + " " + countEmp.split("")[1]
    : countEmp;

function Employees() {
  const [query, setQuery] = useState("");
  const [checkedPractitioners, setCheckedPractitioners] = useState([]);
  const [checkedAssistants, setCheckedAssistants] = useState([]);
  const [individualEmployees, setIndividualEmployees] = useState([]);
  const [allEmployees, setAllEmployees] = useState(false);

  const countSel = (
    checkedPractitioners.length +
    checkedAssistants.length +
    individualEmployees.length
  ).toString();
  const filteredAssistants = assistants.filter((post) => {
    if (query === "") {
      return post;
    } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
      return post;
    }
  });

  const filteredPractitioners = practitioners.filter((post) => {
    if (query === "") {
      return post;
    } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
      return post;
    }
  });

  const filteredIndividuals = individuals.filter((post) => {
    if (query === "") {
      return post;
    } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
      return post;
    }
  });

  const isIndeterminatePractitioner =
    checkedPractitioners.length > 0 &&
    checkedPractitioners.length !== practitioners.length;

  const isIndeterminateAssistant =
    checkedAssistants.length > 0 &&
    checkedAssistants.length !== assistants.length;

  const isAllCheckedPractitioner =
    checkedPractitioners.length > 0 &&
    checkedPractitioners.length === practitioners.length;

  const isAllCheckedAssistant =
    checkedAssistants.length > 0 &&
    checkedAssistants.length === assistants.length;

  const isAllCheckedIndividuals =
    individualEmployees.length > 0 &&
    individualEmployees.length === individuals.length;
  return (
    <DarkMode>
      <FormControl m={6} p={0} w={300} color={"gray.200"}>
        <Menu closeOnSelect={false}>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            bg={"gray.400"}
            _hover={{
              bg: "gray.300",
            }}
            _active={{
              bg: "gray.600",
            }}
            w={360}
            color={"gray.900"}
          >
            <HStack>
              <AvatarGroup spacing={-4} size="sm">
                <Avatar
                  name={
                    countSel != 0 && countSel.length == 1
                      ? countSel
                      : countSel.length > 1
                      ? countSel.split("")[0] + " " + countSel.split("")[1]
                      : countAll
                  }
                  size="sm"
                  bg="gray.500"
                  color="gray.100"
                  fontWeight={600}
                  src="https://bitdan-abramov"
                />
                {assistants.slice(0, 2).map((p, index) => (
                  <Avatar
                    key={index}
                    name={p.name}
                    size="md"
                    bg="gray.500"
                    color="gray.100"
                    fontWeight={600}
                    src={p.src}
                  />
                ))}
              </AvatarGroup>
              <Text textAlign={"center"}>
                {isAllCheckedAssistant &&
                isAllCheckedPractitioner &&
                isAllCheckedIndividuals
                  ? "All Employees"
                  : isAllCheckedAssistant &&
                    isAllCheckedPractitioner &&
                    !isAllCheckedIndividuals
                  ? "All Practitioners, All Assistants"
                  : !isAllCheckedAssistant &&
                    isAllCheckedPractitioner &&
                    !isAllCheckedIndividuals
                  ? "All Practitioners"
                  : isAllCheckedAssistant &&
                    !isAllCheckedPractitioner &&
                    !isAllCheckedIndividuals
                  ? "All Assistants"
                  : "Select employee"}
              </Text>
            </HStack>
          </MenuButton>

          <MenuList w={300} h={"full"}>
            <InputGroup>
              <Input
                textAlign={"center"}
                placeholder="Search employee"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="search"
              />
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon />}
              />
            </InputGroup>
            {filteredPractitioners.length == 0 &&
              filteredAssistants.length == 0 &&
              filteredIndividuals.length == 0 && (
                <MenuItem>
                  <Text textAlign={"center"}>Not Found</Text>
                </MenuItem>
              )}
            <MenuItem>
              {query == "" && (
                <Flex align={"center"}>
                  <Box w="70px">
                    <AvatarGroup spacing={-4} size="sm">
                      <Avatar
                        name={countAll}
                        size="sm"
                        bg="gray.500"
                        color="gray.100"
                        fontWeight={600}
                        src="https://bitdan-abramov"
                      />
                      {practitioners.slice(0, 2).map((p, index) => (
                        <Avatar
                          key={index}
                          name={p.name}
                          size="md"
                          bg="gray.500"
                          color="gray.100"
                          fontWeight={600}
                          src={p.src}
                        />
                      ))}
                    </AvatarGroup>
                  </Box>
                  <Spacer />
                  <Box w="180px">
                    <Text w={"full"}>All employees</Text>
                  </Box>
                  <Spacer />
                  <Box w="30px">
                    <Checkbox
                      value={"allEmployees"}
                      isChecked={allEmployees}
                      onChange={() =>
                        allEmployees
                          ? setAllEmployees(false)
                          : setAllEmployees(true)
                      }
                    />
                  </Box>
                </Flex>
              )}
            </MenuItem>
            <MenuDivider />

            {/* --------NON GROUPED EMPLOYEES----- */}
            {individuals
              .filter((post) => {
                if (query === "") {
                  return post;
                } else if (
                  post.name.toLowerCase().includes(query.toLowerCase())
                ) {
                  return post;
                }
              })
              .map((option, key) => (
                <MenuItem minH="40px" key={key} value={option.name}>
                  <Flex align={"center"}>
                    <Box w="70px">
                      <Avatar
                        name={option.name}
                        bg="gray.500"
                        color="gray.100"
                        fontWeight={600}
                        src={option.src}
                      />
                    </Box>
                    <Spacer />
                    <Box w="180px">
                      <Text w={"full"}>{option.name}</Text>
                    </Box>
                    <Spacer />
                    <Box w="30px">
                      <Radio
                        name={option.name}
                        isChecked={individualEmployees.includes(option.id)}
                        onChange={(event) => {
                          event.stopPropagation();
                          const index = individualEmployees.indexOf(option.id);

                          if (index > -1) {
                            setIndividualEmployees([
                              ...individualEmployees.slice(0, index),
                              ...individualEmployees.slice(index + 1),
                            ]);
                          } else {
                            setIndividualEmployees([
                              ...individualEmployees,
                              option.id,
                            ]);
                          }
                        }}
                      />
                    </Box>
                  </Flex>
                </MenuItem>
              ))}
            <MenuDivider />

            {/* ----------PRACTITIONERS----------------- */}
            {query == "" && (
              <MenuItem minH="48px">
                <HStack spacing={"146px"}>
                  <Text>All Practitioners</Text>
                  <Checkbox
                    isIndeterminate={isIndeterminatePractitioner}
                    name="allSelect"
                    value="All Practitioners"
                    isChecked={isAllCheckedPractitioner}
                    onChange={() => {
                      const vendorIds = practitioners.map(
                        (vendor) => vendor.id
                      );
                      if (checkedPractitioners.length === vendorIds.length) {
                        setCheckedPractitioners([]);
                      } else {
                        setCheckedPractitioners(vendorIds);
                      }
                    }}
                  />
                </HStack>
              </MenuItem>
            )}
            <Stack spacing={2} overflow="auto">
              {practitioners
                .filter((post) => {
                  if (query === "") {
                    return post;
                  } else if (
                    post.name.toLowerCase().includes(query.toLowerCase())
                  ) {
                    return post;
                  }
                })
                .map((option, key) => (
                  <MenuItem minH="40px" key={key} value={option.name}>
                    <Flex align={"center"}>
                      <Box w="70px">
                        <Avatar
                          name={option.name}
                          src={option.src}
                          bg="gray.500"
                          color="gray.100"
                          fontWeight={600}
                        />
                      </Box>
                      <Spacer />
                      <Box w="170px">
                        <Text w={"full"}>{option.name}</Text>
                      </Box>
                      <Spacer />
                      <Box w="30px">
                        <Checkbox
                          float={"right"}
                          name={option.name}
                          isChecked={checkedPractitioners.includes(option.id)}
                          onChange={(event) => {
                            event.stopPropagation();
                            const index = checkedPractitioners.indexOf(
                              option.id
                            );

                            if (index > -1) {
                              setCheckedPractitioners([
                                ...checkedPractitioners.slice(0, index),
                                ...checkedPractitioners.slice(index + 1),
                              ]);
                            } else {
                              setCheckedPractitioners([
                                ...checkedPractitioners,
                                option.id,
                              ]);
                            }
                          }}
                        />
                      </Box>
                    </Flex>
                  </MenuItem>
                ))}
            </Stack>
            <MenuDivider />

            {/* -------------ASSISTANTS----------------- */}
            {query == "" && (
              <MenuItem minH="48px">
                <HStack spacing={[1, 160]}>
                  <Text>All Assistants</Text>
                  <Checkbox
                    isIndeterminate={isIndeterminateAssistant}
                    name="allSelect"
                    isChecked={isAllCheckedAssistant}
                    onChange={() => {
                      const vendorIds = assistants.map((vendor) => vendor.id);
                      if (checkedAssistants.length === vendorIds.length) {
                        setCheckedAssistants([]);
                      } else {
                        setCheckedAssistants(vendorIds);
                      }
                    }}
                  />
                </HStack>
              </MenuItem>
            )}
            <Stack spacing={2} overflow="auto">
              {assistants
                .filter((post) => {
                  if (query === "") {
                    return post;
                  } else if (
                    post.name.toLowerCase().includes(query.toLowerCase())
                  ) {
                    return post;
                  }
                })
                .map((option, key) => (
                  <MenuItem minH="40px" key={key}>
                    <Flex align={"center"}>
                      <Box w="70px">
                        <Avatar
                          name={option.name}
                          src={option.src}
                          bg="gray.500"
                          color="gray.100"
                          fontWeight={600}
                        />
                      </Box>
                      <Spacer />
                      <Box w="185px">
                        <Text w={"full"}>{option.name}</Text>
                      </Box>
                      <Spacer />
                      <Box w="30px">
                        <Checkbox
                          name={option.name}
                          isChecked={checkedAssistants.includes(option.id)}
                          onChange={(event) => {
                            event.stopPropagation();
                            const index = checkedAssistants.indexOf(option.id);

                            if (index > -1) {
                              setCheckedAssistants([
                                ...checkedAssistants.slice(0, index),
                                ...checkedAssistants.slice(index + 1),
                              ]);
                            } else {
                              setCheckedAssistants([
                                ...checkedAssistants,
                                option.id,
                              ]);
                            }
                          }}
                        />
                      </Box>
                    </Flex>
                  </MenuItem>
                ))}
            </Stack>
          </MenuList>
        </Menu>
      </FormControl>
    </DarkMode>
  );
}

export default Employees;
