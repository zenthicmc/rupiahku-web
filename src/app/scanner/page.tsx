'use client'

import QrScanner from "@/components/QrScanner";
import { Box, Button, Container, Flex, useColorModeValue, Text } from "@chakra-ui/react";
import BackButton from "@/components/BackButton";
import { HiOutlineQrCode } from "react-icons/hi2";
import { MdOutlinePin } from "react-icons/md";
import { BiBarcode } from "react-icons/bi";

export default function Scanner() {
	return (
      <>
         <Container
            width={"sm"}
            h={"100vh"}
            background={useColorModeValue("#F6F8FB", "gray.800")}
            p={0}
            pos={"relative"}
         >
            {/* QR Scanner */}
            <QrScanner />

            {/* Back Button */}
            <BackButton color={"white"} />

            <Box p={4}>
               <Text fontSize={"md"} fontWeight={"bold"} mt={1}>
                  Bisa juga bayar dengan
               </Text>

               {/* Button Group */}
               <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  gap={5}
                  mt={4}
               >
                  <Button
                     w={"full"}
                     variant={"outline"}
                     color={"gray.900"}
                     borderRadius={"xl"}
                     fontSize={"sm"}
                     _hover={{ bg: "inherit" }}
                     borderColor={"gray.300"}
                     py={9}
                  >
                     <Flex
                        alignItems={"center"}
                        flexDirection={"column"}
                        gap={2}
                     >
                        <HiOutlineQrCode size={25} color={"#F56565"} />
                        Kode QRIS
                     </Flex>
                  </Button>
                  <Button
                     w={"full"}
                     variant={"outline"}
                     color={"gray.900"}
                     borderRadius={"xl"}
                     fontSize={"sm"}
                     _hover={{ bg: "inherit" }}
                     borderColor={"gray.300"}
                     py={9}
                  >
                     <Flex
                        alignItems={"center"}
                        flexDirection={"column"}
                        gap={2}
                     >
                        <MdOutlinePin size={25} color={"#F56565"} />
                        Kode Bayar
                     </Flex>
                  </Button>
               </Flex>
               <Button
                  w={"full"}
                  variant={"outline"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  py={6}
                  px={5}
                  borderColor={"gray.300"}
                  color={"gray.900"}
                  mt={4}
                  _hover={{ bg: "inherit" }}
               >
                  <Flex
                     justifyContent={"start"}
                     alignItems={"center"}
                     w={"20%"}
                     gap={5}
                  >
                     <Box w={"fit-content"}>
                        <BiBarcode size={25} color={"#F56565"} />
                     </Box>
                     <Box w={"70%"}>
                        <Text fontSize={"sm"} fontWeight={"600"}>
                           QR Code Saya
                        </Text>
                     </Box>
                  </Flex>
                  <Box w={"fit-content"}>
                     <Text fontSize={"sm"} fontWeight={"500"}>
                        ▶
                     </Text>
                  </Box>
               </Button>
            </Box>
         </Container>
      </>
   );
}