import {
   Box,
   Flex,
   Text,
   Image,
   useColorModeValue,
} from "@chakra-ui/react";

const Balance = () => {
   return (
      <Box
         pos={"absolute"}
         w={"90%"}
         h={"6rem"}
         bg={useColorModeValue("white", "gray.700")}
         margin={"auto"}
         left={"0"}
         right={"0"}
         bottom={"-12"}
         borderRadius={"3xl"}
         shadow={"xl"}
      >
         <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            h={"100%"}
            px={7}
         >
            <Box>
               <Text fontSize={"sm"}>Saldo Rekening:</Text>
               <Flex alignItems={"center"}>
                  <Text fontSize={"2xl"}>Rp</Text>
                  <Text fontSize={"2xl"} fontWeight={"bold"} ms={1}>
                     50.000.000
                  </Text>
               </Flex>
            </Box>
            <Box>
               <Image src="/rupiahku_logo.png" alt="Rupiahku" w={35} />
            </Box>
         </Flex>
      </Box>
   );
};

export default Balance;
