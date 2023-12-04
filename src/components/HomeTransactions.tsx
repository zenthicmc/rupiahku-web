import {
   Box,
   Flex,
   Text,
   Card,
   useColorModeValue,
   Image,
   Skeleton,
   SkeletonCircle,
} from "@chakra-ui/react";
import { capitalize } from "@/utils/capitalize";
import { formatDate } from "@/utils/Date";

const HomeTransactions = (props) => {
   const transactions = props.transactions;
   const loading = props.isLoading;
   return (
      <Flex
         justifyContent={"space-between"}
         alignItems={"center"}
         mt={2}
         flexDirection={"column"}
         gap={2}
      >
         {loading == false ? (
            transactions.length > 0 ? (
               <>
                  {transactions.map((transaction, i) => (
                     <Card
                        w={"100%"}
                        p={4}
                        borderRadius={"xl"}
                        shadow={"md"}
                        key={i}
                     >
                        <Flex
                           justifyContent={"space-between"}
                           alignItems={"center"}
                        >
                           <Flex alignItems={"center"}>
                              <Image
                                 src={useColorModeValue(
                                    transaction.icon,
                                    transaction.icon_dark
                                 )}
                                 alt="Rupiahku"
                                 w={10}
                                 h={10}
                                 borderRadius={"full"}
                              />
                              <Box ms={3}>
                                 <Text fontSize={"sm"} fontWeight={"bold"}>
                                    {capitalize(transaction.type)}
                                 </Text>
                                 <Text
                                    fontSize={"xs"}
                                    color={"gray.500"}
                                    fontWeight={"300"}
                                 >
                                    {formatDate(transaction.createdAt)}
                                 </Text>
                              </Box>
                           </Flex>
                           <Box ms={3} textAlign={"end"}>
                              <Text fontSize={"sm"} fontWeight={"bold"}>
                                 Rp {transaction.amount.toLocaleString("id-ID")}
                              </Text>
                              <Text
                                 fontSize={"xs"}
                                 color={
                                    transaction.status === "Success"
                                       ? "green.400"
                                       : transaction.status === "Pending"
                                       ? "yellow.400"
                                       : "red.400"
                                 }
                              >
                                 {transaction.status}
                              </Text>
                           </Box>
                        </Flex>
                     </Card>
                  ))}
               </>
            ) : (
               <>
                  <Card
                     w={"100%"}
                     p={4}
                     borderRadius={"xl"}
                     shadow={"md"}
                  >
                     <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                     >
                        <Flex alignItems={"center"}>
                           <Image
                              src={'/question.png'}
                              alt="Rupiahku"
                              w={10}
                              h={10}
                              borderRadius={"full"}
                           />
                           <Box ms={3}>
                              <Text fontSize={"sm"} fontWeight={"bold"}>
                                 Transaksi Tidak Ditemukan
                              </Text>
                              <Text
                                 fontSize={"xs"}
                                 color={"gray.500"}
                                 fontWeight={"300"}
                              >
                                 Ayo mulai transaksi pertama anda!
                              </Text>
                           </Box>
                        </Flex>
                     </Flex>
                  </Card>
               </>
            )
         ) : (
            <>
               {[...Array(3)].map((_, i) => (
                  <Card
                     w={"100%"}
                     p={4}
                     borderRadius={"xl"}
                     shadow={"md"}
                     key={i}
                  >
                     <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        w={"100%"}
                     >
                        <Flex alignItems={"center"}>
                           <SkeletonCircle size="10" />
                           <Box ms={3}>
                              <Skeleton h={4} w={"250px"} />
                              <Skeleton h={4} w={"250px"} mt={1} />
                           </Box>
                        </Flex>
                     </Flex>
                  </Card>
               ))}
            </>
         )}
      </Flex>
   );
};

export default HomeTransactions;
