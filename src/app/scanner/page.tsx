'use client'

import QrScanner from "@/components/QrScanner";
import {
   Box,
   Button,
   Container,
   Flex,
   useColorModeValue,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalBody,
   ModalCloseButton,
   Text,
   Alert,
   AlertIcon,
   AlertDescription,
} from "@chakra-ui/react";
import BackButton from "@/components/BackButton";
import { HiOutlineQrCode } from "react-icons/hi2";
import { MdOutlinePin } from "react-icons/md";
import { BiBarcode } from "react-icons/bi";
import QRCode from "react-qr-code";
import { useDisclosure } from "@chakra-ui/hooks";

export default function Scanner() {
	const { isOpen, onOpen, onClose } = useDisclosure();
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
                     color={useColorModeValue("gray.900", "gray.100")}
                     borderRadius={"xl"}
                     fontSize={"sm"}
                     _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
                     borderColor={useColorModeValue("gray.300", "gray.700")}
                     py={9}
                     bg={useColorModeValue("none", "gray.700")}
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
                     color={useColorModeValue("gray.900", "gray.100")}
                     borderRadius={"xl"}
                     fontSize={"sm"}
                     _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
                     borderColor={useColorModeValue("gray.300", "gray.700")}
                     py={9}
                     bg={useColorModeValue("none", "gray.700")}
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
                  borderRadius={"xl"}
                  borderColor={useColorModeValue("gray.300", "gray.700")}
                  bg={useColorModeValue("none", "gray.700")}
                  color={"gray.900"}
                  mt={4}
                  // does nothing
                  _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
                  onClick={onOpen}
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
                        <Text
                           fontSize={"sm"}
                           fontWeight={"600"}
                           color={useColorModeValue("gray.900", "gray.100")}
                        >
                           QR Code Saya
                        </Text>
                     </Box>
                  </Flex>
                  <Box w={"fit-content"}>
                     <Text
                        fontSize={"sm"}
                        fontWeight={"500"}
                        color={useColorModeValue("gray.900", "gray.100")}
                     >
                        ▶
                     </Text>
                  </Box>
               </Button>

               {/* Qr Code Modal */}
               <Modal
                  isCentered
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
                           value={"085155347714"}
                        />
                     </ModalBody>
                  </ModalContent>
               </Modal>
            </Box>
         </Container>
      </>
   );
}