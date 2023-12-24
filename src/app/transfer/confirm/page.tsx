"use client";

import {
   Box,
   Container,
   Flex,
   Text,
   Button,
   useColorModeValue,
   Divider,
   useToast,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import BackButton from "@/components/BackButton";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCookies } from "react-cookie";
import { ApiGet, ApiPost } from "@/utils/api";
import { capitalize } from "@/utils/capitalize";

export default function Confirm() {
   const searchParams = useSearchParams();
   const toast = useToast();
   const router = useRouter();

   const getAmount = parseInt(searchParams.get("amount"));
   const getPhone = searchParams.get("phone");

   const [loading, setLoading] = useState(false);
   const [cookies, setCookie] = useCookies(["token"]);
   const [amount, setAmount] = useState(getAmount);
   const [phone, setPhone] = useState(getPhone);
   const [user, setUser] = useState({
      name: "",
      nohp: "",
   });

   useEffect(() => {
      if (getAmount === null || getPhone === null) {
         router.push('/transfer');
      }
   })

   useEffect(() => {
      async function getData() {
         const response = await ApiGet(`/api/user/phone/+62${phone}`, cookies.token);
         if(!response.success) {
            toast({
               title: response.message,
               position: "top",
               status: "error",
               isClosable: true,
            });

            return router.push('/transfer');
         }
         
         setUser(response.data);
      }

      getData();
   }, []);

   async function handleSubmit() {
      setLoading(true);
      const response = await ApiPost(
         "/api/transaction/transfer",
         cookies.token,
         {
            receiver: '+62' + phone,
            amount: amount,
         }
      );

      // check if success is false
      if (!response.success) {
         toast({
            title: response.message,
            position: "top",
            status: "error",
            isClosable: true,
         });
         setLoading(false);
         return;
      }

      setLoading(false);
      router.push(`/success?amount=${amount}&title=Transfer Berhasil`);
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
            <Box as="section" pos={"relative"}>
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
                  w={"90%"}
                  h={"fit-content"}
                  bg={useColorModeValue("white", "gray.700")}
                  margin={"auto"}
                  left={"0"}
                  right={"0"}
                  top={"7rem"}
                  borderRadius={"xl"}
                  shadow={"xl"}
                  p={6}
               >
                  <Text fontSize={"md"} fontWeight={"600"}>
                     Konfirmasi Transfer
                  </Text>

                  <Text fontSize={"xs"} fontWeight={"400"} mt={5}>
                     Nomor Handphone
                  </Text>
                  <Text fontSize={"sm"} fontWeight={"600"}>
                     {user.nohp}
                  </Text>

                  <Text fontSize={"xs"} fontWeight={"400"} mt={3}>
                     Nama Penerima
                  </Text>
                  <Text fontSize={"sm"} fontWeight={"600"}>
                     {capitalize(user.name)}
                  </Text>

                  <Text fontSize={"xs"} fontWeight={"400"} mt={3}>
                     Nominal Transfer
                  </Text>
                  <Text fontSize={"sm"} fontWeight={"600"}>
                     Rp {amount > 0 ? amount.toLocaleString("id-ID") : 0}
                  </Text>
               </Box>
            </Box>
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
               <Button
                  isLoading={loading}
                  onClick={handleSubmit}
                  w={"40%"}
                  variant={"solid"}
                  bg={useColorModeValue("red.500", "red.400")}
                  color={"white"}
                  _hover={{ opacity: "0.9" }}
                  _after={{ bg: "red.500" }}
                  _active={{ bg: "red.500" }}
                  fontSize={"md"}
                  size={"lg"}
               >
                  Transfer
               </Button>
            </Flex>
         </Container>
      </main>
   );
}
