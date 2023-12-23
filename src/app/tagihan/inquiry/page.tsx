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

export default function Inquiry() {
   const searchParams = useSearchParams();
   const type = searchParams.get("type");
   const product_code = searchParams.get("product_code");
   const router = useRouter();
   const toast = useToast();

   const [cookies, setCookie] = useCookies(["token"]);
   const [loading, setLoading] = useState(false);
   const [receiver, setReceiver] = useState("");

   useEffect(() => {
      if (product_code === null) {
         router.push(`/topup?type=${type}`);
      }
   });

   async function handleSubmit() {
      setLoading(true);
      if (!receiver && !product_code) {
         toast({
            title: "Data is not complete",
            position: "bottom",
            status: "error",
            isClosable: true,
         });
         setLoading(false);
         return false;
      }

      const response = await ApiPost("/api/tagihan/inquiry", cookies.token, {
         customer_id: receiver,
         code: product_code,
      });

      if(response.data.response_code == "00") {
			if(response.data.nominal <= "0") {
				toast({
					title: "Anda tidak memiliki tagihan",
					position: "bottom",
					status: "error",
					isClosable: true,
				});

				return false;
			}

			router.push("/tagihan/detail?ref_id=" + response.data.ref_id); 
		}
		else {
			toast({
            title: response.data.message,
            position: "bottom",
            status: "error",
            isClosable: true,
         });
		}

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
                  <Text fontSize={"sm"} fontWeight={"600"}>
                     Nomor Pelanggan:
                  </Text>

                  <InputGroup mt={1}>
                     <InputLeftElement pointerEvents="none">
                        <FaUser color="#A0AEC0" />
                     </InputLeftElement>
                     <Input
                        type="number"
                        placeholder="Nomor Pelanggan"
                        fontSize={"sm"}
                        onChange={(e) => setReceiver(e.target.value)}
                     />
                  </InputGroup>
                  <Text
                     fontSize={"xs"}
                     fontWeight={"300"}
                     color={"gray.500"}
                     lineHeight={1.4}
                     mt={2}
                  >
                     Silahkan masukkan nomor pelanggan anda, pastikan nomor yang
                     anda masukkan benar.
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
                     Nomor Pelanggan:
                  </Text>
                  <Text
                     fontSize={"md"}
                     fontWeight={"700"}
                     textAlign={"right"}
                     color={useColorModeValue("red.500", "red.400")}
                  >
                     {receiver}
                  </Text>
               </Flex>
               {receiver ? (
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
                     Lanjut
                  </Button>
               ) : (
                  <Button
                     isLoading={loading}
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
