"use client";

import {
   Box,
   Container,
   Flex,
   Text,
   Button,
   Grid,
   VStack,
   Card,
   useColorModeValue,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import BottomNav from "@/components/BottomNav";

export default function History() {
   return (
      <main>
         <Container
            w="sm"
            background={useColorModeValue("#F6F8FB", "gray.900")}
            p={0}
            h={"fit-content"}
            minH={"100vh"}
            pb={20}
         >
            <Box as="section" pos={"relative"} pb={1}>
               <Image
                  src="/hero.jpg"
                  alt="Segun Adebayo"
                  background={"teal"}
                  w={"full"}
                  h={"180"}
               />

               {/* Profile Name */}
               <Flex
                  justifyContent={"start"}
                  alignItems={"center"}
                  w={"90%"}
                  pos={"absolute"}
                  top={"10"}
                  left={"0"}
                  right={"0"}
                  margin={"auto"}
               >
                  <Text
                     fontSize={"lg"}
                     fontWeight={"bolder"}
                     color={"gray.900"}
                     ms={1}
                     textShadow={"0px 0px 5px rgba(0, 0, 0, 0.1)"}
                  >
                     Riwayat Transaksi
                  </Text>
               </Flex>
            </Box>

            <Container w={"90%"} margin={"auto"} p={0} py={1}>
               {/* Transaction List */}
               <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  mt={2}
                  flexDirection={"column"}
               >
                  <Card w={"100%"} p={4} borderRadius={"xl"} shadow={"md"}>
                     <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                     >
                        <Flex alignItems={"center"}>
                           <Image
                              src="https://imgur.com/SSAxsPR.png"
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
                  <Card
                     w={"100%"}
                     p={4}
                     borderRadius={"xl"}
                     shadow={"md"}
                     mt={2}
                  >
                     <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                     >
                        <Flex alignItems={"center"}>
                           <Image
                              src="https://imgur.com/LIVDXGW.png"
                              alt="Rupiahku"
                              w={10}
                              h={10}
                              borderRadius={"full"}
                           />
                           <Box ms={3}>
                              <Text fontSize={"sm"} fontWeight={"bold"}>
                                 Deposit
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
                  <Card
                     w={"100%"}
                     p={4}
                     borderRadius={"xl"}
                     shadow={"md"}
                     mt={2}
                  >
                     <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                     >
                        <Flex alignItems={"center"}>
                           <Image
                              src="https://imgur.com/gEj2ocp.png"
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
                  <Card
                     w={"100%"}
                     p={4}
                     borderRadius={"xl"}
                     shadow={"md"}
                     mt={2}
                  >
                     <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                     >
                        <Flex alignItems={"center"}>
                           <Image
                              src="https://imgur.com/To8gEGD.png"
                              alt="Rupiahku"
                              w={10}
                              h={10}
                              borderRadius={"full"}
                           />
                           <Box ms={3}>
                              <Text fontSize={"sm"} fontWeight={"bold"}>
                                 Game
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
                  <Card
                     w={"100%"}
                     p={4}
                     borderRadius={"xl"}
                     shadow={"md"}
                     mt={2}
                  >
                     <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                     >
                        <Flex alignItems={"center"}>
                           <Image
                              src="https://imgur.com/HXwkZoX.png"
                              alt="Rupiahku"
                              w={10}
                              h={10}
                              borderRadius={"full"}
                           />
                           <Box ms={3}>
                              <Text fontSize={"sm"} fontWeight={"bold"}>
                                 E-Wallet
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
                  <Card
                     w={"100%"}
                     p={4}
                     borderRadius={"xl"}
                     shadow={"md"}
                     mt={2}
                  >
                     <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                     >
                        <Flex alignItems={"center"}>
                           <Image
                              src="https://imgur.com/fh9PbeM.png"
                              alt="Rupiahku"
                              w={10}
                              h={10}
                              borderRadius={"full"}
                           />
                           <Box ms={3}>
                              <Text fontSize={"sm"} fontWeight={"bold"}>
                                 Internet
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
                  <Card
                     w={"100%"}
                     p={4}
                     borderRadius={"xl"}
                     shadow={"md"}
                     mt={2}
                  >
                     <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                     >
                        <Flex alignItems={"center"}>
                           <Image
                              src="https://imgur.com/cj6QV5b.png"
                              alt="Rupiahku"
                              w={10}
                              h={10}
                              borderRadius={"full"}
                           />
                           <Box ms={3}>
                              <Text fontSize={"sm"} fontWeight={"bold"}>
                                 PLN
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
                  <Card
                     w={"100%"}
                     p={4}
                     borderRadius={"xl"}
                     shadow={"md"}
                     mt={2}
                  >
                     <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                     >
                        <Flex alignItems={"center"}>
                           <Image
                              src="https://imgur.com/p1MD6ZR.png"
                              alt="Rupiahku"
                              w={10}
                              h={10}
                              borderRadius={"full"}
                           />
                           <Box ms={3}>
                              <Text fontSize={"sm"} fontWeight={"bold"}>
                                 Pulsa
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
                  <Card
                     w={"100%"}
                     p={4}
                     borderRadius={"xl"}
                     shadow={"md"}
                     mt={2}
                  >
                     <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                     >
                        <Flex alignItems={"center"}>
                           <Image
                              src="https://imgur.com/TN5BqMT.png"
                              alt="Rupiahku"
                              w={10}
                              h={10}
                              borderRadius={"full"}
                           />
                           <Box ms={3}>
                              <Text fontSize={"sm"} fontWeight={"bold"}>
                                 Voucher
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
            </Container>
         </Container>
         <BottomNav />
      </main>
   );
}
