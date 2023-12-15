"use client";

import {
   Box,
   Button,
   Container,
   Image,
   Input,
   Stack,
   HStack,
   useToast,
   InputGroup,
   InputLeftAddon,
   useColorModeValue,
   useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

export default function Login() {
   const [noHp, setNoHp] = useState("");
   const [Password, setPassword] = useState("");
   const [cookies, setCookie] = useCookies(["token"]);
   const [loading, setLoading] = useState(false);
   const toast = useToast();
   const router = useRouter();

   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      setLoading(true);
      const response = await axios.post(
         "https://backup-api.rupiahku.pro/api/auth/login",
         {
            nohp: "+62" + noHp,
            password: Password,
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

      setCookie("token", data.data.token);
      toast({
         title: data.message,
         position: "bottom",
         status: "success",
         isClosable: true,
      });

      router.push("/");
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
            <Box h={"20%"} w={"full"}>
               <form onSubmit={handleSubmit}>
                  <Stack spacing={3} px={5}>
                     <InputGroup>
                        <InputLeftAddon
                           children="+62"
                           borderLeftRadius={"2xl"}
                           borderColor="red.500"
                           borderEnd={"none"}
                           bg={"white"}
                           pe={1}
                           ps={3}
                           fontSize={"md"}
                           color={"gray.800"}
                        />
                        <Input
                           type="number"
                           name="nohp"
                           size="md"
                           ps={1}
                           borderStart={"none"}
                           borderRadius={"2xl"}
                           borderColor="red.500"
                           fontSize={"md"}
                           value={noHp}
                           onChange={(e) => setNoHp(e.target.value)}
                           color={"gray.800"}
                           _placeholder={{ color: "gray.800" }}
                           required
                           _hover={{
                              borderColor: "red.500",
                           }}
                        />
                     </InputGroup>

                     <Input
                        name="password"
                        placeholder="Password"
                        type="password"
                        size="md"
                        borderRadius={"2xl"}
                        border="1px"
                        borderColor="red.500"
                        fontSize={"md"}
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                        color={"gray.800"}
                        _placeholder={{ color: "gray.800" }}
                        required
                        _hover={{
                           borderColor: "red.500",
                        }}
                     />
                     <Button
                        isLoading={loading}
                        boxShadow="md"
                        size={"md"}
                        type="submit"
                        bg={"red.500"}
                        color={"white"}
                        borderRadius={"2xl"}
                        width={"100%"}
                        mt={3}
                        fontSize={"md"}
                        _hover={{
                           bg: "red.400",
                        }}
                     >
                        Masuk
                     </Button>
                     <HStack margin={"auto"} p={0} spacing={1}>
                        <GoDotFill color="#E53E3E" size={10} />
                        <GoDotFill color="#E53E3E" size={10} />
                        <GoDotFill color="#E53E3E" size={10} />
                        <GoDotFill color="#E53E3E" size={10} />
                     </HStack>
                     <Link href="/register">
                        <Button
                           type="submit"
                           boxShadow="md"
                           size={"md"}
                           bg={"white"}
                           color={"red.500"}
                           borderRadius={"2xl"}
                           border={"1px"}
                           width={"100%"}
                           borderColor={"red.300"}
                           fontSize={"md"}
                           _hover={{
                              bg: "gray.50",
                           }}
                        >
                           Buat Akun Baru
                        </Button>
                     </Link>
                  </Stack>
               </form>
            </Box>
         </Box>
      </Container>
   );
}
