import {
   Box,
   Flex,
   Text,
   Card,
   useColorModeValue,
   Image,
} from "@chakra-ui/react";

const HomeTransactions = () => {
   return (
      <Flex
         justifyContent={"space-between"}
         alignItems={"center"}
         mt={2}
         flexDirection={"column"}
      >
         <Card w={"100%"} p={4} borderRadius={"xl"} shadow={"md"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
               <Flex alignItems={"center"}>
                  <Image
                     src={useColorModeValue(
                        "https://imgur.com/SSAxsPR.png",
                        "https://imgur.com/FIV1oYk.png"
                     )}
                     alt="Rupiahku"
                     w={10}
                     h={10}
                     borderRadius={"full"}
                  />
                  <Box ms={3}>
                     <Text fontSize={"sm"} fontWeight={"bold"}>
                        Transfer
                     </Text>
                     <Text
                        fontSize={"xs"}
                        color={"gray.500"}
                        fontWeight={"300"}
                     >
                        10 January 2023 | 12:00
                     </Text>
                  </Box>
               </Flex>
               <Box ms={3} textAlign={"end"}>
                  <Text fontSize={"sm"} fontWeight={"bold"}>
                     - Rp 50.000
                  </Text>
                  <Text fontSize={"xs"} color={"green.400"}>
                     Success
                  </Text>
               </Box>
            </Flex>
         </Card>
         <Card w={"100%"} p={4} borderRadius={"xl"} shadow={"md"} mt={2}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
               <Flex alignItems={"center"}>
                  <Image
                     src={useColorModeValue(
                        "https://imgur.com/gEj2ocp.png",
                        "https://imgur.com/rsxlxdj.png"
                     )}
                     alt="Rupiahku"
                     w={10}
                     h={10}
                     borderRadius={"full"}
                  />
                  <Box ms={3}>
                     <Text fontSize={"sm"} fontWeight={"bold"}>
                        Tarik Tunai
                     </Text>
                     <Text
                        fontSize={"xs"}
                        color={"gray.500"}
                        fontWeight={"300"}
                     >
                        10 January 2023 | 12:00
                     </Text>
                  </Box>
               </Flex>
               <Box ms={3} textAlign={"end"}>
                  <Text fontSize={"sm"} fontWeight={"bold"}>
                     - Rp 150.000
                  </Text>
                  <Text fontSize={"xs"} color={"green.400"}>
                     Success
                  </Text>
               </Box>
            </Flex>
         </Card>
      </Flex>
   );
};

export default HomeTransactions;
