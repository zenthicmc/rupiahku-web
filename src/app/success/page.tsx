"use client";

import {
   Box,
   Button,
   Container,
   useColorModeValue,
   Text,
} from "@chakra-ui/react";
import Lottie from "lottie-react";
import success from "../../../public/success.json";
import { BiArrowBack } from "react-icons/bi";
import { useRouter, useSearchParams } from "next/navigation";

export default function Success() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const amount = parseInt(searchParams.get("amount") || "0");
	const title = searchParams.get("title") || "Pembayaran Berhasil";

   return (
      <main>
         <Container
            w="sm"
            background={useColorModeValue("#F6F8FB", "gray.800")}
            p={0}
            h={"fit-content"}
            pb={20}
            minH={"100vh"}
            justifyContent={"center"}
            alignItems={"center"}
            display={"flex"}
            pos={"relative"}
         >
            <Button
               pos={"absolute"}
               top={4}
               left={4}
               zIndex={1}
               p={0}
               m={0}
               cursor={"pointer"}
               bg={"none"}
               _hover={{ bg: "none" }}
               onClick={() => router.push("/")}
            >
               <BiArrowBack
                  size={25}
                  color={useColorModeValue("gray.400", "gray.800")}
               />
            </Button>

            <Box textAlign={"center"}>
               <Box w={"15rem"} h={"15rem"} m={"auto"}>
                  <Lottie animationData={success} loop={true} />
               </Box>
               <Text fontSize={"xl"} fontWeight={"bold"}>
                  {title}
               </Text>
               <Text fontSize={"md"} color={"gray.700"} mt={1}>
                  Rp {amount.toLocaleString("id-ID")}
               </Text>
            </Box>
         </Container>
      </main>
   );
}
