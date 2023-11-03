import { Box, Button, Container, Image, Input, Stack, Icon, HStack } from "@chakra-ui/react";

export default function Register() {
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
            h={"70vh"}
            w={"45vh"}
            margin={"auto"}
            alignItems={"center"}
            borderRadius={"2xl"}
            paddingBottom={'50'}
         >
            <Box height={"20%"} alignItems={"center"} pt={2} paddingBottom={'10'}>
               <Image
                  src="rupiahku_logo.png"
                  alt="logo"
                  width={50}
                  m={"auto"}
               />
               Isi Data diri untuk melanjutkan
            </Box>
            <Box h={"20%"} w={"full"} pt={10}>
               <Stack spacing={3} px={5}>
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
                  <Input 
                     placeholder="Jenis Kelamin"
                     type="radio"
                     size="sm"
                     borderRadius={"xl"}
                     border="1px"
                     borderColor="red.500"
                     _hover={{ 
                        'color': 'red.400'
                     }}
                  />
               </Stack>
            </Box>
         </Box>
      </Container>
   );
}
