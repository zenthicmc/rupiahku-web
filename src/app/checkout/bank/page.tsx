"use client";

import {
   Box,
   Container,
   Flex,
   Text,
   Button,
   useColorModeValue,
   Grid,
   Input,
   Divider,
   Alert,
   AlertIcon,
   AlertTitle,
   AlertDescription,
   Accordion,
   AccordionItem,
   AccordionButton,
   AccordionIcon,
   AccordionPanel,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import BackButton from "@/components/BackButton";
import { useState } from "react";
import Link from "next/link";
import { IoIosCopy } from "react-icons/io";

export default function Bank() {
   const [amount, setAmount] = useState(0);

   return (
      <main>
         <Container
            w="sm"
            background={useColorModeValue("#F6F8FB", "gray.800")}
            p={0}
            h={"fit-content"}
            pb={20}
            minH={"100vh"}
         >
            <Accordion
               as="section"
               pos={"relative"}
               allowMultiple
               defaultIndex={[0, 1]}
            >
               <Image
                  src="/hero.jpg"
                  alt="hero"
                  background={"teal"}
                  w={"full"}
                  h={"180"}
               />

               {/* Back Button */}
               <BackButton color={"black"} />
               <Box
                  pos={"absolute"}
                  h={"fit-content"}
                  left={"0"}
                  right={"0"}
                  top={"7rem"}
               >
                  <AccordionItem
                     w={"90%"}
                     h={"fit-content"}
                     bg={useColorModeValue("white", "gray.700")}
                     margin={"auto"}
                     borderRadius={"xl"}
                     shadow={"xl"}
                     px={6}
                     py={5}
                     border={"none"}
                  >
                     <AccordionButton
                        p={0}
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        _hover={{ bg: "none" }}
                     >
                        <Text fontSize={"sm"} fontWeight={"600"}>
                           Detail Pembayaran
                        </Text>
                        <AccordionIcon />
                     </AccordionButton>

                     <AccordionPanel p={0} mt={3}>
                        <Alert
                           w={"100%"}
                           margin={"auto"}
                           status="info"
                           borderRadius={"xl"}
                           fontSize={"xs"}
                           mb={2}
                        >
                           <AlertIcon />
                           <AlertTitle mr={2} fontWeight={"500"}>
                              Bayar Sebelum:
                           </AlertTitle>
                           <AlertDescription>
                              12 Juli 2021 23:59
                           </AlertDescription>
                        </Alert>

                        <Text fontSize={"sm"} fontWeight={"600"}>
                           Transfer ke Bank:
                        </Text>
                        <Flex alignItems={"center"} mt={1}>
                           <Image
                              src="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/2560px-BNI_logo.svg.png"
                              alt="bni"
                              w={10}
                           />
                           <Text fontSize={"sm"} fontWeight={"300"} ml={2}>
                              BNI Virtual Account
                           </Text>
                        </Flex>

                        <Text fontSize={"sm"} fontWeight={"600"} mt={2}>
                           Transfer ke Rekening:
                        </Text>
                        <Flex alignItems={"center"} mt={1}>
                           <Text fontSize={"sm"} fontWeight={"300"} me={2}>
                              5271 9100 0000 0000
                           </Text>

                           <IoIosCopy size={20} />
                        </Flex>

                        <Text fontSize={"sm"} fontWeight={"600"} mt={2}>
                           Jumlah Tagihan:
                        </Text>
                        <Text fontSize={"sm"} fontWeight={"300"} me={2}>
                           Rp 1.000.000
                        </Text>

                        <Text fontSize={"sm"} fontWeight={"600"} mt={2}>
                           Status:
                        </Text>
                        <Text
                           fontSize={"sm"}
                           fontWeight={"400"}
                           me={2}
                           color={"red.400"}
                        >
                           UNPAID
                        </Text>
                     </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem
                     w={"90%"}
                     h={"fit-content"}
                     bg={useColorModeValue("white", "gray.700")}
                     margin={"auto"}
                     borderRadius={"xl"}
                     shadow={"xl"}
                     px={6}
                     py={5}
                     mt={2}
                     border={"none"}
                  >
                     <AccordionButton
                        p={0}
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        _hover={{ bg: "none" }}
                     >
                        <Text fontSize={"sm"} fontWeight={"600"}>
                           Cara Pembayaran
                        </Text>
                        <AccordionIcon />
                     </AccordionButton>
                     <AccordionPanel p={0} mt={2}>
                        <Text
                           fontSize={"xs"}
                           fontWeight={"300"}
                           color={useColorModeValue("gray.500", "gray.400")}
                        >
                           1. Buka aplikasi m-banking.
                           <br />
                           2. Masukkan username dan password.
                           <br />
                           3. Pilih menu Bayar &gt; One Time &gt; Multipayment.
                           <br />
                           4. Pilih Penyedia Jasa yang digunakan &gt; Lanjut.
                           <br />
                           5. Masukkan nomor Virtual account &gt; Lanjut.
                           <br />
                           6. Layar akan menampilkan konfirmasi. ...
                           <br />
                           7. Selesai.
                        </Text>
                     </AccordionPanel>
                  </AccordionItem>
               </Box>
            </Accordion>
         </Container>
         <Container
            w="sm"
            position="fixed"
            display={"relative"}
            bottom={3}
            left={0}
            right={0}
         >
            <Divider
               mb={3}
               borderColor={useColorModeValue("gray.300", "gray.700")}
            />
            <Button
               w={"100%"}
               variant={"solid"}
               bg={useColorModeValue("red.500", "red.400")}
               color={"white"}
               _hover={{ opacity: "0.9" }}
               _after={{ bg: "red.500" }}
               _active={{ bg: "red.500" }}
               fontSize={"md"}
               size={"lg"}
               px={12}
            >
               Saya Sudah Bayar
            </Button>
         </Container>
      </main>
   );
}
