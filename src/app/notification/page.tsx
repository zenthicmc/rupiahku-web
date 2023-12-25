'use client';

import {
   Box,
   Container,
   Flex,
   Text,
   Card,
   useColorModeValue,
   SkeletonCircle,
   Skeleton,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import BottomNav from "@/components/BottomNav";
import { ApiGet } from "@/utils/api";
import { capitalize } from "@/utils/capitalize";
import { formatDate } from "@/utils/Date";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export default function Notification() {
   const [notifications, setNotifications] = useState([]);
   const [cookies, setCookie] = useCookies(["token"]);
   const [loading, setLoading] = useState(true);

   // mengambil data notifikasi dari api
   useEffect(() => {
      setLoading(true);
      async function getData() {
         const response = await ApiGet("/api/notification", cookies.token);
         setNotifications(response.data);
         setLoading(false);
      }

      getData();
   }, []);

   return (
      <main>
         <Container
            w="sm"
            background={useColorModeValue("#F6F8FB", "gray.800")}
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
                  gap={2}
               >
                  {loading == false ? (
                     notifications.map((notification) => (
                        <Card w={"100%"} p={4} borderRadius={"xl"} shadow={"md"}>
                           <Flex
                              justifyContent={"space-between"}
                              alignItems={"center"}
                           >
                              <Flex alignItems={"center"}>
                                 <Image
                                    src={useColorModeValue(
                                       notification.icon,
                                       notification.icon_dark
                                    )}
                                    alt="Rupiahku"
                                    w={10}
                                    h={10}
                                    borderRadius={"full"}
                                 />
                                 <Box ms={3}>
                                    <Text fontSize={"0.8rem"} fontWeight={"bold"}>
                                       {capitalize(notification.title)}
                                    </Text>
                                    <Text fontSize={"0.7rem"} color={"gray.500"}>
                                       {notification.desc}
                                    </Text>
                                    <Text
                                       fontSize={"0.7rem"}
                                       color={"gray.500"}
                                       fontWeight={"300"}
                                       mt={1}
                                    >
                                       {formatDate(notification.createdAt)}
                                    </Text>
                                 </Box>
                              </Flex>
                           </Flex>
                        </Card>
                     ))
                  ) : (
                     <>
                        {[...Array(8)].map((_, i) => (
                           <Card
                              w={"100%"}
                              p={4}
                              borderRadius={"xl"}
                              shadow={"md"}
                              key={i}
                              mb={2}
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
            </Container>
         </Container>
         <BottomNav />
      </main>
   );
}
