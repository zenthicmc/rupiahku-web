"use client";

import {
   Box,
   Container,
   Flex,
   Text,
   Button,
   useColorModeValue,
   Divider,
   Input,
   InputGroup,
   InputLeftElement,
   Spinner,
   useToast,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import BackButton from "@/components/BackButton";
import Link from "next/link";
import { ApiGet, ApiPost } from "@/utils/api";
import { FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useSearchParams, useRouter } from "next/navigation";
import { capitalize } from "@/utils/capitalize";

export default function Topup() {
   const searchParams = useSearchParams();
   const ref_id = searchParams.get("ref_id");
   const router = useRouter();
   const toast = useToast();

   const [cookies, setCookie] = useCookies(["token"]);
   const [loading, setLoading] = useState(false);
   const [loadingApi, setLoadingApi] = useState(false);
   const [receiver, setReceiver] = useState("");
   const [data, setData] = useState({
      tr_name: "",
      hp: "",
      nominal: "0",
   });

   useEffect(() => {
      if (ref_id === null) {
         router.push('/tagihan');
      }
   });

   useEffect(() => {
      setLoadingApi(true);
      const getData = async () => {
         const response = await ApiPost("/api/tagihan/detail", cookies.token, {
            ref_id: ref_id,
         });

         setData(response.data);
         setLoadingApi(false);
      };

      getData();
   }, []);

   async function handleSubmit() {
      setLoading(true);
      const response = await ApiPost("/api/tagihan/pay", cookies.token, {
         ref_id: ref_id,
      });

      console.log(response.data);
      if(response.data.response_code != "00") {
         toast({
            title: response.data.message,
            position: "bottom",
            status: "error",
            isClosable: true,
         });
         setLoading(false);
         return false;
      }

      router.push(`/success?amount=${response.data.nominal}&title=Bayar Tagihan Berhasil`);
      setLoading(false);
   }

   return (
      <main>
         <Container
            w="sm"
            background={useColorModeValue("#F6F8FB", "gray.800")}
            p={0}
            h={"auto"}
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
                  {!loadingApi && (
                     <>
                        <Text fontSize={"sm"} fontWeight={"600"}>
                           Detail Tagihan
                        </Text>

                        <Text fontSize={"xs"} fontWeight={"400"} mt={4}>
                           Layanan
                        </Text>
                        <Text fontSize={"sm"} fontWeight={"600"}>
                           {capitalize(data.tr_name)}
                        </Text>

                        <Text fontSize={"xs"} fontWeight={"400"} mt={2}>
                           Nomor Pelanngan
                        </Text>
                        <Text fontSize={"sm"} fontWeight={"600"}>
                           {data.hp}
                        </Text>

                        <Text fontSize={"xs"} fontWeight={"400"} mt={2}>
                           Nominal Pembayaran
                        </Text>
                        <Text fontSize={"sm"} fontWeight={"600"}>
                           Rp {parseInt(data.nominal).toLocaleString("id-ID")}
                        </Text>
                     </>
                  )}

                  {loadingApi && (
                     <Flex
                        justifyContent={"center"}
                        alignItems={"center"}
                        w={"100%"}
                        h={"100%"}
                        my={5}
                     >
                        <Spinner
                           color={"red.400"}
                           size={"lg"}
                           thickness={"3px"}
                        />
                     </Flex>
                  )}
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
                     Nominal:
                  </Text>
                  <Text
                     fontSize={"xl"}
                     fontWeight={"700"}
                     textAlign={"right"}
                     color={useColorModeValue("red.500", "red.400")}
                  >
                     Rp {parseInt(data.nominal).toLocaleString("id-ID")}
                  </Text>
               </Flex>
               <Button
                  isLoading={loading}
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
                  onClick={handleSubmit}
               >
                  Bayar
               </Button>
            </Flex>
         </Container>
      </main>
   );
}
