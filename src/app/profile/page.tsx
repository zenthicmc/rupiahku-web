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
	useColorMode,
   useColorModeValue,
   Divider,
   Switch,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import BottomNav from "@/components/BottomNav";
import { FaUserEdit } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { BsFillMoonFill } from "react-icons/bs";
import { MdReport } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

export default function Profile() {
	const { toggleColorMode } = useColorMode();

   return (
      <main>
         <Container
            w="sm"
            background={useColorModeValue("#F6F8FB", "gray.800")}
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
                  justifyContent={"center"}
                  alignItems={"center"}
                  w={"90%"}
                  pos={"absolute"}
                  top={"5"}
                  left={"0"}
                  right={"0"}
                  margin={"auto"}
                  flexDirection={"column"}
               >
                  <Image
                     src="/man.png"
                     alt="Segun Adebayo"
                     w={"4rem"}
                     h={"4rem"}
                     borderRadius={"full"}
                  />

                  <Text
                     fontSize={"lg"}
                     fontWeight={"bolder"}
                     color={"gray.900"}
                     textShadow={"0px 0px 5px rgba(0, 0, 0, 0.1)"}
                  >
                     Jagad Raya R
                  </Text>
                  <Text
                     fontSize={"sm"}
                     fontWeight={"400"}
                     color={"gray.900"}
                     textShadow={"0px 0px 5px rgba(0, 0, 0, 0.1)"}
                  >
                     085155347714
                  </Text>
                  <Text
                     fontSize={"xs"}
                     fontWeight={"300"}
                     color={"gray.900"}
                     textShadow={"0px 0px 5px rgba(0, 0, 0, 0.1)"}
                     mt={2}
                  >
                     Bergabung sejak 10 Januari 2021
                  </Text>
               </Flex>
            </Box>

            <Container w={"90%"} margin={"auto"} p={0} py={1}>
               {/* Settings List */}
               <Text
                  fontSize={"md"}
                  fontWeight={"bold"}
                  color={useColorModeValue("gray.900", "gray.100")}
                  mt={3}
                  mb={1}
               >
                  Akun
               </Text>
               <Card w={"100%"} p={0} borderRadius={"xl"} shadow={"md"}>
                  <Flex
                     justifyContent={"space-between"}
                     alignItems={"center"}
                     w={"100%"}
                     py={4}
                     px={5}
                  >
                     <Flex
                        justifyContent={"start"}
                        alignItems={"center"}
                        w={"80%"}
                        gap={5}
                     >
                        <Box w={"fit-content"}>
                           <FaUserEdit size={25} color={"#F56565"} />
                        </Box>
                        <Box w={"70%"}>
                           <Text fontSize={"sm"} fontWeight={"500"}>
                              Edit Profil
                           </Text>
                        </Box>
                     </Flex>
                     <Box w={"fit-content"}>
                        <Text fontSize={"sm"} fontWeight={"500"}>
                           ▶
                        </Text>
                     </Box>
                  </Flex>
                  <Divider color="gray.400" />
                  <Flex
                     justifyContent={"space-between"}
                     alignItems={"center"}
                     w={"100%"}
                     py={4}
                     px={5}
                  >
                     <Flex
                        justifyContent={"start"}
                        alignItems={"center"}
                        w={"80%"}
                        gap={5}
                     >
                        <Box w={"fit-content"}>
                           <AiFillLock size={25} color={"#F56565"} />
                        </Box>
                        <Box w={"70%"}>
                           <Text fontSize={"sm"} fontWeight={"500"}>
                              Ubah Password
                           </Text>
                        </Box>
                     </Flex>
                     <Box w={"fit-content"}>
                        <Text fontSize={"sm"} fontWeight={"500"}>
                           ▶
                        </Text>
                     </Box>
                  </Flex>
               </Card>
               <Text
                  fontSize={"md"}
                  fontWeight={"bold"}
                  color={useColorModeValue("gray.900", "gray.100")}
                  mt={3}
                  mb={1}
               >
                  Pusat Bantuan
               </Text>
               <Card w={"100%"} p={0} borderRadius={"xl"} shadow={"md"}>
                  <Flex
                     justifyContent={"space-between"}
                     alignItems={"center"}
                     w={"100%"}
                     py={4}
                     px={5}
                  >
                     <Flex
                        justifyContent={"start"}
                        alignItems={"center"}
                        w={"80%"}
                        gap={5}
                     >
                        <Box w={"fit-content"}>
                           <MdReport size={25} color={"#F56565"} />
                        </Box>
                        <Box w={"70%"}>
                           <Text fontSize={"sm"} fontWeight={"500"}>
                              Laporkan Bug
                           </Text>
                        </Box>
                     </Flex>
                     <Box w={"fit-content"}>
                        <Text fontSize={"sm"} fontWeight={"500"}>
                           ▶
                        </Text>
                     </Box>
                  </Flex>
                  <Divider color="gray.400" />
                  <Flex
                     justifyContent={"space-between"}
                     alignItems={"center"}
                     w={"100%"}
                     py={4}
                     px={5}
                  >
                     <Flex
                        justifyContent={"start"}
                        alignItems={"center"}
                        w={"80%"}
                        gap={5}
                     >
                        <Box w={"fit-content"}>
                           <BiSupport size={25} color={"#F56565"} />
                        </Box>
                        <Box w={"70%"}>
                           <Text fontSize={"sm"} fontWeight={"500"}>
                              Hubungi Support
                           </Text>
                        </Box>
                     </Flex>
                     <Box w={"fit-content"}>
                        <Text fontSize={"sm"} fontWeight={"500"}>
                           ▶
                        </Text>
                     </Box>
                  </Flex>
               </Card>
               <Text
                  fontSize={"md"}
                  fontWeight={"bold"}
                  color={useColorModeValue("gray.900", "gray.100")}
                  mt={3}
                  mb={1}
               >
                  Tampilan
               </Text>
               <Card w={"100%"} p={0} borderRadius={"xl"} shadow={"md"}>
                  <Flex
                     justifyContent={"space-between"}
                     alignItems={"center"}
                     w={"100%"}
                     py={4}
                     px={5}
                  >
                     <Flex
                        justifyContent={"start"}
                        alignItems={"center"}
                        w={"80%"}
                        gap={5}
                     >
                        <Box w={"fit-content"}>
                           <BsFillMoonFill size={20} color={"#F56565"} />
                        </Box>
                        <Box w={"70%"}>
                           <Text fontSize={"sm"} fontWeight={"500"}>
                              Dark Mode
                           </Text>
                        </Box>
                     </Flex>
                     <Box w={"fit-content"}>
                        <Switch colorScheme="red" onChange={toggleColorMode} />
                     </Box>
                  </Flex>
               </Card>
               <Text
                  fontSize={"md"}
                  fontWeight={"bold"}
                  color={useColorModeValue("gray.900", "gray.100")}
                  mt={3}
                  mb={1}
               >
                  Keluar
               </Text>
               <Card
                  w={"100%"}
                  p={0}
                  borderRadius={"xl"}
                  shadow={"md"}
                  mb={2}
               >
                  <Flex
                     justifyContent={"space-between"}
                     alignItems={"center"}
                     w={"100%"}
                     py={4}
                     px={5}
                  >
                     <Flex
                        justifyContent={"start"}
                        alignItems={"center"}
                        w={"80%"}
                        gap={5}
                     >
                        <Box w={"fit-content"}>
                           <FiLogOut size={25} color={"#F56565"} />
                        </Box>
                        <Box w={"70%"}>
                           <Text fontSize={"sm"} fontWeight={"500"}>
                              Keluar
                           </Text>
                        </Box>
                     </Flex>
                     <Box w={"fit-content"}>
                        <Text fontSize={"sm"} fontWeight={"500"}>
                           ▶
                        </Text>
                     </Box>
                  </Flex>
               </Card>
            </Container>
         </Container>
         <BottomNav />
      </main>
   );
}
