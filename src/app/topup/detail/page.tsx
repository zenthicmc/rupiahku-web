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
   useToast,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import BackButton from "@/components/BackButton";
import Link from "next/link";
import { BsFillLightningFill } from "react-icons/bs";
import { ApiGet, ApiPost } from "@/utils/api";
import { capitalize } from "@/utils/capitalize";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useSearchParams, useRouter } from "next/navigation";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa6";
import { BiSolidCoupon } from "react-icons/bi";

export default function Topup() {
   const searchParams = useSearchParams();
   const type = searchParams.get("type");
   const product_code = searchParams.get("product_code");
   const router = useRouter();
   const toast = useToast();

   const [cookies, setCookie] = useCookies(["token"]);
   const [loading, setLoading] = useState(true);
   const [receiver, setReceiver] = useState("");
   const [data, setData] = useState([]);
   const [selected, setSelected] = useState({
      product_code: "",
      product_nominal: "",
      product_type: "",
      icon_url: "",
   });

   const json = [
      {
         type: "data",
         label: "Nomor Telepon",
         icon: <FaPhoneAlt color="#A0AEC0" />,
      },
      {
         type: "pln",
         label: "Nomor Meteran",
         icon: <BsFillLightningFill color="#A0AEC0" />,
      },
      {
         type: "pulsa",
         label: "Nomor Telepon",
         icon: <FaPhoneAlt color="#A0AEC0" />,
      },
      {
         type: "game",
         label: "ID Game",
         icon: <FaGamepad color="#A0AEC0" />,
      },
      {
         type: "voucher",
         label: "Nomor Pelanggan",
         icon: <BiSolidCoupon color="#A0AEC0" />,
      },
      {
         type: "etoll",
         label: "Nomor Telepon",
         icon: <FaPhoneAlt color="#A0AEC0" />,
      },
   ];

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

   // function untuk mengirim data ke api
   async function handleSubmit() {
      setLoading(true);
      if (!receiver && !selected.product_code && !selected.product_type) {
         toast({
            title: "Data is not complete",
            position: "bottom",
            status: "error",
            isClosable: true,
         });
         setLoading(false);
         return false;
      }

      // mengirim data ke api
      const response = await ApiPost("/api/transaction/topup", cookies.token, {
         receiver: receiver,
         type: selected.product_type,
         product_code: selected.product_code,
      });

      // cek jika success == true
      if (response.success) {
         if(response.data.status == "Pending") router.push(`/pending?amount=${response.data.amount}&title=Topup Dalam Proses`);
         if(response.data.status == "Success") router.push(`/success?amount=${response.data.amount}&title=Topup Berhasil`);
      } else {
         toast({
            title: "Topup Failed",
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
                  {!loading && (
                     <>
                        {json.map(
                           (item, key) =>
                              item.type === type && (
                                 <>
                                    <Text fontSize={"sm"} fontWeight={"600"}>
                                       {item.label}:
                                    </Text>

                                    <InputGroup mt={1}>
                                       <InputLeftElement pointerEvents="none">
                                          {item.icon}
                                       </InputLeftElement>
                                       <Input
                                          type="number"
                                          placeholder={item.label}
                                          fontSize={"sm"}
                                          onChange={(e) =>
                                             setReceiver(e.target.value)
                                          }
                                       />
                                    </InputGroup>
                                 </>
                              )
                        )}

                        <Text fontSize={"sm"} fontWeight={"600"} mt={3}>
                           Pilih Nominal:
                        </Text>
                        <Grid templateColumns="repeat(2, 1fr)" gap={5} mt={2}>
                           {data &&
                              data.map(
                                 (item, key) =>
                                    item.product_nominal
                                       .toLowerCase()
                                       .indexOf("khusus") === -1 &&
                                    key < 8 && (
                                       <Button
                                          key={key}
                                          variant={"outline"}
                                          py={10}
                                          bg={useColorModeValue(
                                             "none",
                                             "gray.700"
                                          )}
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
                              )}
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
                     fontSize={"md"}
                     fontWeight={"700"}
                     textAlign={"right"}
                     color={useColorModeValue("red.500", "red.400")}
                  >
                     {selected.product_nominal}
                  </Text>
               </Flex>
               {selected.product_code !== "" && receiver ? (
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
