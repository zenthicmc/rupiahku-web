'use client'

import {
   Box,
   Button,
   Container,
   Image,
   Input,
   Stack,
   HStack,
   useToast,
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
   const [loading, setLoading] = useState(false)
   const toast = useToast();
   const router = useRouter();

   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      setLoading(true);
      const response = await axios.post("https://api.rupiahku.pro/api/auth/login", {
         nohp: noHp,
         password: Password,
      });
      const data = response.data;
      if(data.success == false) {
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
                  mt={3}
               />
            </Box>
            <Box h={"20%"} w={"full"} pt={8}>
               <form onSubmit={handleSubmit}>
                  <Stack spacing={3} px={5}>
                     <Input
                        name="nohp"
                        placeholder="No Handphone"
                        size="md"
                        borderRadius={"2xl"}
                        border="1px"
                        borderColor="red.500"
                        fontSize={"sm"}
                        value={noHp}
                        onChange={(e) => setNoHp(e.target.value)}
                        required
                        _hover={{
                           color: "red.400",
                        }}
                     />
                     <Input
                        name="password"
                        placeholder="Password"
                        type="password"
                        size="md"
                        borderRadius={"2xl"}
                        border="1px"
                        borderColor="red.500"
                        fontSize={"sm"}
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        _hover={{
                           color: "red.400",
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
                        fontSize={"sm"}
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
                           fontSize={"sm"}
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
