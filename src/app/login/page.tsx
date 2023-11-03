import { Box, Button, Container, Image, Input, Stack, Icon, HStack } from "@chakra-ui/react";
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
            <Box h={"20%"} alignItems={"center"} pt={2} paddingBottom={'10'}>
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
                  <Button
                     size={"sm"}
                     type="submit"
                     bg={"red.500"}
                     color={"white"}
                     borderRadius={"xl"}
							mt={3}
                     _hover={{
                        bg: "red.400",
                     }}
                  >
                     Masuk
                  </Button>
                  <HStack margin={"auto"} p={0}>
                     <GoDotFill color='#E53E3E' size={15} />
                     <GoDotFill color='#E53E3E' size={15} />
                     <GoDotFill color='#E53E3E' size={15} />
                     <GoDotFill color='#E53E3E' size={15} />
                  </HStack>
                  <Link href="/register">
                     <Button
                        size={"sm"}
                        type="submit"
                        bg={"white"}
                        color={"red.500"}
                        borderRadius={"xl"}
                        border={"1px"}
                        width={"100%"}
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
