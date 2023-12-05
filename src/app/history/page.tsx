"use client";

import {
   Box,
   Container,
   Flex,
   Text,
   Card,
   useColorModeValue,
   Skeleton,
   SkeletonCircle,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import BottomNav from "@/components/BottomNav";
import { capitalize } from "@/utils/capitalize";
import { formatDate } from "@/utils/Date";
import { ApiGet } from "@/utils/api";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export default function History() {
   const [transactions, setTransactions] = useState([]);
   const [cookies, setCookie] = useCookies(["token"]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setLoading(true);
      async function getData() {
         const response = await ApiGet("/api/transaction", cookies.token);
         setTransactions(response.data);
         setLoading(false);
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
                  gap={2}
               >
                  {loading == false ? (
                     transactions.length > 0 ? (
                        <>
                           {transactions.map((transaction, i) => (
                              <Card
                                 w={"100%"}
                                 p={4}
                                 borderRadius={"xl"}
                                 shadow={"md"}
                                 key={i}
                              >
                                 <Flex
                                    justifyContent={"space-between"}
                                    alignItems={"center"}
                                 >
                                    <Flex alignItems={"center"}>
                                       <Image
                                          src={useColorModeValue(
                                             transaction.icon,
                                             transaction.icon_dark
                                          )}
                                          alt="Rupiahku"
                                          w={10}
                                          h={10}
                                          borderRadius={"full"}
                                       />
                                       <Box ms={3}>
                                          <Text
                                             fontSize={"sm"}
                                             fontWeight={"bold"}
                                          >
                                             {capitalize(transaction.type)}
                                          </Text>
                                          <Text
                                             fontSize={"xs"}
                                             color={"gray.500"}
                                             fontWeight={"300"}
                                          >
                                             {formatDate(transaction.createdAt)}
                                          </Text>
                                       </Box>
                                    </Flex>
                                    <Box ms={3} textAlign={"end"}>
                                       <Text
                                          fontSize={"sm"}
                                          fontWeight={"bold"}
                                       >
                                          Rp{" "}
                                          {transaction.amount.toLocaleString(
                                             "id-ID"
                                          )}
                                       </Text>
                                       <Text
                                          fontSize={"xs"}
                                          color={
                                             transaction.status === "Success"
                                                ? "green.400"
                                                : transaction.status ===
                                                  "Pending"
                                                ? "yellow.400"
                                                : "red.400"
                                          }
                                       >
                                          {transaction.status}
                                       </Text>
                                    </Box>
                                 </Flex>
                              </Card>
                           ))}
                        </>
                     ) : (
                        <>
                           <Card
                              w={"100%"}
                              p={4}
                              borderRadius={"xl"}
                              shadow={"md"}
                           >
                              <Flex
                                 justifyContent={"space-between"}
                                 alignItems={"center"}
                              >
                                 <Flex alignItems={"center"}>
                                    <Image
                                       src={"/question.png"}
                                       alt="Rupiahku"
                                       w={10}
                                       h={10}
                                       borderRadius={"full"}
                                    />
                                    <Box ms={3}>
                                       <Text
                                          fontSize={"sm"}
                                          fontWeight={"bold"}
                                       >
                                          Transaksi Tidak Ditemukan
                                       </Text>
                                       <Text
                                          fontSize={"xs"}
                                          color={"gray.500"}
                                          fontWeight={"300"}
                                       >
                                          Ayo mulai transaksi pertama anda!
                                       </Text>
                                    </Box>
                                 </Flex>
                              </Flex>
                           </Card>
                        </>
                     )
                  ) : (
                     <>
                        {[...Array(8)].map((_, i) => (
                           <Card
                              w={"100%"}
                              p={4}
                              borderRadius={"xl"}
                              shadow={"md"}
                              key={i}
                           >
                              <Flex
                                 justifyContent={"space-between"}
                                 alignItems={"center"}
                                 w={"100%"}
                              >
                                 <Flex alignItems={"center"}>
                                    <SkeletonCircle size="10" />
                                    <Box ms={3}>
                                       <Skeleton h={4} w={"250px"} />
                                       <Skeleton h={4} w={"250px"} mt={1} />
                                    </Box>
                                 </Flex>
                              </Flex>
                           </Card>
                        ))}
                     </>
                  )}
               </Flex>
            </Container>
         </Container>
         <BottomNav />
      </main>
   );
}
