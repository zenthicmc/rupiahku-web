import {
   Box,
   Container,
   Flex,
   Text,
   Button,
   Grid,
   VStack,
   Card,
} from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { FaHistory, FaUserAlt } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";


const BottomNav = () => {
	return (
      // create a bottom nav bar that is fixed to the bottom of the screen
      <Container
         w="sm"
         background={"white"}
         p={0}
         position="fixed"
         bottom={0}
         left={0}
         right={0}
      >
         <Grid templateColumns="repeat(4, 1fr)" gap={0} p={0}>
            <VStack spacing={0} p={2} color={"red.400"}>
               <AiFillHome size={20} />
               <Text fontSize={"sm"} fontWeight={"300"} mt={1}>
                  Home
               </Text>
            </VStack>
            <VStack spacing={0} p={2} color={"gray.500"}>
               <FaHistory size={20} />
               <Text fontSize={"sm"} fontWeight={"300"} mt={1}>
                  Riwayat
               </Text>
            </VStack>
            <VStack spacing={0} p={2} color={"gray.500"}>
               <BsFillBellFill size={20} />
               <Text fontSize={"sm"} fontWeight={"300"} mt={1}>
                  Notifikasi
               </Text>
            </VStack>
            <VStack spacing={0} p={2} color={"gray.500"}>
               <FaUserAlt size={20} />
               <Text fontSize={"sm"} fontWeight={"300"} mt={1}>
                  Profile
               </Text>
            </VStack>
         </Grid>
      </Container>
   );
}

export default BottomNav;