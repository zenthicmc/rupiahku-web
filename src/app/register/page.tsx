import { Box, Button, Container, Image, Input, Stack, Text, Select } from "@chakra-ui/react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Link from "next/link";

export default function Register() {
   return (
      <Container
         width={"sm"}
         minH={"100vh"}
         bgImage={"kuil.jpg"}
         bgSize={"110%"}
         alignItems={"center"}
         p={10}
      >  <Link href="/login">
            <Box alignItems={"left"} paddingBottom={'30px'}>
               <HiOutlineArrowNarrowLeft size={35}/>
            </Box>
         </Link>
         <Box
            background={"white"}
            h={"77vh"}
            w={"50vh"}
            margin={"auto"}
            alignItems={"center"}
            borderRadius={"2xl"}
            paddingBottom={'50'}
         >
            <Box height={"20%"} alignItems={"center"} pt={2} paddingBottom={'10'}>
               <Image
                  src="rupiahku_logo.png"
                  alt="logo"
                  width={45}
                  m={"auto"}
                  pt={"3"}
               />
               <Text color={"red.500"} textAlign={"center"} margin={"auto"} pt={"5"}>
                  Isi Data diri untuk melanjutkan
               </Text>
            </Box>
            <Box h={"20%"} w={"full"} pt={"10"}>
               <Stack spacing={4} px={5} pt={"2"}>
                  <Input 
                  placeholder="Nama Lengkap"
                  size="sm"
                  borderRadius={"xl"}
                  border="1px"
                  borderColor="red.500"
                  _hover={{ 
                     'color': 'red.400'
                  }}
                  />
                  <Input 
                     placeholder="No. Handphone"
                     size="sm"
                     borderRadius={"xl"}
                     border="1px"
                     borderColor="red.500"
                     _hover={{ 
                        'color': 'red.400'
                     }}
                  />
                  <Input 
                     placeholder="Email"
                     size="sm"
                     borderRadius={"xl"}
                     border="1px"
                     borderColor="red.500"
                     _hover={{ 
                        'color': 'red.400'
                     }}
                  />
                  <Select 
                     placeholder="Jenis Kelamin"
                     size="sm"
                     borderRadius={"xl"}
                     border="1px"
                     borderColor="red.500"
                     color={"gray.500"}
                  >
                     <option value="option1">Laki-Laki</option>
                     <option value="option2">Perempuan</option>
                  </Select>
                  <Input
                     placeholder="Password"
                     type="password"
                     size="sm"
                     borderRadius={"xl"}
                     border="1px"
                     borderColor="red.500"
                     _hover={{
                        'color': 'red.400'
                     }}
                  />
                  <Input
                     placeholder="Konfirmasi Password"
                     type="password"
                     size="sm"
                     borderRadius={"xl"}
                     border="1px"
                     borderColor="red.500"
                     _hover={{
                        'color': 'red.400'
                     }}
                  />
                  <Link href="/login">
                     <Button
                        boxShadow='md'
                        size={"sm"}
                        width={"70%"}
                        type="submit"
                        bg={"red.500"}
                        color={"white"}
                        borderRadius={"2xl"}
                        margin={"auto"}
                        marginLeft={"37px"}
                        _hover={{
                           bg: "red.400"
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
