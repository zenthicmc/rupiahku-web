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
import { MdOutlineQrCodeScanner } from "react-icons/md";
import Link from "next/link";


const BottomNav = () => {
	return (
      // create a bottom nav bar that is fixed to the bottom of the screen
      <Container
         w="sm"
         background={"white"}
         p={0}
         position="fixed"
			display={'relative'}
         bottom={0}
         left={0}
         right={0}
      >
         <Grid templateColumns="repeat(5, 1fr)" gap={0} p={0}>
            <Link href="/">
               <VStack
                  spacing={0}
                  p={2}
                  color={"red.400"}
                  cursor={"pointer"}
                  _hover={{ color: "red.400" }}
                  _after={{ color: "red.400" }}
                  _active={{ color: "red.400" }}
               >
                  <AiFillHome size={20} />
                  <Text fontSize={"sm"} fontWeight={"300"} mt={1}>
                     Home
                  </Text>
               </VStack>
            </Link>
            <Link href="/">
               <VStack
                  spacing={0}
                  p={2}
                  color={"gray.500"}
                  cursor={"pointer"}
                  _hover={{ color: "red.400" }}
                  _after={{ color: "red.400" }}
                  _active={{ color: "red.400" }}
               >
                  <FaHistory size={20} />
                  <Text fontSize={"sm"} fontWeight={"300"} mt={1}>
                     Riwayat
                  </Text>
               </VStack>
            </Link>

				{/* Floatting Circle Button In The Middle */}
				<Link href="/">
					<Flex
						alignItems="center"
						justifyContent="center"
						w="60px"
						h="60px"
						borderRadius="50%"
						background="red.400"
						position="absolute"
						bottom={0}
						left="50%"
						transform="translateX(-50%)"
						boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
						cursor="pointer"
						pos={"absolute"}
						top={"-5"}
						_hover={{ background: "red.500" }}
					>
						<MdOutlineQrCodeScanner size={30} color="white" />
					</Flex>
				</Link>

            <Link href="/">
               <VStack
                  spacing={0}
                  p={2}
                  color={"gray.500"}
                  cursor={"pointer"}
                  _hover={{ color: "red.400" }}
                  _after={{ color: "red.400" }}
                  _active={{ color: "red.400" }}
               >
                  <BsFillBellFill size={20} />
                  <Text fontSize={"sm"} fontWeight={"300"} mt={1}>
                     Notifikasi
                  </Text>
               </VStack>
            </Link>
            <Link href="/">
               <VStack
                  spacing={0}
                  p={2}
                  color={"gray.500"}
                  cursor={"pointer"}
                  _hover={{ color: "red.400" }}
                  _after={{ color: "red.400" }}
                  _active={{ color: "red.400" }}
               >
                  <FaUserAlt size={20} />
                  <Text fontSize={"sm"} fontWeight={"300"} mt={1}>
                     Profile
                  </Text>
               </VStack>
            </Link>
         </Grid>
      </Container>
   );
}

export default BottomNav;