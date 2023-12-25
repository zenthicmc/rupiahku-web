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
   Spinner,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import BackButton from "@/components/BackButton";
import Link from "next/link";
import { ApiGet } from "@/utils/api";
import { capitalize } from "@/utils/capitalize";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useSearchParams, useRouter } from "next/navigation";

export default function Topup() {
   const searchParams = useSearchParams();
   const type = searchParams.get("type");
   const router = useRouter();

   const [provider, setProvider] = useState([]);
   const [cookies, setCookie] = useCookies(["token"]);
   const [loading, setLoading] = useState(true);
   const [selected, setSelected] = useState({
      product_code: "",
      product_name: "",
      product_type: "",
      icon_url: "",
   });

   useEffect(() => {
      if (type === null) {
         router.push("/");
      }
   });

   // get list produk data dari api
   useEffect(() => {
      setLoading(true);
      async function getData() {
         const response = await ApiGet(`/api/product/${type}`, cookies.token);
         setProvider(response.data);
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
                     Pilih Layanan:
                  </Text>
                  {!loading &&
                     <Grid templateColumns="repeat(2, 1fr)" gap={5} mt={3}>
                        {provider.map((item, index) => (
                           <Button
                              key={index}
                              variant={"outline"}
                              color={useColorModeValue("gray.900", "gray.100")}
                              borderRadius={"xl"}
                              fontSize={"xs"}
                              display={"flex"}
                              flexDirection={"column"}
                              py={9}
                              bg={useColorModeValue("none", "gray.700")}
                              borderColor={useColorModeValue(
                                 "gray.300",
                                 "gray.500"
                              )}
                              _hover={{
                                 borderColor: "red.300",
                                 color: "red.400",
                              }}
                              onClick={() => setSelected(item)}
                              {...(selected.product_code === item.product_code && {
                                 borderColor: "red.400",
                                 color: "red.400",
                              })}
                           >
                              <Image
                                 src={item.icon_url}
                                 alt={item.product_name}
                                 w={"3rem"}
                                 h={"auto"}
                                 mb={2}
                              />
                              {item.product_name.split(" ").length > 2 ? (
                                 <Text
                                    fontSize={"xs"}
                                    fontWeight={"600"}
                                    textAlign={"center"}
                                 >
                                    {capitalize(item.product_name)
                                       .split(" ")
                                       .slice(0, 2)
                                       .join(" ")}
                                    <br />
                                    {capitalize(item.product_name)
                                       .split(" ")
                                       .slice(2)
                                       .join(" ")}
                                 </Text>
                              ) : (
                                 <Text
                                    fontSize={"xs"}
                                    fontWeight={"600"}
                                    textAlign={"center"}
                                 >
                                    {capitalize(item.product_name)}
                                 </Text>
                              )}
                           </Button>
                        ))}
                     </Grid>
                  }
                  {loading &&
                     <Flex justifyContent={"center"} alignItems={"center"} w={"100%"} h={"100%"} my={5}>
                        <Spinner color={"red.400"} size={"lg"} thickness={"3px"} />
                     </Flex>
                  }
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
                     Layanan:
                  </Text>
                  <Text
                     fontSize={"xl"}
                     fontWeight={"700"}
                     textAlign={"right"}
                     color={useColorModeValue("red.500", "red.400")}
                  >
                     {selected.product_name}
                  </Text>
               </Flex>
               {selected.product_code !== "" ? (
                  <Link
                     href={{
                        pathname: "/topup/detail",
                        query: {
                           type: selected.product_type,
                           product_code: selected.product_code,
                        },
                     }}
                  >
                     <Button
                        isLoading={loading}
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
                     isLoading={loading}
                     w={"40%"}
                     variant={"solid"}
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
