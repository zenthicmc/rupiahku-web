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
   useToast,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import BackButton from "@/components/BackButton";
import { useState, useEffect } from "react";
import { MdContentCopy } from "react-icons/md";
import { useSearchParams } from "next/navigation";
import { ApiGet } from "@/utils/api";
import { useCookies } from "react-cookie";
import { sanitize } from "@/utils/sanitize";

export default function Bank() {
   const searchParams = useSearchParams();
   const getID = searchParams.get("id");
   const [cookies, setCookie] = useCookies(["token"]);
   const [loading, setLoading] = useState(true);
   const [transaction, setTransaction] = useState({
      payment_method: "",
      payment_name: "",
      icon_url: "",
      pay_code: "",
      amount: "",
      expired_time: "",
      status: "",
   });
   const [instructions, setInstructions] = useState([]);
   const [method, setMethod] = useState([]);
   const [refreshAt, setRefreshAt] = useState(new Date().valueOf());
   const toast = useToast();

   useEffect(() => {
      setLoading(true);
      async function getData() {
         const response = await ApiGet(
            `/api/transaction/${getID}`,
            cookies.token
         );
         setTransaction(response.data);
         setInstructions(response.data.instructions);
         setLoading(false);
      }

      getData();
   }, [refreshAt]);

   useEffect(() => {
      async function getData() {
         const response = await ApiGet("/api/payment", cookies.token);
         setMethod(response.data);
      }

      getData();
   }, []);

   const handleCopy = (value: string) => {
      navigator.clipboard.writeText(value);
      toast({
         title: "Berhasil menyalin kode",
         status: "success",
         duration: 2000,
         isClosable: true,
         position: "bottom",
      });
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
                              {/* convert timestamp to date */}
                              {new Date(
                                 transaction.expired_time
                              ).toLocaleDateString("en-US", {
                                 year: "numeric",
                                 month: "numeric",
                                 day: "numeric",
                                 hour: "numeric",
                                 minute: "numeric",
                              })}
                           </AlertDescription>
                        </Alert>

                        <Text fontSize={"sm"} fontWeight={"600"}>
                           Transfer ke Bank:
                        </Text>
                        <Flex alignItems={"center"} mt={1}>
                           {method.map((method, i) =>
                              method.code == transaction.payment_method ? (
                                 <Image
                                    key={i}
                                    src={method.icon_url}
                                    alt={method.code}
                                    w={10}
                                 />
                              ) : null
                           )}
                           <Text fontSize={"sm"} fontWeight={"300"} ml={2}>
                              {transaction.payment_name}
                           </Text>
                        </Flex>

                        <Text fontSize={"sm"} fontWeight={"600"} mt={2}>
                           Transfer ke Rekening:
                        </Text>
                        <Flex alignItems={"center"} mt={1}>
                           <Text fontSize={"sm"} fontWeight={"300"} me={2}>
                              {transaction.pay_code}
                           </Text>

                           <MdContentCopy
                              size={15}
                              onClick={() => handleCopy(transaction.pay_code)}
                           />
                        </Flex>

                        <Text fontSize={"sm"} fontWeight={"600"} mt={2}>
                           Jumlah Tagihan:
                        </Text>
                        <Text fontSize={"sm"} fontWeight={"300"} me={2}>
                           Rp {transaction.amount.toLocaleString()}
                        </Text>

                        <Text fontSize={"sm"} fontWeight={"600"} mt={2}>
                           Status:
                        </Text>
                        <Text
                           fontSize={"sm"}
                           fontWeight={"400"}
                           me={2}
                           color={
                              transaction.status == "UNPAID"
                                 ? "red.300"
                                 : "green.300"
                           }
                        >
                           {transaction.status}
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
                        <ul>
                           {instructions.map(
                              (instruction, i) =>
                                 instruction.title == "Internet Banking" &&
                                 instruction.steps.map((step, i) => (
                                    <li key={i}>
                                       <Text
                                          fontSize={"xs"}
                                          fontWeight={"300"}
                                          color={useColorModeValue(
                                             "gray.500",
                                             "gray.400"
                                          )}
                                       >
                                          {i + 1}. {sanitize(step)}
                                       </Text>
                                    </li>
                                 ))
                           )}
                        </ul>
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
               isLoading={loading}
               onClick={() => setRefreshAt(new Date().valueOf())}
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
