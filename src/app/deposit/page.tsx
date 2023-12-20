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
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import BackButton from "@/components/BackButton";
import { useState } from "react";
import Link from "next/link";

export default function Deposit() {
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
                  <Text fontSize={"md"} fontWeight={"600"}>
                     Pilih Nominal:
                  </Text>
                  <Grid templateColumns="repeat(2, 1fr)" gap={5} mt={3}>
                     <Button
                        variant={"outline"}
                        color={useColorModeValue("gray.900", "gray.100")}
                        borderRadius={"xl"}
                        fontSize={"sm"}
                        borderColor={useColorModeValue("gray.300", "gray.500")}
                        py={8}
                        bg={useColorModeValue("none", "gray.700")}
                        _hover={{
                           borderColor: "red.300",
                           color: "red.400",
                        }}
                        onClick={() => setAmount(10000)}
                        {...(amount === 10000 && {
                           borderColor: "red.400",
                           color: "red.400",
                        })}
                     >
                        Rp 10.000
                     </Button>
                     <Button
                        variant={"outline"}
                        color={useColorModeValue("gray.900", "gray.100")}
                        borderRadius={"xl"}
                        fontSize={"sm"}
                        borderColor={useColorModeValue("gray.300", "gray.500")}
                        py={8}
                        bg={useColorModeValue("none", "gray.700")}
                        _hover={{
                           borderColor: "red.300",
                           color: "red.400",
                        }}
                        onClick={() => setAmount(20000)}
                        {...(amount === 20000 && {
                           borderColor: "red.400",
                           color: "red.400",
                        })}
                     >
                        Rp 20.000
                     </Button>
                     <Button
                        variant={"outline"}
                        color={useColorModeValue("gray.900", "gray.100")}
                        borderRadius={"xl"}
                        fontSize={"sm"}
                        borderColor={useColorModeValue("gray.300", "gray.500")}
                        py={8}
                        bg={useColorModeValue("none", "gray.700")}
                        _hover={{
                           borderColor: "red.300",
                           color: "red.400",
                        }}
                        onClick={() => setAmount(50000)}
                        {...(amount === 50000 && {
                           borderColor: "red.400",
                           color: "red.400",
                        })}
                     >
                        Rp 50.000
                     </Button>
                     <Button
                        variant={"outline"}
                        color={useColorModeValue("gray.900", "gray.100")}
                        borderRadius={"xl"}
                        fontSize={"sm"}
                        borderColor={useColorModeValue("gray.300", "gray.500")}
                        py={8}
                        bg={useColorModeValue("none", "gray.700")}
                        _hover={{
                           borderColor: "red.300",
                           color: "red.400",
                        }}
                        onClick={() => setAmount(100000)}
                        {...(amount === 100000 && {
                           borderColor: "red.400",
                           color: "red.400",
                        })}
                     >
                        Rp 100.000
                     </Button>
                     <Button
                        variant={"outline"}
                        color={useColorModeValue("gray.900", "gray.100")}
                        borderRadius={"xl"}
                        fontSize={"sm"}
                        borderColor={useColorModeValue("gray.300", "gray.500")}
                        py={8}
                        bg={useColorModeValue("none", "gray.700")}
                        _hover={{
                           borderColor: "red.300",
                           color: "red.400",
                        }}
                        onClick={() => setAmount(500000)}
                        {...(amount === 500000 && {
                           borderColor: "red.400",
                           color: "red.400",
                        })}
                     >
                        Rp 500.000
                     </Button>
                     <Button
                        variant={"outline"}
                        color={useColorModeValue("gray.900", "gray.100")}
                        borderRadius={"xl"}
                        fontSize={"sm"}
                        borderColor={useColorModeValue("gray.300", "gray.500")}
                        py={8}
                        bg={useColorModeValue("none", "gray.700")}
                        _hover={{
                           borderColor: "red.300",
                           color: "red.400",
                        }}
                        onClick={() => setAmount(1000000)}
                        {...(amount === 1000000 && {
                           borderColor: "red.400",
                           color: "red.400",
                        })}
                     >
                        Rp 1.000.000
                     </Button>
                  </Grid>

                  <Text fontSize={"sm"} fontWeight={"600"} mt={5}>
                     Nominal lainnya:
                  </Text>
                  <Input
                     type="number"
                     max={1000000}
                     fontSize={"sm"}
                     placeholder="Masukkan nominal lainnya"
                     borderColor={useColorModeValue("gray.300", "gray.500")}
                     bg={useColorModeValue("none", "gray.700")}
                     color={useColorModeValue("gray.900", "gray.100")}
                     _hover={{
                        borderColor: "red.300",
                     }}
                     mt={1}
                     mb={2}
                     onChange={(e) =>
                        amount > 1000000
                           ? setAmount(1000000)
                           : setAmount(parseInt(e.target.value))
                     }
                     value={amount}
                  />
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
               {amount >= 10000 && amount <= 1000000 ? (
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
