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
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import BackButton from "@/components/BackButton";
import { useState } from "react";
import Link from "next/link";
import { BsFillLightningFill } from "react-icons/bs";

export default function Topup() {
   const [amount, setAmount] = useState(0);

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
                     <Button
                        variant={"outline"}
                        color={useColorModeValue("gray.900", "gray.100")}
                        borderRadius={"xl"}
                        fontSize={"sm"}
                        borderColor={useColorModeValue("gray.300", "gray.500")}
                        py={9}
                        bg={useColorModeValue("none", "gray.700")}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        _hover={{
                           borderColor: "red.300",
                           color: "red.400",
                        }}
                        onClick={() => setAmount(22500)}
                        {...(amount === 22500 && {
                           borderColor: "red.400",
                           color: "red.400",
                        })}
                     >
                        Rp 20.000
                        <Text
                           fontSize={"xs"}
                           fontWeight={"300"}
                           color={
                              amount === 22500
                                 ? "red.400"
                                 : useColorModeValue("gray.400", "gray.500")
                           }
                           mt={1}
                        >
                           Bayar Rp 22.500
                        </Text>
                     </Button>
                     <Button
                        variant={"outline"}
                        color={useColorModeValue("gray.900", "gray.100")}
                        borderRadius={"xl"}
                        fontSize={"sm"}
                        borderColor={useColorModeValue("gray.300", "gray.500")}
                        py={9}
                        bg={useColorModeValue("none", "gray.700")}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        _hover={{
                           borderColor: "red.300",
                           color: "red.400",
                        }}
                        onClick={() => setAmount(52500)}
                        {...(amount === 52500 && {
                           borderColor: "red.400",
                           color: "red.400",
                        })}
                     >
                        Rp 50.000
                        <Text
                           fontSize={"xs"}
                           fontWeight={"300"}
                           color={
                              amount === 52500
                                 ? "red.400"
                                 : useColorModeValue("gray.400", "gray.500")
                           }
                           mt={1}
                        >
                           Bayar Rp 52.500
                        </Text>
                     </Button>
                     <Button
                        variant={"outline"}
                        color={useColorModeValue("gray.900", "gray.100")}
                        borderRadius={"xl"}
                        fontSize={"sm"}
                        borderColor={useColorModeValue("gray.300", "gray.500")}
                        py={9}
                        bg={useColorModeValue("none", "gray.700")}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        _hover={{
                           borderColor: "red.300",
                           color: "red.400",
                        }}
                        onClick={() => setAmount(102500)}
                        {...(amount === 102500 && {
                           borderColor: "red.400",
                           color: "red.400",
                        })}
                     >
                        Rp 100.000
                        <Text
                           fontSize={"xs"}
                           fontWeight={"300"}
                           color={
                              amount === 102500
                                 ? "red.400"
                                 : useColorModeValue("gray.400", "gray.500")
                           }
                           mt={1}
                        >
                           Bayar Rp 102.500
                        </Text>
                     </Button>
                     <Button
                        variant={"outline"}
                        color={useColorModeValue("gray.900", "gray.100")}
                        borderRadius={"xl"}
                        fontSize={"sm"}
                        borderColor={useColorModeValue("gray.300", "gray.500")}
                        py={9}
                        bg={useColorModeValue("none", "gray.700")}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        _hover={{
                           borderColor: "red.300",
                           color: "red.400",
                        }}
                        onClick={() => setAmount(152500)}
                        {...(amount === 152500 && {
                           borderColor: "red.400",
                           color: "red.400",
                        })}
                     >
                        Rp 150.000
                        <Text
                           fontSize={"xs"}
                           fontWeight={"300"}
                           color={
                              amount === 152500
                                 ? "red.400"
                                 : useColorModeValue("gray.400", "gray.500")
                           }
                           mt={1}
                        >
                           Bayar Rp 152.500
                        </Text>
                     </Button>
                     <Button
                        variant={"outline"}
                        color={useColorModeValue("gray.900", "gray.100")}
                        borderRadius={"xl"}
                        fontSize={"sm"}
                        borderColor={useColorModeValue("gray.300", "gray.500")}
                        py={9}
                        bg={useColorModeValue("none", "gray.700")}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        _hover={{
                           borderColor: "red.300",
                           color: "red.400",
                        }}
                        onClick={() => setAmount(202500)}
                        {...(amount === 202500 && {
                           borderColor: "red.400",
                           color: "red.400",
                        })}
                     >
                        Rp 200.000
                        <Text
                           fontSize={"xs"}
                           fontWeight={"300"}
                           color={
                              amount === 202500
                                 ? "red.400"
                                 : useColorModeValue("gray.400", "gray.500")
                           }
                           mt={1}
                        >
                           Bayar Rp 202.500
                        </Text>
                     </Button>
                     <Button
                        variant={"outline"}
                        color={useColorModeValue("gray.900", "gray.100")}
                        borderRadius={"xl"}
                        fontSize={"sm"}
                        borderColor={useColorModeValue("gray.300", "gray.500")}
                        py={9}
                        bg={useColorModeValue("none", "gray.700")}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        _hover={{
                           borderColor: "red.300",
                           color: "red.400",
                        }}
                        onClick={() => setAmount(252500)}
                        {...(amount === 252500 && {
                           borderColor: "red.400",
                           color: "red.400",
                        })}
                     >
                        Rp 250.000
                        <Text
                           fontSize={"xs"}
                           fontWeight={"300"}
                           color={
                              amount === 252500
                                 ? "red.400"
                                 : useColorModeValue("gray.400", "gray.500")
                           }
                           mt={1}
                        >
                           Bayar Rp 252.500
                        </Text>
                     </Button>
                  </Grid>
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
               {amount >= 10000 ? (
                  <Link
                     href={{
                        pathname: "/payments",
                        query: { amount: amount },
                     }}
                  >
                     <Button
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
