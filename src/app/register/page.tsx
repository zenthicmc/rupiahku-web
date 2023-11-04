import { Box, Button, Container, Image, Input, Stack, Text, Select } from "@chakra-ui/react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Link from "next/link";

export default function Register() {
   return (
      <Container
         width={"sm"}
         minH={"100vh"}
         bgImage={"kuil.jpg"}
         alignItems={"center"}
         p={5}
         paddingTop={"70px"}
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
            <Box height={"20%"} alignItems={"center"} pt={2}>
               <Image
                  src="rupiahku_slogan.png"
                  alt="logo"
                  width={200}
                  m={"auto"}
                  mt={3}
               />
            </Box>
            <Box h={"fit-content"} w={"full"} pt={7}>
               <Stack spacing={4} px={5}>
                  <Input
                     placeholder="Nama Lengkap"
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
                     placeholder="No. Handphone"
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
                     placeholder="Email"
                     size="md"
                     borderRadius={"2xl"}
                     border="1px"
                     borderColor="red.500"
                     fontSize={"sm"}
                     _hover={{
                        color: "red.400",
                     }}
                  />
                  <Select
                     placeholder="Jenis Kelamin"
                     size="md"
                     borderRadius={"2xl"}
                     border="1px"
                     borderColor="red.500"
                     color={"gray.500"}
                     fontSize={"sm"}
                     _hover={{
                        color: "red.400",
                     }}
                  >
                     <option value="option1">Laki-Laki</option>
                     <option value="option2">Perempuan</option>
                  </Select>
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
                  <Input
                     placeholder="Konfirmasi Password"
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
                  <Link href="/login">
                     <Button
                        boxShadow="md"
                        size={"md"}
                        width={"100%"}
                        type="submit"
                        bg={"red.500"}
                        color={"white"}
                        borderRadius={"2xl"}
                        mt={3}
                        fontSize={"sm"}
                        _hover={{
                           bg: "red.400",
                        }}
                     >
                        Buat Akun Baru
                     </Button>
                  </Link>
                  <Text fontSize={"sm"} textAlign={"center"} color={"gray.700"}>
                     Sudah punya akun?{" "}
                     <Link href="/login">
                        <Text
                           as={"span"}
                           color={"red.500"}
                           _hover={{
                              color: "red.400",
                           }}
                        >
                           Masuk
                        </Text>
                     </Link>
                  </Text>
               </Stack>
            </Box>
         </Box>
      </Container>
   );
}
