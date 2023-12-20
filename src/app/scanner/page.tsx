'use client'

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
   useToast
} from "@chakra-ui/react";
import BackButton from "@/components/BackButton";
import { BiBarcode } from "react-icons/bi";
import QRCode from "react-qr-code";
import { useDisclosure } from "@chakra-ui/hooks";
import { QrScanner } from "@yudiel/react-qr-scanner";
import { useEffect, useState } from "react";
import { ApiGet } from "@/utils/api";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

export default function Scanner() {
   const toast = useToast();
   const router = useRouter();
   
   const { isOpen, onOpen, onClose } = useDisclosure();
   const [cookies, setCookie] = useCookies(["token"]);
   const [loading, setLoading] = useState(true);
   const [profile, setProfile] = useState({
      nohp: "",
   });

   useEffect(() => {
      setLoading(true);
      async function getData() {
         const response = await ApiGet("/api/user/getprofile", cookies.token);
         setProfile(response.data.user);
         setLoading(false);
      }

      getData();
   }, []);

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
            <QrScanner
               onDecode={(result) => router.push(`/transfer?phone=${result.replace("+62", "")}`)}
               onError={(error) => void(0)}
            />

            {/* Back Button */}
            <BackButton color={"white"} />

            <Box p={4}>
               <Text fontSize={"md"} fontWeight={"bold"} mt={1}>
                  Dapatkan Kode QR Saya
               </Text>
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
                        <QRCode style={{ margin: "auto" }} value={profile.nohp} />
                     </ModalBody>
                  </ModalContent>
               </Modal>
            </Box>
         </Container>
      </>
   );
}