import { Box, Button, Container, Image, Input, Stack, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";

export default function Login() {
   return (
      <Container
         width={"sm"}
         minH={"100vh"}
         bgImage={"kuil.jpg"}
         bgSize={"110%"}
         alignItems={"center"}
         p={10}
         paddingTop={'120px'}
      >
         <Box
            background={"white"}
            h={"55vh"}
            w={"45vh"}
            margin={"auto"}
            alignItems={"center"}
            borderRadius={"2xl"}
            paddingBottom={'50'}
            
         >
            <Box h={"20%"} alignItems={"center"} pt={2} paddingBottom={10}>
               <Image
                  src="rupiahku_slogan.png"
                  alt="logo"
                  width={200}
                  m={"auto"}
               />
            </Box>
            <Box h={"20%"} w={"full"} pt={10}>
               <Stack spacing={3} px={5}>
                  <Input
                     placeholder="No Handphone"
                     size="sm"
                     borderRadius={"xl"}
                     border="1px"
                     borderColor="red.500"
							_hover={{ 
								'color': 'red.400'
							}}
                  />
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
                  <Link href="/verification">
                     <Button
                        boxShadow='md'
                        size={"sm"}
                        type="submit"
                        bg={"red.500"}
                        color={"white"}
                        borderRadius={"2xl"}
                        marginLeft={"35px"}
                        width={"70%"}
                        mt={3}
                        _hover={{
                           bg: "red.400",
                        }}
                     >
                        Masuk
                     </Button>
                  </Link>
                  <HStack margin={"auto"} p={0} spacing={1}>
                     <GoDotFill color='#E53E3E' size={10} />
                     <GoDotFill color='#E53E3E' size={10} />
                     <GoDotFill color='#E53E3E' size={10} />
                     <GoDotFill color='#E53E3E' size={10} />
                  </HStack>
                  <Link href="/register">
                     <Button
                        boxShadow='md'
                        size={"sm"}
                        type="submit"
                        bg={"white"}
                        color={"red.500"}
                        borderRadius={"2xl"}
                        border={"1px"}
                        marginLeft={"35px"}
                        width={"70%"}
                        borderColor={"red.300"}
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
