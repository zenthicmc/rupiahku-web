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
import { Image } from "@chakra-ui/react";
import BottomNav from "@/components/BottomNav";

export default function Notification() {
   return (
      <main>
         <Container
            w="sm"
            background={"#F6F8FB"}
            p={0}
            h={"fit-content"}
            minH={"100vh"}
            pb={20}
         >
            <Box as="section" pos={"relative"} pb={1}>
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
                  top={"10"}
                  left={"0"}
                  right={"0"}
                  margin={"auto"}
               >
                  <Text
                     fontSize={"lg"}
                     fontWeight={"bolder"}
                     color={"gray.900"}
                     ms={1}
                     textShadow={"0px 0px 5px rgba(0, 0, 0, 0.1)"}
                  >
                     Notifikasi
                  </Text>
               </Flex>
            </Box>

            <Container w={"90%"} margin={"auto"} p={0} py={1}>
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
                              src="https://imgur.com/ptBXYO1.png"
                              alt="Rupiahku"
                              w={10}
                              h={10}
                              borderRadius={"full"}
                           />
                           <Box ms={3}>
                              <Text fontSize={"sm"} fontWeight={"bold"}>
                                 Pembayaran Berhasil
                              </Text>
                              <Text fontSize={"xs"} color={"gray.500"}>
                                 Pembayaran Anda untuk transaksi
                                 [DEV-R54263846502SAT] Berhasil.
                              </Text>
                              <Text
                                 fontSize={"xs"}
                                 color={"gray.500"}
                                 fontWeight={"300"}
                                 mt={1}
                              >
                                 10 January 2023 | 12:00
                              </Text>
                           </Box>
                        </Flex>
                     </Flex>
                  </Card>
                  <Card
                     w={"100%"}
                     p={4}
                     borderRadius={"xl"}
                     shadow={"md"}
                     mt={2}
                  >
                     <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                     >
                        <Flex alignItems={"center"}>
                           <Image
                              src="https://imgur.com/m79n6PF.png"
                              alt="Rupiahku"
                              w={10}
                              h={10}
                              borderRadius={"full"}
                           />
                           <Box ms={3}>
                              <Text fontSize={"sm"} fontWeight={"bold"}>
                                 Pembayaran Gagal
                              </Text>
                              <Text fontSize={"xs"} color={"gray.500"}>
                                 Pembayaran Anda untuk transaksi
                                 [DEV-R54263846502SAT] telah dibatalkan. Alasan
                                 pembatalan: Dana ditolak
                              </Text>
                              <Text
                                 fontSize={"xs"}
                                 color={"gray.500"}
                                 fontWeight={"300"}
                                 mt={1}
                              >
                                 10 January 2023 | 12:00
                              </Text>
                           </Box>
                        </Flex>
                     </Flex>
                  </Card>
                  <Card
                     w={"100%"}
                     p={4}
                     borderRadius={"xl"}
                     shadow={"md"}
                     mt={2}
                  >
                     <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                     >
                        <Flex alignItems={"center"}>
                           <Image
                              src="https://imgur.com/KoOSscl.png"
                              alt="Rupiahku"
                              w={10}
                              h={10}
                              borderRadius={"full"}
                           />
                           <Box ms={3}>
                              <Text fontSize={"sm"} fontWeight={"bold"}>
                                 Pembayaran Dalam Proses
                              </Text>
                              <Text fontSize={"xs"} color={"gray.500"}>
                                 Pembayaran Anda untuk transaksi
                                 [DEV-R54263846502SAT] sedang dalam proses.
                                 Silahkan cek status secara berkala.
                              </Text>
                              <Text
                                 fontSize={"xs"}
                                 color={"gray.500"}
                                 fontWeight={"300"}
                                 mt={1}
                              >
                                 10 January 2023 | 12:00
                              </Text>
                           </Box>
                        </Flex>
                     </Flex>
                  </Card>
               </Flex>
            </Container>
         </Container>
         <BottomNav />
      </main>
   );
}
