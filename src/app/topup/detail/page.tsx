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
   Input,
   InputGroup,
   InputLeftElement,
   Spinner,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import BackButton from "@/components/BackButton";
import Link from "next/link";
import { BsFillLightningFill } from "react-icons/bs";
import { ApiGet } from "@/utils/api";
import { capitalize } from "@/utils/capitalize";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useSearchParams, useRouter } from "next/navigation";

export default function Topup() {
   const searchParams = useSearchParams();
   const type = searchParams.get("type");
   const product_code = searchParams.get("product_code");
   const router = useRouter();

   const [cookies, setCookie] = useCookies(["token"]);
   const [loading, setLoading] = useState(true);
   const [data, setData] = useState([]);
   const [selected, setSelected] = useState({
      product_code: "",
      product_name: "",
      product_type: "",
      icon_url: "",
   });

   useEffect(() => {
      if (type === null || product_code === null) {
         router.push(`/topup?type=${type}`);
      }
   });

   useEffect(() => {
      setLoading(true);
      async function getData() {
         const response = await ApiGet(
            `/api/product/${type}/${product_code}`,
            cookies.token
         );
         setData(response.data);
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
            h={"auto"}
            minH={"200vh"}
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
                  {!loading && (
                     <>
                        <Text fontSize={"sm"} fontWeight={"600"}>
                           Nomor Meteran:
                        </Text>
                        <InputGroup mt={1}>
                           <InputLeftElement pointerEvents="none">
                              <BsFillLightningFill color="#A0AEC0" />
                           </InputLeftElement>
                           <Input
                              type="number"
                              placeholder="Nomer meteran"
                              fontSize={"sm"}
                           />
                        </InputGroup>

                        <Text fontSize={"sm"} fontWeight={"600"} mt={3}>
                           Pilih Nominal:
                        </Text>
                        <Grid templateColumns="repeat(2, 1fr)" gap={5} mt={2}>
                           {data &&
                              data.map((item, key) => (
                                 item.product_nominal.toLowerCase().indexOf("khusus") === -1 && (
                                    key < 24 && (
                                       <Button
                                          key={key}
                                          variant={"outline"}
                                          py={10}
                                          bg={useColorModeValue("none", "gray.700")}
                                          display={"flex"}
                                          flexDirection={"column"}
                                          alignItems={"center"}
                                          color={useColorModeValue(
                                             "gray.900",
                                             "gray.100"
                                          )}
                                          borderRadius={"xl"}
                                          borderColor={useColorModeValue(
                                             "gray.300",
                                             "gray.500"
                                          )}
                                          _hover={{
                                             borderColor: "red.300",
                                             color: "red.400",
                                          }}
                                          onClick={() => setSelected(item)}
                                          {...(selected.product_code ===
                                             item.product_code && {
                                             borderColor: "red.400",
                                             color: "red.400",
                                          })}
                                       >
                                          <Text
                                                fontSize={"xs"}
                                                fontWeight={"600"}
                                                textAlign={"center"}
                                                style={{
                                                   display: "block",
                                                   whiteSpace: "pre-wrap",
                                                }}
                                                {...(selected.product_code ===
                                                   item.product_code && {
                                                   color: "red.400",
                                                })}
                                             >
                                                {item.product_nominal}
                                          </Text>
                                          <Text
                                             fontSize={"xs"}
                                             fontWeight={"300"}
                                             color={useColorModeValue(
                                                "gray.500",
                                                "gray.300"
                                             )}
                                             {...(selected.product_code ===
                                                item.product_code && {
                                                color: "red.400",
                                             })}
                                             mt={1}
                                          >
                                             Bayar Rp{" "}
                                             {item.product_price.toLocaleString(
                                                "id-ID"
                                             )}
                                          </Text>
                                       </Button>
                                    )
                                 )
                              ))}
                        </Grid>
                     </>
                  )}
                  {loading && (
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
      </main>
   );
}
