import {
   Box,
   Flex,
   Text,
   Image,
   useColorModeValue,
   Skeleton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Balance = (props: any) => {

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
                  {props.saldo.toLocaleString("id-ID") ? (
                     <Text fontSize={"2xl"} fontWeight={"bold"} ms={1}>
                        {props.saldo.toLocaleString("id-ID")}
                     </Text>
                  ) : (
                     <Skeleton h={7} ms={2} w={'180px'} />
                  )}
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
