import { Box, Button, Container, Image, Input, Stack, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";

export default function Login() {
   return (
      <Container
         width={"sm"}
         minH={"100vh"}
         bgImage={"kuil.jpg"}
         alignItems={"center"}
         p={5}
         paddingTop={"120px"}
         backgroundSize={'cover'}
         backgroundPosition={'center'}
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
               <Stack spacing={3} px={5}>
                  <Input
                     placeholder="No Handphone"
                     size="md"
                     borderRadius={"2xl"}
                     border="1px"
                     borderColor="red.500"
                     fontSize={"sm"}
                     _hover={{
                        color: "red.400",
                     }}
                  />
                  <Input
                     placeholder="Password"
                     type="password"
                     size="md"
                     borderRadius={"2xl"}
                     border="1px"
                     borderColor="red.500"
                     fontSize={"sm"}
                     _hover={{
                        color: "red.400",
                     }}
                  />
                  <Link href="/verification">
                     <Button
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
                  </Link>
                  <HStack margin={"auto"} p={0} spacing={1}>
                     <GoDotFill color="#E53E3E" size={10} />
                     <GoDotFill color="#E53E3E" size={10} />
                     <GoDotFill color="#E53E3E" size={10} />
                     <GoDotFill color="#E53E3E" size={10} />
                  </HStack>
                  <Link href="/register">
                     <Button
                        boxShadow="md"
                        size={"md"}
                        type="submit"
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
            </Box>
         </Box>
      </Container>
   );
}
