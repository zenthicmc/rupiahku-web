import { Box, Button, Container, Image, Text, HStack, PinInput, PinInputField } from "@chakra-ui/react";
import Link from "next/link";

export default function Verification() {
   return (
      <Container
         width={"sm"}
         minH={"100vh"}
         bgImage={"kuil.jpg"}
         bgSize={"110%"}
         alignItems={"center"}
         p={5}
         paddingTop={"120px"}
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
                  mt={3}
               />
            </Box>
            <HStack margin={"auto"} mt={5} justifyContent={"center"}>
               <PinInput placeholder="">
                  <PinInputField
                     border="1px"
                     borderColor="red.500"
                     borderRadius={"2xl"}
                     height={"50px"}
                  />
                  <PinInputField
                     border="1px"
                     borderColor="red.500"
                     borderRadius={"2xl"}
                     height={"50px"}
                  />
                  <PinInputField
                     border="1px"
                     borderColor="red.500"
                     borderRadius={"2xl"}
                     height={"50px"}
                  />
                  <PinInputField
                     border="1px"
                     borderColor="red.500"
                     borderRadius={"2xl"}
                     height={"50px"}
                  />
                  <PinInputField
                     border="1px"
                     borderColor="red.500"
                     borderRadius={"2xl"}
                     height={"50px"}
                  />
                  <PinInputField
                     border="1px"
                     borderColor="red.500"
                     borderRadius={"2xl"}
                     height={"50px"}
                  />
               </PinInput>
            </HStack>
            <Link href="/">
               <Button
                  boxShadow="md"
                  size={"md"}
                  type="submit"
                  bg={"red.500"}
                  color={"white"}
                  borderRadius={"2xl"}
                  width={"100%"}
                  mt={8}
                  fontSize={"sm"}
                  _hover={{
                     bg: "red.400",
                  }}
               >
                  Verifikasi
               </Button>
            </Link>
            <Text fontSize="2xs" textAlign={"center"} mt={2}>
               *Kami mengirimkan kode verifikasi ke nomor anda
            </Text>
         </Box>
      </Container>
   );
}
