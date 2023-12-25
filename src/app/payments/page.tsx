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
   useToast,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import BackButton from "@/components/BackButton";
import { ApiGet, ApiPost } from "@/utils/api";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter, useSearchParams } from "next/navigation";

export default function Payments() {
   const [cookies, setCookie] = useCookies(["token"]);
   const [loading, setLoading] = useState(false);
   const [method, setMethod] = useState([]);

   const toast = useToast();
   const router = useRouter();
   const searchParams = useSearchParams();

   const getAmount = parseInt(searchParams.get("amount") || "0");
   const [amount, setAmount] = useState(getAmount);
   const [payment, setPayment] = useState({
      code: "",
      amount: amount,
   });

   // mendapatkan payment method
   useEffect(() => {
      async function getData() {
         const response = await ApiGet("/api/payment", cookies.token);
         setMethod(response.data);
      }

      getData();
   }, []);

   async function handleSubmit() {
      setLoading(true);
      if (!payment.code && !payment.amount) {
         toast({
            title: "Payment method or amount are not selected",
            position: "bottom",
            status: "error",
            isClosable: true,
         });
         setLoading(false);
         return false;
      }

      const response = await ApiPost("/api/transaction/deposit", cookies.token, {
         method: payment.code,
         amount: payment.amount,
      });

      setLoading(false);
      router.push(`/checkout/bank/?id=${response.data._id}`);
   }

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
                        <Grid templateColumns="repeat(4, 1fr)" gap={3} mt={3}>
                           {method &&
                              method.map(
                                 (item) =>
                                    item.group == "Virtual Account" && (
                                       <Box
                                          textAlign={"center"}
                                          key={item.code}
                                       >
                                          <Button
                                             variant={"outline"}
                                             bg={useColorModeValue(
                                                "white",
                                                "gray.700"
                                             )}
                                             shadow={"xl"}
                                             p={3}
                                             borderRadius={"lg"}
                                             w={"50"}
                                             h={"50"}
                                             onClick={() => {
                                                setPayment({
                                                   code: item.code,
                                                   amount: amount,
                                                });
                                             }}
                                             {...(payment.code ===
                                                item.code && {
                                                borderColor: "red.400",
                                             })}
                                          >
                                             <Image
                                                src={item.icon_url}
                                                alt={item.code}
                                                w={"35px"}
                                                h={"18px"}
                                             />
                                          </Button>
                                          <Text
                                             fontSize={"xs"}
                                             fontWeight={"300"}
                                             mt={1}
                                          >
                                             {item.name.split(" ")[0]}
                                          </Text>
                                       </Box>
                                    )
                              )}
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
                           {method &&
                              method.map(
                                 (item) =>
                                    item.group == "Convenience Store" && (
                                       <Box
                                          textAlign={"center"}
                                          key={item.code}
                                       >
                                          <Button
                                             variant={"outline"}
                                             bg={useColorModeValue(
                                                "white",
                                                "gray.700"
                                             )}
                                             shadow={"xl"}
                                             p={3}
                                             borderRadius={"lg"}
                                             w={"50"}
                                             h={"50"}
                                             onClick={() => {
                                                setPayment({
                                                   code: item.code,
                                                   amount: amount,
                                                });
                                             }}
                                             {...(payment.code ===
                                                item.code && {
                                                borderColor: "red.400",
                                             })}
                                          >
                                             <Image
                                                src={item.icon_url}
                                                alt={item.code}
                                                w={"35px"}
                                                h={"18px"}
                                             />
                                          </Button>
                                          <Text
                                             fontSize={"xs"}
                                             fontWeight={"300"}
                                             mt={1}
                                          >
                                             {item.name.split(" ")[0]}
                                          </Text>
                                       </Box>
                                    )
                              )}
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
               {amount >= 10000 && payment.code ? (
                  <Button
                     isLoading={loading}
                     onClick={() => handleSubmit()}
                     w={"40%"}
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
