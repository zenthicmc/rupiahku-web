import { Box, Button, Container, Image, Input, Stack } from "@chakra-ui/react";

export default function Login() {
   return (
      <Container
         width={"sm"}
         minH={"100vh"}
         bg={"pink"}
         alignItems={"center"}
         p={10}
      >
         <Box
            background={"white"}
            h={"50vh"}
            alignItems={"center"}
            borderRadius={"2xl"}
         >
            <Box h={"20%"} alignItems={"center"} pt={8}>
               <Image
                  src="rupiahku_logo.png"
                  alt="logo"
                  width={70}
                  height={70}
                  m={"auto"}
               />
            </Box>
            <Box h={"30%"} w={"full"} mt={10}>
               <Stack spacing={3} px={5}>
                  <Input
                     placeholder="No Handphone"
                     size="sm"
                     borderRadius={"xl"}
                     border="1px"
                     borderColor="red.300"
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
                     borderColor="red.300"
							_hover={{ 
								'color': 'red.400'
							}}
                  />
                  <Button
                     size={"sm"}
                     type="submit"
                     bg={"red.400"}
                     color={"white"}
                     borderRadius={"xl"}
							mt={3}
                     _hover={{
                        bg: "red.300",
                     }}
                  >
                     Masuk
                  </Button>
                  <Button
                     size={"sm"}
                     type="submit"
                     bg={"white"}
                     color={"red.400"}
                     borderRadius={"xl"}
                     border={"1px"}
                     borderColor={"red.300"}
                     _hover={{
                        bg: "gray.100",
                     }}
                  >
                     Buat Akun Baru
                  </Button>
               </Stack>
            </Box>
         </Box>
      </Container>
   );
}
