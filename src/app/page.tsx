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
import { Image } from '@chakra-ui/react'
import { FaPlus } from "react-icons/fa";
import {
   BiSolidJoystick,
   BiSolidCoupon,
   BiMoneyWithdraw,
} from "react-icons/bi";
import { FiMoreHorizontal  } from "react-icons/fi";
import {
   BsFillLightningFill,
   BsFillPhoneFill,
   BsGlobe,
   BsArrowLeftRight,
} from "react-icons/bs";
import { IoIosWallet } from "react-icons/io";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
     <main>
        <Container w="sm" background={"#FAFAFA"} p={0} h={"100%"}>
           <Box as="section" pos={"relative"}>
              <Image
                 src="/hero.jpg"
                 alt="Segun Adebayo"
                 background={"teal"}
                 w={"full"}
                 h={"180"}
              />

              {/* Profile Name */}
              <Flex
                 justifyContent={"start"}
                 alignItems={"center"}
                 w={"90%"}
                 pos={"absolute"}
                 top={"5"}
                 left={"0"}
                 right={"0"}
                 margin={"auto"}
              >
                 <Image
                    src="/man.png"
                    alt="Segun Adebayo"
                    w={14}
                    h={14}
                    borderRadius={"full"}
                 />

                 <Text
                    fontSize={"lg"}
                    fontWeight={"bolder"}
                    color={"gray.900"}
                    ms={1}
                    textShadow={"0px 0px 5px rgba(0, 0, 0, 0.1)"}
                 >
                    Jagad Raya R
                 </Text>
              </Flex>

              {/* Balance */}
              <Box
                 pos={"absolute"}
                 w={"90%"}
                 h={"6.5rem"}
                 bg={"white"}
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
                       <Text fontSize={"md"}>Saldo Rekening:</Text>
                       <Flex alignItems={"center"}>
                          <Text fontSize={"2xl"}>Rp</Text>
                          <Text fontSize={"2xl"} fontWeight={"bold"} ms={1}>
                             50.000.000
                          </Text>
                       </Flex>
                    </Box>
                    <Box>
                       <Image src="/rupiahku_logo.png" alt="Rupiahku" w={55} />
                    </Box>
                 </Flex>
              </Box>
           </Box>

           <Container w={"90%"} margin={"auto"} p={0} py={1}>
              {/* Button Group */}
              <Flex
                 justifyContent={"space-between"}
                 alignItems={"center"}
                 mt={14}
              >
                 <Button
                    leftIcon={<FaPlus />}
                    bg={"gray.900"}
                    color={"white"}
                    variant="elevated"
                    borderRadius={"full"}
                    px={10}
                 >
                    Deposit
                 </Button>

                 <Button
                    leftIcon={<BsArrowLeftRight />}
                    bg={"white"}
                    color={"gray.900"}
                    variant="elevated"
                    shadow={"md"}
                    borderRadius={"full"}
                    px={10}
                 >
                    Transfer
                 </Button>
              </Flex>

              {/* Other Transactions */}
              <Grid templateColumns="repeat(4, 1fr)" gap={5} mt={5} ps={2}>
                 <VStack w={"fit-content"}>
                    <Box bg={"blue.300"} p={4} borderRadius={"full"}>
                       <BsFillLightningFill color={"white"} size={25} />
                    </Box>
                    <Text fontSize={"xs"} fontWeight={"600"}>
                       PLN
                    </Text>
                 </VStack>
                 <VStack w={"fit-content"}>
                    <Box bg={"green.300"} p={4} borderRadius={"full"}>
                       <BsFillPhoneFill color={"white"} size={25} />
                    </Box>
                    <Text fontSize={"xs"} fontWeight={"600"}>
                       Pulsa
                    </Text>
                 </VStack>
                 <VStack w={"fit-content"}>
                    <Box bg={"red.300"} p={4} borderRadius={"full"}>
                       <BsGlobe color={"white"} size={25} />
                    </Box>
                    <Text fontSize={"xs"} fontWeight={"600"}>
                       Internet
                    </Text>
                 </VStack>
                 <VStack w={"fit-content"}>
                    <Box bg={"yellow.300"} p={4} borderRadius={"full"}>
                       <BiSolidJoystick color={"white"} size={25} />
                    </Box>
                    <Text fontSize={"xs"} fontWeight={"600"}>
                       Game
                    </Text>
                 </VStack>
                 <VStack w={"fit-content"}>
                    <Box bg={"orange.300"} p={4} borderRadius={"full"}>
                       <BiSolidCoupon color={"white"} size={25} />
                    </Box>
                    <Text fontSize={"xs"} fontWeight={"600"}>
                       Voucher
                    </Text>
                 </VStack>
                 <VStack w={"fit-content"}>
                    <Box bg={"cyan.300"} p={4} borderRadius={"full"}>
                       <IoIosWallet color={"white"} size={25} />
                    </Box>
                    <Text fontSize={"xs"} fontWeight={"600"}>
                       E-Money
                    </Text>
                 </VStack>
                 <VStack w={"fit-content"}>
                    <Box bg={"purple.300"} p={4} borderRadius={"full"}>
                       <BiMoneyWithdraw color={"white"} size={25} />
                    </Box>
                    <Text fontSize={"xs"} fontWeight={"600"}>
                       Tarik Tunai
                    </Text>
                 </VStack>
                 <VStack w={"fit-content"}>
                    <Box bg={"pink.300"} p={4} borderRadius={"full"}>
                       <FiMoreHorizontal color={"white"} size={25} />
                    </Box>
                    <Text fontSize={"xs"} fontWeight={"600"}>
                       Lainnya
                    </Text>
                 </VStack>
              </Grid>

              {/* Latest Transactions */}
              <Flex
                 justifyContent={"space-between"}
                 alignItems={"center"}
                 mt={5}
              >
                 <Text fontSize={"md"} fontWeight={"bold"} color={"gray.900"}>
                    Transaksi Terbaru
                 </Text>

                 <Text fontSize={"xs"} color={"blue.400"}>
                    Selengkapnya
                 </Text>
              </Flex>

              {/* Transaction List */}
              <Flex
                 justifyContent={"space-between"}
                 alignItems={"center"}
                 mt={2}
                 flexDirection={"column"}
              >
                 <Card w={"100%"} p={4} borderRadius={"xl"} shadow={"md"}>
                    <Flex
                       justifyContent={"space-between"}
                       alignItems={"center"}
                    >
                       <Flex alignItems={"center"}>
                          <Image
                             src="https://imgur.com/SSAxsPR.png"
                             alt="Rupiahku"
                             w={10}
                             h={10}
                             borderRadius={"full"}
                          />
                          <Box ms={3}>
                             <Text fontSize={"sm"} fontWeight={"bold"}>
                                Transfer
                             </Text>
                             <Text fontSize={"xs"} color={"gray.500"}>
                                10 January 2023 | 12:00
                             </Text>
                          </Box>
                       </Flex>
                       <Box ms={3} textAlign={"end"}>
                          <Text fontSize={"sm"} fontWeight={"bold"}>
                             - Rp 50.000
                          </Text>
                          <Text fontSize={"xs"} color={"green.400"}>
                             Success
                          </Text>
                       </Box>
                    </Flex>
                 </Card>
                 <Card
                    w={"100%"}
                    p={4}
                    borderRadius={"xl"}
                    shadow={"md"}
                    mt={2}
                    mb={16}
                 >
                    <Flex
                       justifyContent={"space-between"}
                       alignItems={"center"}
                    >
                       <Flex alignItems={"center"}>
                          <Image
                             src="https://imgur.com/gEj2ocp.png"
                             alt="Rupiahku"
                             w={10}
                             h={10}
                             borderRadius={"full"}
                          />
                          <Box ms={3}>
                             <Text fontSize={"sm"} fontWeight={"bold"}>
                                Tarik Tunai
                             </Text>
                             <Text fontSize={"xs"} color={"gray.500"}>
                                10 January 2023 | 12:00
                             </Text>
                          </Box>
                       </Flex>
                       <Box ms={3} textAlign={"end"}>
                          <Text fontSize={"sm"} fontWeight={"bold"}>
                             - Rp 150.000
                          </Text>
                          <Text fontSize={"xs"} color={"green.400"}>
                             Success
                          </Text>
                       </Box>
                    </Flex>
                 </Card>
              </Flex>
           </Container>
        </Container>
		  <BottomNav />
     </main>
  );
}
