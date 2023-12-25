"use client";

import {
   Box,
   Container,
   Flex,
   Text,
   Button,
   useColorModeValue,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";
import BottomNav from "@/components/BottomNav";
import Link from "next/link";
import OtherTransaction from "@/components/OtherTransaction";
import ProfileName from "@/components/ProfileName";
import Balance from "@/components/Balance";
import HomeTransactions from "@/components/HomeTransactions";
import { ApiGet } from "@/utils/api";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function Home() {
   const [cookies, setCookie] = useCookies(["token"]);
   const [transactions, setTransactions] = useState([]);
   const [loading, setLoading] = useState(true);
   const [profile, setProfile] = useState({
      name: "",
      saldo: "",
      image: "",
   });

   useEffect(() => {
      setLoading(true);
      // mengambil data dari api
      async function getData() {
         const response = await ApiGet("/api/user/getprofile", cookies.token);
         setProfile(response.data.user);
         setTransactions(response.data.transactions);
         setLoading(false);
      }

      getData();
   }, [])

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
            <Box as="section" pos={"relative"}>
               <Image
                  src="/hero.jpg"
                  alt="hero"
                  background={"teal"}
                  w={"full"}
                  h={"180"}
               />

               {/* Profile Name */}
               <ProfileName name={profile.name} image={profile.image} />

               {/* Balance */}
               <Balance saldo={profile.saldo} />
            </Box>

            <Container w={"90%"} margin={"auto"} p={0} py={1}>
               {/* Button Group */}
               <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  mt={14}
               >
                  <Link href="/deposit">
                     <Button
                        leftIcon={<FaPlus />}
                        bg={useColorModeValue("gray.900", "gray.700")}
                        color={"white"}
                        variant="elevated"
                        borderRadius={"full"}
                        fontSize={"sm"}
                        px={10}
                     >
                        Deposit
                     </Button>
                  </Link>

                  <Link href="/transfer">
                     <Button
                        leftIcon={<BsArrowLeftRight />}
                        bg={"white"}
                        color={"gray.900"}
                        variant="elevated"
                        shadow={"md"}
                        borderRadius={"full"}
                        fontSize={"sm"}
                        px={10}
                     >
                        Transfer
                     </Button>
                  </Link>
               </Flex>

               {/* Other Transactions */}
               <OtherTransaction />

               {/* Latest Transactions */}
               <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  mt={5}
               >
                  <Text
                     fontSize={"sm"}
                     fontWeight={"bold"}
                     color={useColorModeValue("gray.900", "gray.100")}
                  >
                     Transaksi Terbaru
                  </Text>

                  <Link href="/history">
                     <Text fontSize={"xs"} color={"blue.400"}>
                        Selengkapnya
                     </Text>
                  </Link>
               </Flex>

               {/* Transaction List */}
               <HomeTransactions
                  transactions={transactions}
                  isLoading={loading}
               />
            </Container>
         </Container>
         <BottomNav />
      </main>
   );
}
