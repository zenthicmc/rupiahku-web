import {
   Box,
   Text,
   Grid,
   VStack,
   useColorModeValue,
} from "@chakra-ui/react";
import {
   BsFillLightningFill,
   BsFillPhoneFill,
   BsGlobe,
} from "react-icons/bs";
import {
   BiSolidJoystick,
   BiSolidCoupon,
} from "react-icons/bi";
import { RiBillFill } from "react-icons/ri";
import { IoIosWallet } from "react-icons/io";
import { FiMoreHorizontal } from "react-icons/fi";
import Link from "next/link";

const OtherTransaction = () => {
   return (
      <Grid templateColumns="repeat(4, 1fr)" gap={5} mt={5} ps={2}>
         <Link href="/topup">
            <VStack w={"fit-content"}>
               <Box bg={"blue.300"} p={4} borderRadius={"full"}>
                  <BsFillLightningFill
                     color={useColorModeValue("white", "#1A202C")}
                     size={25}
                  />
               </Box>
               <Text fontSize={"xs"} fontWeight={"600"}>
                  PLN
               </Text>
            </VStack>
         </Link>
         <VStack w={"fit-content"}>
            <Box bg={"green.300"} p={4} borderRadius={"full"}>
               <BsFillPhoneFill
                  color={useColorModeValue("white", "#1A202C")}
                  size={25}
               />
            </Box>
            <Text fontSize={"xs"} fontWeight={"600"}>
               Pulsa
            </Text>
         </VStack>
         <VStack w={"fit-content"}>
            <Box bg={"red.300"} p={4} borderRadius={"full"}>
               <BsGlobe
                  color={useColorModeValue("white", "#1A202C")}
                  size={25}
               />
            </Box>
            <Text fontSize={"xs"} fontWeight={"600"}>
               Internet
            </Text>
         </VStack>
         <VStack w={"fit-content"}>
            <Box bg={"yellow.300"} p={4} borderRadius={"full"}>
               <BiSolidJoystick
                  color={useColorModeValue("white", "#1A202C")}
                  size={25}
               />
            </Box>
            <Text fontSize={"xs"} fontWeight={"600"}>
               Game
            </Text>
         </VStack>
         <VStack w={"fit-content"}>
            <Box bg={"orange.300"} p={4} borderRadius={"full"}>
               <BiSolidCoupon
                  color={useColorModeValue("white", "#1A202C")}
                  size={25}
               />
            </Box>
            <Text fontSize={"xs"} fontWeight={"600"}>
               Voucher
            </Text>
         </VStack>
         <VStack w={"fit-content"}>
            <Box bg={"cyan.300"} p={4} borderRadius={"full"}>
               <IoIosWallet
                  color={useColorModeValue("white", "#1A202C")}
                  size={25}
               />
            </Box>
            <Text fontSize={"xs"} fontWeight={"600"}>
               E-Money
            </Text>
         </VStack>
         <VStack w={"fit-content"}>
            <Box bg={"purple.300"} p={4} borderRadius={"full"}>
               <RiBillFill
                  color={useColorModeValue("white", "#1A202C")}
                  size={25}
               />
            </Box>
            <Text fontSize={"xs"} fontWeight={"600"}>
               Tagihan
            </Text>
         </VStack>
         <VStack w={"fit-content"}>
            <Box bg={"pink.300"} p={4} borderRadius={"full"}>
               <FiMoreHorizontal
                  color={useColorModeValue("white", "#1A202C")}
                  size={25}
               />
            </Box>
            <Text fontSize={"xs"} fontWeight={"600"}>
               Lainnya
            </Text>
         </VStack>
      </Grid>
   );
};

export default OtherTransaction;