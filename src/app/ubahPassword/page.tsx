"use client"

import BackButton from "@/components/BackButton";
import { Container, Text, Box, Image, Stack, Input, Button, useColorModeValue, useToast } from "@chakra-ui/react";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { ApiPut } from "@/utils/api";

export default function ubahPassword() {
	const toast = useToast();

   const [cookies, setCookie] = useCookies(["token"]);
   const [loading, setLoading] = useState(false);
   const [data, setData] = useState({
      oldPassword: "",
      password: "",
      confirmPassword: "",
   });

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

		const response = await ApiPut("/api/user/updatePassword", cookies.token, data);
		if(!response.success) {
			toast({
				title: "Gagal",
				description: response.message,
				status: "error",
				duration: 5000,
				isClosable: true,
			});

			setLoading(false);
         return false;
		}

		toast({
			title: "Berhasil",
			description: "Berhasil mengupdate password",
			status: "success",
			duration: 5000,
			isClosable: true,
		});
      setLoading(false);
   }

   return (
      <Container
         width={"sm"}
         background={useColorModeValue("#F6F8FB", "gray.800")}
         minHeight={"100vh"}
         padding={"0"}
         pos={"relative"}
      >
         <Box position={"relative"}>
            <BackButton color="black" />
            <Image
               src="/hero.jpg"
               alt="hero"
               background={"teal"}
               w={"full"}
               h={"200"}
            />
         </Box>
         <Box
            pos={"absolute"}
            w={"90%"}
            h={"fit-content"}
            bg={useColorModeValue("white", "gray.700")}
            margin={"auto"}
            left={"0"}
            right={"0"}
            top={"7rem"}
            borderRadius={"xl"}
            shadow={"xl"}
            p={6}
         >
            <form onSubmit={handleSubmit}>
               <Stack>
                  <Text fontWeight={"600"}>Password Lama</Text>
                  <Input
                     type="password"
                     size={"md"}
                     borderRadius={"8"}
                     shadow={"0 0 0 1px lightgrey"}
                     placeholder="Masukkan Nama"
                     borderColor={useColorModeValue("gray.300", "gray.500")}
                     color={useColorModeValue("gray.900", "gray.100")}
                     bg={useColorModeValue("none", "gray.700")}
                     value={data.oldPassword}
                     onChange={(e) =>
                        setData({ ...data, oldPassword: e.target.value })
                     }
                     required
                  />
                  <Text fontWeight={"600"} mt={1}>
                     Password Baru
                  </Text>
                  <Input
                     type="password"
                     size={"md"}
                     borderRadius={"8"}
                     shadow={"0 0 0 1px lightgrey"}
                     placeholder=" Masukkan Nomor Ponsel"
                     borderColor={useColorModeValue("gray.300", "gray.500")}
                     color={useColorModeValue("gray.900", "gray.100")}
                     bg={useColorModeValue("none", "gray.700")}
                     value={data.password}
                     onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                     }
                     required
                  />
                  <Text fontWeight={"600"} mt={1}>
                     Konfirmasi Password Baru
                  </Text>
                  <Input
                     type="password"
                     size={"md"}
                     borderRadius={"8"}
                     shadow={"0 0 0 1px lightgrey"}
                     placeholder="Masukkan Alamat Email"
                     borderColor={useColorModeValue("gray.300", "gray.500")}
                     color={useColorModeValue("gray.900", "gray.100")}
                     bg={useColorModeValue("none", "gray.700")}
                     value={data.confirmPassword}
                     onChange={(e) =>
                        setData({ ...data, confirmPassword: e.target.value })
                     }
                     required
                  />

                  <Button
                     type="submit"
                     isLoading={loading}
                     w={"100%"}
                     variant={"solid"}
                     bg={useColorModeValue("red.500", "red.400")}
                     color={"white"}
                     _hover={{ opacity: "0.9" }}
                     _after={{ bg: "red.500" }}
                     _active={{ bg: "red.500" }}
                     fontSize={"md"}
                     size={"md"}
                     mt={4}
                  >
                     Simpan
                  </Button>
               </Stack>
            </form>
         </Box>
      </Container>
   );
}