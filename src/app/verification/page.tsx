"use client";

import { Box, Button, Container, Image, Text, HStack, PinInput, PinInputField, useToast } from "@chakra-ui/react";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Verification() {
   const toast = useToast();
   const router = useRouter();
   const [loading, setLoading] = useState(false);
   const [verif, setVerif] = useState({
      code1: "",
      code2: "",
      code3: "",
      code4: "",
      code5: "",
      code6: "",
   });

   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      setLoading(true);
      const response = await axios.post(
         "https://api.rupiahku.pro/api/auth/verify",
         {
            verificationPin:
               verif.code1 +
               verif.code2 +
               verif.code3 +
               verif.code4 +
               verif.code5 +
               verif.code6,
            nohp: '+62' + localStorage.getItem("nohp"),
         }
      );
      const data = response.data;
      if (data.success == false) {
         toast({
            title: data.message,
            position: "bottom",
            status: "error",
            isClosable: true,
         });
         setLoading(false);
         return false;
      }

      toast({
         title: data.message,
         position: "bottom",
         status: "success",
         isClosable: true,
      });

      router.push("/login");
      setLoading(false);
   }

   return (
      <Container
         width={"sm"}
         minH={"100vh"}
         bgImage={"kuil.jpg"}
         alignItems={"center"}
         p={5}
         paddingTop={"120px"}
         backgroundSize={"cover"}
         backgroundPosition={"center"}
      >
         <Box
            background={"white"}
            h={"fit-content"}
            w={"full"}
            margin={"auto"}
            alignItems={"center"}
            borderRadius={"2xl"}
            paddingBottom={"50"}
            px={5}
         >
            <Box h={"20%"} alignItems={"center"} pt={2}>
               <Image
                  src="rupiahku_slogan.png"
                  alt="logo"
                  width={200}
                  m={"auto"}
                  my={5}
               />
            </Box>
            <form onSubmit={handleSubmit}>
               <HStack margin={"auto"} justifyContent={"center"}>
                  <PinInput placeholder="">
                     <PinInputField
                        border="1px"
                        borderColor="red.500"
                        borderRadius={"2xl"}
                        height={"50px"}
                        _hover={{
                           borderColor: "red.500",
                        }}
                        value={verif.code1}
                        onChange={(e) =>
                           setVerif({ ...verif, code1: e.target.value })
                        }
                     />
                     <PinInputField
                        border="1px"
                        borderColor="red.500"
                        borderRadius={"2xl"}
                        height={"50px"}
                        _hover={{
                           borderColor: "red.500",
                        }}
                        value={verif.code2}
                        onChange={(e) =>
                           setVerif({ ...verif, code2: e.target.value })
                        }
                     />
                     <PinInputField
                        border="1px"
                        borderColor="red.500"
                        borderRadius={"2xl"}
                        height={"50px"}
                        _hover={{
                           borderColor: "red.500",
                        }}
                        value={verif.code3}
                        onChange={(e) =>
                           setVerif({ ...verif, code3: e.target.value })
                        }
                     />
                     <PinInputField
                        border="1px"
                        borderColor="red.500"
                        borderRadius={"2xl"}
                        height={"50px"}
                        _hover={{
                           borderColor: "red.500",
                        }}
                        value={verif.code4}
                        onChange={(e) =>
                           setVerif({ ...verif, code4: e.target.value })
                        }
                     />
                     <PinInputField
                        border="1px"
                        borderColor="red.500"
                        borderRadius={"2xl"}
                        height={"50px"}
                        _hover={{
                           borderColor: "red.500",
                        }}
                        value={verif.code5}
                        onChange={(e) =>
                           setVerif({ ...verif, code5: e.target.value })
                        }
                     />
                     <PinInputField
                        border="1px"
                        borderColor="red.500"
                        borderRadius={"2xl"}
                        height={"50px"}
                        _hover={{
                           borderColor: "red.500",
                        }}
                        value={verif.code6}
                        onChange={(e) =>
                           setVerif({ ...verif, code6: e.target.value })
                        }
                     />
                  </PinInput>
               </HStack>
               <Button
                  isLoading={loading}
                  type="submit"
                  boxShadow="md"
                  size={"md"}
                  bg={"red.500"}
                  color={"white"}
                  borderRadius={"2xl"}
                  width={"100%"}
                  mt={8}
                  fontSize={"md"}
                  _hover={{
                     bg: "red.400",
                  }}
               >
                  Verifikasi
               </Button>
            </form>
            <Text fontSize="xs" textAlign={"center"} mt={2}>
               *Kami mengirimkan kode verifikasi ke nomor anda
            </Text>
         </Box>
      </Container>
   );
}
