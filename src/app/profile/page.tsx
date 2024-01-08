"use client";

import {
   Box,
   Container,
   Flex,
   Text,
   Card,
   useColorMode,
   useColorModeValue,
   Divider,
   Switch,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalBody,
   ModalCloseButton,
   Alert,
   AlertIcon,
   AlertDescription,
   Skeleton,
   SkeletonCircle,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import BottomNav from "@/components/BottomNav";
import { FaUserEdit, FaQrcode } from "react-icons/fa";
import { AiFillLock, AiFillQuestionCircle } from "react-icons/ai";
import { BsFillMoonFill } from "react-icons/bs";
import { MdReport } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import QRCode from "react-qr-code";
import { useDisclosure } from "@chakra-ui/hooks";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { ApiGet } from "@/utils/api";
import { formatDate } from "@/utils/Date";
import { capitalize } from "@/utils/capitalize";

export default function Profile() {
   const { toggleColorMode } = useColorMode();
   const { isOpen, onOpen, onClose } = useDisclosure();
   const [cookies, setCookie] = useCookies(["token"]);
   const [profile, setProfile] = useState({
      name: "",
      nohp: "",
      image: "",
      createdAt: "",
   });

   useEffect(() => {
      async function getData() {
         const response = await ApiGet("/api/user/getprofile", cookies.token);
         setProfile(response.data.user);
      }

      getData();
   }, []);

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
                  top={"6"}
                  left={"0"}
                  right={"0"}
                  margin={"auto"}
                  flexDirection={"column"}
               >
                  {profile.image ? (
                     <Image
                        src={profile.image}
                        alt="Segun Adebayo"
                        w={"4rem"}
                        h={"4rem"}
                        borderRadius={"full"}
                     />
                  ) : (
                     <SkeletonCircle size={"4rem"} />
                  )}

                  {profile.name ? (
                     <Text
                        fontSize={"lg"}
                        fontWeight={"bolder"}
                        color={"gray.900"}
                        textShadow={"0px 0px 5px rgba(255, 255, 255, 0.5)"}
                     >
                        {capitalize(profile.name)}
                     </Text>
                  ) : (
                     <Skeleton w={"50%"} h={"4"} mt={1} />
                  )}

                  {profile.nohp ? (
                     <Text
                        fontSize={"sm"}
                        fontWeight={"400"}
                        color={"gray.900"}
                        textShadow={"0px 0px 5px rgba(255, 255, 255, 0.5)"}
                     >
                        {profile.nohp}
                     </Text>
                  ) : (
                     <Skeleton w={"30%"} h={"4"} mt={1} />
                  )}

                  <Text
                     fontSize={"xs"}
                     fontWeight={"500"}
                     color={"gray.900"}
                     textShadow={"0px 0px 5px rgba(255, 255, 255, 0.5)"}
                     mt={1}
                  >
                     {profile.createdAt
                        ? `Bergabung sejak ${formatDate(profile.createdAt)}`
                        : "Bergabung sejak ..."}
                  </Text>
               </Flex>
            </Box>

            <Container w={"90%"} margin={"auto"} p={0} py={1}>
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
                  <Link href={"/editProfile"}>
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
                  </Link>
                  <Divider color="gray.400" />
                  <Link href={"/ubahPassword"}>
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
                  </Link>
                  <Divider color="gray.400" />
                  <Flex
                     justifyContent={"space-between"}
                     alignItems={"center"}
                     w={"100%"}
                     py={4}
                     px={5}
                     onClick={onOpen}
                  >
                     <Flex
                        justifyContent={"start"}
                        alignItems={"center"}
                        w={"80%"}
                        gap={5}
                     >
                        <Box w={"fit-content"}>
                           <FaQrcode size={23} color={"#F56565"} />
                        </Box>
                        <Box w={"70%"}>
                           <Text fontSize={"sm"} fontWeight={"500"}>
                              QR Code Saya
                           </Text>
                        </Box>
                     </Flex>
                     <Box w={"fit-content"}>
                        <Text fontSize={"sm"} fontWeight={"500"}>
                           ▶
                        </Text>
                     </Box>
                  </Flex>

                  <Modal
                     onClose={onClose}
                     isOpen={isOpen}
                     motionPreset="slideInBottom"
                     size={"sm"}
                  >
                     <ModalOverlay />
                     <ModalContent pb={10}>
                        <ModalHeader>QR Code Saya</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                           <Alert status="info" mb={5}>
                              <AlertIcon />
                              <AlertDescription mr={2} fontSize={"sm"}>
                                 Scan QR Code ini untuk pembayaran
                              </AlertDescription>
                           </Alert>
                           <QRCode
                              style={{ margin: "auto" }}
                              value={profile.nohp}
                           />
                        </ModalBody>
                     </ModalContent>
                  </Modal>
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
                  <Link
                     href={"https://forms.gle/VXzFbdJNyKPv3A1o6"}
                     target="_blank"
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
                  </Link>
                  <Divider color="gray.400" />
                  <Link
                     href={
                        "https://wa.me/+6282316590057?text=saya membutuhkan support mengenai rupiahku"
                     }
                     target="_blank"
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
                  </Link>
                  <Divider color="gray.400" />
                  <Link href={"/about"}>
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
                              <AiFillQuestionCircle
                                 size={23}
                                 color={"#F56565"}
                              />
                           </Box>
                           <Box w={"70%"}>
                              <Text fontSize={"sm"} fontWeight={"500"}>
                                 Tentang Kami
                              </Text>
                           </Box>
                        </Flex>
                        <Box w={"fit-content"}>
                           <Text fontSize={"sm"} fontWeight={"500"}>
                              ▶
                           </Text>
                        </Box>
                     </Flex>
                  </Link>
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
                        <Switch
                           colorScheme="red"
                           onChange={toggleColorMode}
                           isChecked={useColorModeValue(false, true)}
                        />
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
               <Card w={"100%"} p={0} borderRadius={"xl"} shadow={"md"} mb={2}>
                  <Link href={"/logout"}>
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
                  </Link>
               </Card>
            </Container>
         </Container>
         <BottomNav />
      </main>
   );
}
