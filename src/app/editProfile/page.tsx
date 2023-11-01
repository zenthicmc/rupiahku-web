import { Container, Text, Box, Image, Stack, Input, Button } from "@chakra-ui/react";
import BackButton from "@/components/BackButton";

export default function editProfile() {
	return (
      <Container
         width={"sm"}
         background={"white"}
         minHeight={"100vh"}
         p={0}
         position={"relative"}
      >
         <Box position={"relative"}>
            <BackButton color={"black"} />
            <Image
               src={"./hero.jpg"}
               alt="Hero"
               width={"full"}
               height={"180"}
            />

            <Image
               src={"./man.png"}
               alt="Profile"
               width={"130px"}
               height={"130px"}
               pos={"absolute"}
               top={9}
               left={0}
               right={0}
               margin={"auto"}
            />
         </Box>
         <Box my={6} mx={10}>
            <Box>
               <Stack spacing={1}>
                  <Text fontSize={"sm"} color={"gray.900"} fontWeight={"600"}>
                     Nama
                  </Text>
                  <Input type="text" placeholder="Nama" size="sm" borderRadius={"md"} />
                  <Text
                     fontSize={"sm"}
                     color={"gray.900"}
                     fontWeight={"600"}
                     mt={2}
                  >
                     Nomer Ponsel
                  </Text>
                  <Input
							type="number"
                     placeholder="Nomer Ponsel"
                     size="sm"
                     borderRadius={"md"}
                  />
                  <Text
                     fontSize={"sm"}
                     color={"gray.900"}
                     fontWeight={"600"}
                     mt={2}
                  >
                     Email
                  </Text>
                  <Input type="email" placeholder="Email" size="sm" borderRadius={"md"} />
               </Stack>
            </Box>
            <Box position={"absolute"} bottom={7} right={0} left={0} px={10}>
               <Button
                  w={"full"}
                  background={"red.500"}
                  size={"md"}
                  borderRadius={"md"}
                  fontSize={"sm"}
                  color={"gray.50"}
                  mt={5}
                  _hover={{
                     background: "red.400",
                  }}
               >
                  Simpan
               </Button>
            </Box>
         </Box>
      </Container>
   );
}
