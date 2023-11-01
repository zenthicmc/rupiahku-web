"use client";

import {
   Box,
   Container,
   Flex,
   Text,
   Button,
   useColorModeValue,
   Grid,
   Divider,
   Accordion,
   AccordionItem,
   AccordionButton,
   AccordionPanel,
   AccordionIcon,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import BackButton from "@/components/BackButton";
import { useState } from "react";
import {useSearchParams } from "next/navigation";
import Link from "next/link";
import { AiFillCheckCircle } from "react-icons/ai";

export default function Payments() {
   const searchParams = useSearchParams();
   const getAmount = parseInt(searchParams.get("amount") || "0");
   const [amount, setAmount] = useState(getAmount);
   const [method, setMethod] = useState({
      name: "",
      logo: "",
   });

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
                     bg={useColorModeValue("white", "gray.700")}
                     margin={"auto"}
                     borderRadius={"xl"}
                     shadow={"xl"}
                     p={6}
                     border={"none"}
                     mb={4}
                  >
                     <AccordionButton
                        p={0}
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        _hover={{ bg: "none" }}
                     >
                        <Text fontSize={"sm"} fontWeight={"600"}>
                           Virtual Account
                        </Text>
                        <AccordionIcon />
                     </AccordionButton>
                     <AccordionPanel p={0}>
                        <Grid templateColumns="repeat(4, 1fr)" gap={5} mt={3}>
                           <Box>
                              <Button
                                 variant={"outline"}
                                 bg={useColorModeValue("white", "gray.700")}
                                 shadow={"xl"}
                                 p={3}
                                 borderRadius={"lg"}
                                 w={"50"}
                                 h={"50"}
                                 onClick={() => {
                                    setMethod({
                                       name: "BNI",
                                       logo: "https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/2560px-BNI_logo.svg.png",
                                    });
                                 }}
                                 {...(method.name === "BNI" && {
                                    borderColor: "red.400",
                                 })}
                              >
                                 <Image
                                    src="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/2560px-BNI_logo.svg.png"
                                    alt="BNI"
                                 />
                              </Button>
                              <Text
                                 fontSize={"xs"}
                                 fontWeight={"300"}
                                 textAlign={"center"}
                                 mt={1}
                              >
                                 BNI
                              </Text>
                           </Box>
                           <Box>
                              <Button
                                 variant={"outline"}
                                 bg={useColorModeValue("white", "gray.700")}
                                 shadow={"xl"}
                                 p={3}
                                 borderRadius={"lg"}
                                 w={"50"}
                                 h={"50"}
                                 onClick={() => {
                                    setMethod({
                                       name: "BRI",
                                       logo: "https://i0.wp.com/febi.uinsaid.ac.id/wp-content/uploads/2020/11/Logo-BRI-Bank-Rakyat-Indonesia-PNG-Terbaru.png?ssl=1",
                                    });
                                 }}
                                 {...(method.name === "BRI" && {
                                    borderColor: "red.400",
                                 })}
                              >
                                 <Image
                                    src="https://i0.wp.com/febi.uinsaid.ac.id/wp-content/uploads/2020/11/Logo-BRI-Bank-Rakyat-Indonesia-PNG-Terbaru.png?ssl=1"
                                    alt="BRI"
                                 />
                              </Button>
                              <Text
                                 fontSize={"xs"}
                                 fontWeight={"300"}
                                 textAlign={"center"}
                                 mt={1}
                              >
                                 BRI
                              </Text>
                           </Box>
                           <Box>
                              <Button
                                 variant={"outline"}
                                 bg={useColorModeValue("white", "gray.700")}
                                 shadow={"xl"}
                                 p={3}
                                 borderRadius={"lg"}
                                 w={"50"}
                                 h={"50"}
                                 onClick={() => {
                                    setMethod({
                                       name: "BCA",
                                       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1200px-Bank_Central_Asia.svg.png",
                                    });
                                 }}
                                 {...(method.name === "BCA" && {
                                    borderColor: "red.400",
                                 })}
                              >
                                 <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1200px-Bank_Central_Asia.svg.png"
                                    alt="bca"
                                 />
                              </Button>
                              <Text
                                 fontSize={"xs"}
                                 fontWeight={"300"}
                                 textAlign={"center"}
                                 mt={1}
                              >
                                 BCA
                              </Text>
                           </Box>
                           <Box>
                              <Button
                                 variant={"outline"}
                                 bg={useColorModeValue("white", "gray.700")}
                                 shadow={"xl"}
                                 p={2}
                                 borderRadius={"lg"}
                                 w={"50"}
                                 h={"50"}
                                 onClick={() => {
                                    setMethod({
                                       name: "Mandiri",
                                       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/2560px-Bank_Mandiri_logo_2016.svg.png",
                                    });
                                 }}
                                 {...(method.name === "Mandiri" && {
                                    borderColor: "red.400",
                                 })}
                              >
                                 <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/2560px-Bank_Mandiri_logo_2016.svg.png"
                                    alt="Mandiri"
                                 />
                              </Button>
                              <Text
                                 fontSize={"xs"}
                                 fontWeight={"300"}
                                 textAlign={"center"}
                                 mt={1}
                              >
                                 Mandiri
                              </Text>
                           </Box>
                           <Box>
                              <Button
                                 variant={"outline"}
                                 bg={useColorModeValue("white", "gray.700")}
                                 shadow={"xl"}
                                 p={3}
                                 borderRadius={"lg"}
                                 w={"50"}
                                 h={"50"}
                              >
                                 <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bank_Syariah_Indonesia.svg/2560px-Bank_Syariah_Indonesia.svg.png"
                                    alt="bsi"
                                 />
                              </Button>
                              <Text
                                 fontSize={"xs"}
                                 fontWeight={"300"}
                                 textAlign={"center"}
                                 mt={1}
                              >
                                 BSI
                              </Text>
                           </Box>
                           <Box>
                              <Button
                                 variant={"outline"}
                                 bg={useColorModeValue("white", "gray.700")}
                                 shadow={"xl"}
                                 p={2}
                                 borderRadius={"lg"}
                                 w={"50"}
                                 h={"50"}
                              >
                                 <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Danamon.svg/2560px-Danamon.svg.png"
                                    alt="danamon"
                                 />
                              </Button>
                              <Text
                                 fontSize={"xs"}
                                 fontWeight={"300"}
                                 textAlign={"center"}
                                 mt={1}
                              >
                                 Danamon
                              </Text>
                           </Box>
                           <Box>
                              <Button
                                 variant={"outline"}
                                 bg={useColorModeValue("white", "gray.700")}
                                 shadow={"xl"}
                                 p={2}
                                 borderRadius={"lg"}
                                 w={"50"}
                                 h={"50"}
                              >
                                 <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/CIMB_Niaga_logo.svg/2560px-CIMB_Niaga_logo.svg.png"
                                    alt="CIMB"
                                 />
                              </Button>
                              <Text
                                 fontSize={"xs"}
                                 fontWeight={"300"}
                                 textAlign={"center"}
                                 mt={1}
                              >
                                 CIMB
                              </Text>
                           </Box>
                           <Box>
                              <Button
                                 variant={"outline"}
                                 bg={useColorModeValue("white", "gray.700")}
                                 shadow={"xl"}
                                 p={3}
                                 borderRadius={"lg"}
                                 w={"50"}
                                 h={"50"}
                              >
                                 <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/4/41/Logo-maybank.png"
                                    alt="Maybank"
                                 />
                              </Button>
                              <Text
                                 fontSize={"xs"}
                                 fontWeight={"300"}
                                 textAlign={"center"}
                                 mt={1}
                              >
                                 Maybank
                              </Text>
                           </Box>
                        </Grid>
                     </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem
                     w={"90%"}
                     h={"fit-content"}
                     bg={useColorModeValue("white", "gray.700")}
                     margin={"auto"}
                     borderRadius={"xl"}
                     shadow={"xl"}
                     p={6}
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
                           Minimarket
                        </Text>
                        <AccordionIcon />
                     </AccordionButton>
                     <AccordionPanel p={0}>
                        <Grid templateColumns="repeat(4, 1fr)" gap={5} mt={3}>
                           <Box>
                              <Button
                                 variant={"outline"}
                                 bg={useColorModeValue("white", "gray.700")}
                                 shadow={"xl"}
                                 p={3}
                                 borderRadius={"lg"}
                                 w={"50"}
                                 h={"50"}
                              >
                                 <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/8/86/Alfamart_logo.svg"
                                    alt="Alfamart"
                                 />
                              </Button>
                              <Text
                                 fontSize={"xs"}
                                 fontWeight={"300"}
                                 textAlign={"center"}
                                 mt={1}
                              >
                                 Alfamart
                              </Text>
                           </Box>
                           <Box>
                              <Button
                                 variant={"outline"}
                                 bg={useColorModeValue("white", "gray.700")}
                                 shadow={"xl"}
                                 p={3}
                                 borderRadius={"lg"}
                                 w={"50"}
                                 h={"50"}
                              >
                                 <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Logo_Indomaret.png"
                                    alt="Indomaret"
                                 />
                              </Button>
                              <Text
                                 fontSize={"xs"}
                                 fontWeight={"300"}
                                 textAlign={"center"}
                                 mt={1}
                              >
                                 Indomaret
                              </Text>
                           </Box>
                           <Box>
                              <Button
                                 variant={"outline"}
                                 bg={useColorModeValue("white", "gray.700")}
                                 shadow={"xl"}
                                 p={3}
                                 borderRadius={"lg"}
                                 w={"50"}
                                 h={"50"}
                              >
                                 <Image
                                    src="https://alfamidiku.com/assets/images/logo.png"
                                    alt="Alfamidi"
                                 />
                              </Button>
                              <Text
                                 fontSize={"xs"}
                                 fontWeight={"300"}
                                 textAlign={"center"}
                                 mt={1}
                              >
                                 Alfamidi
                              </Text>
                           </Box>
                        </Grid>
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
            <Flex justifyContent={"center"} alignItems={"center"} gap={5}>
               <Flex w={"auto"} flexDirection={"column"} float={"right"}>
                  <Text fontSize={"sm"} fontWeight={"500"} textAlign={"right"}>
                     Total Bayar:
                  </Text>
                  <Text
                     fontSize={"xl"}
                     fontWeight={"700"}
                     textAlign={"right"}
                     color={useColorModeValue("red.500", "red.400")}
                  >
                     Rp {amount > 0 ? amount.toLocaleString("id-ID") : 0}
                  </Text>
               </Flex>
               {amount >= 10000 && method.name ? (
                  <Link
                     href={{
                        pathname: "/checkout/bank",
                        query: { id: 23238823 },
                     }}
                  >
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
                        Lanjut
                     </Button>
                  </Link>
               ) : (
                  <Button
                     w={"40%"}
                     variant={"solid"}
                     bg={useColorModeValue("gray.300", "gray.700")}
                     color={"white"}
                     _hover={{ opacity: "0.9" }}
                     _after={{ bg: "gray.300" }}
                     _active={{ bg: "gray.300" }}
                     fontSize={"md"}
                     size={"lg"}
                     disabled
                  >
                     Lanjut
                  </Button>
               )}
            </Flex>
         </Container>
      </main>
   );
}
