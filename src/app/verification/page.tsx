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
         p={10}
         paddingTop={'175px'}
      >
         <Box
            background={"white"}
            h={"43vh"}
            w={"50vh"}
            margin={"auto"}
            alignItems={"center"}
            borderRadius={"2xl"}
            paddingBottom={'50'}
            
         >
            <Box h={"20%"} alignItems={"center"} pt={2} paddingBottom={'50'}>
               <Image
                  src="rupiahku_slogan.png"
                  alt="logo"
                  width={200}
                  m={"auto"}
               />
            </Box>
            <HStack margin={"auto"} p={5} paddingTop={"50px"} >
               <PinInput placeholder=''>
                  <PinInputField border="1px" borderColor="red.500" borderRadius={"2xl"} height={"53px"} />
                  <PinInputField border="1px" borderColor="red.500" borderRadius={"2xl"} height={"53px"} />
                  <PinInputField border="1px" borderColor="red.500" borderRadius={"2xl"} height={"53px"} />
                  <PinInputField border="1px" borderColor="red.500" borderRadius={"2xl"} height={"53px"} />
                  <PinInputField border="1px" borderColor="red.500" borderRadius={"2xl"} height={"53px"} />
                  <PinInputField border="1px" borderColor="red.500" borderRadius={"2xl"} height={"53px"} />
               </PinInput>
            </HStack>
            <Link href="/">
               <Button
                  boxShadow='md'
                  size={"md"}
                  type="submit"
                  bg={"red.500"}
                  color={"white"}
                  borderRadius={"2xl"}
                  marginLeft={"23px"}
                  width={"85%"}
                  mt={3}
                  _hover={{
                     bg: "red.400",
                  }}
               >
                  Verifikasi
               </Button>
            </Link>
            <Text fontSize='3xs' paddingLeft={6} pt={5}>
               *Kami mengirimkan kode verifikasi ke nomor anda
            </Text>
         </Box>
      </Container>
   );
}
