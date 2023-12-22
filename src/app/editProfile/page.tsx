"use client"

import BackButton from "@/components/BackButton";
import {
   Container,
   Text,
   Box,
   Image,
   Stack,
   Input,
   Button,
   useColorModeValue,
   Avatar,
   AvatarBadge,
   useToast
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useCookies } from "react-cookie";
import { ApiPut, ApiGet } from "@/utils/api";
import axios from "axios";

export default function editProfile() {
   const toast = useToast();
   const inputFile = useRef(null);

   const [cookies, setCookie] = useCookies(["token"]);
   const [loading, setLoading] = useState(false);
   const [image, setImage] = useState(null);
   const [data, setData] = useState({
      name: "",
      email: "",
      nohp: "",
      image: "",
   });

   useEffect(() => {
      async function getData() {
         const response = await ApiGet("/api/user/getprofile", cookies.token);
         setData(response.data.user);
      }

      getData();
   }, []);

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      const response = await ApiPut("/api/user/updateProfile", cookies.token, data);
      if(!response.success) {
         toast({
            title: "Gagal",
            description: response.message,
            status: "success",
            duration: 5000,
            isClosable: true,
         });

         setLoading(false);
         return false;
      }

      toast({
         title: "Berhasil",
         description: "Berhasil mengupdate profile",
         status: "success",
         duration: 5000,
         isClosable: true,
      });

      setLoading(false);
   }

   const handleFileUpload = async (e) => {
      setLoading(true);
      const { files } = e.target;

      if (files && files.length) {
         const formData = new FormData();
         formData.append("file", files[0]);

         const response = await axios.post("https://cdn.tokoqu.io/image", formData, {
            headers: {
               "Content-Type": "multipart/form-data",
               "Authorization": "token 6178adcb-2010-4534-a388-924ad0ce48b3",
            },
         });

         setData({ ...data, image: response.data.data.url });

         const responseProfile = await ApiPut("/api/user/updateImage", cookies.token, { image: response.data.data.url });
         if(!responseProfile.success) {
            toast({
               title: "Gagal",
               description: responseProfile.message,
               status: "success",
               duration: 5000,
               isClosable: true,
            });
         }

         toast({
            title: "Berhasil",
            description: "Berhasil mengupdate gambar profile",
            status: "success",
            duration: 5000,
            isClosable: true,
         });
         setLoading(false);
      }
   };

   const onButtonClick = () => {
      inputFile.current.click();
   };

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
               h={"250"}
            />
            <Stack
               direction="row"
               spacing={4}
               align="center"
               position={"absolute"}
               right={"0"}
               left={"0"}
               top={"4rem"}
               margin={"auto"}
               alignItems={"center"}
            >
               <input
                  style={{ display: "none" }}
                  accept="image/*"
                  ref={inputFile}
                  onChange={handleFileUpload}
                  type="file"
               />

               <Avatar
                  width={"5.5rem"}
                  height={"5.5rem"}
                  margin={"auto"}
                  src={data.image}
                  onClick={onButtonClick}
               >
                  <AvatarBadge
                     borderColor="white"
                     bg="white"
                     boxSize="1.25em"
                     bottom={"0.5rem"}
                     right={"0.5rem"}
                  >
                     <FaPlus color={"#E53E3E"} size={"0.8rem"} />
                  </AvatarBadge>
               </Avatar>
            </Stack>
         </Box>
         <Box
            pos={"absolute"}
            w={"90%"}
            h={"fit-content"}
            bg={useColorModeValue("white", "gray.700")}
            margin={"auto"}
            left={"0"}
            right={"0"}
            top={"11rem"}
            borderRadius={"xl"}
            shadow={"xl"}
            p={6}
         >
            <form onSubmit={handleSubmit}>
               <Stack>
                  <Text fontWeight={"600"} fontSize={"sm"}>
                     Nama
                  </Text>
                  <Input
                     fontSize={"sm"}
                     size={"md"}
                     borderRadius={"8"}
                     shadow={"0 0 0 1px lightgrey"}
                     placeholder="Masukkan Nama"
                     borderColor={useColorModeValue("gray.300", "gray.500")}
                     color={useColorModeValue("gray.900", "gray.100")}
                     bg={useColorModeValue("none", "gray.700")}
                     value={data.name}
                     onChange={(e) =>
                        setData({ ...data, name: e.target.value })
                     }
                     required
                  />
                  <Text fontWeight={"600"} fontSize={"sm"} mt={1}>
                     Nomor Ponsel
                  </Text>
                  <Input
                     fontSize={"sm"}
                     size={"md"}
                     borderRadius={"8"}
                     shadow={"0 0 0 1px lightgrey"}
                     placeholder=" Masukkan Nomor Ponsel"
                     borderColor={useColorModeValue("gray.300", "gray.500")}
                     color={useColorModeValue("gray.900", "gray.100")}
                     bg={useColorModeValue("none", "gray.700")}
                     value={data.nohp}
                     onChange={(e) =>
                        setData({ ...data, nohp: e.target.value })
                     }
                     required
                  />
                  <Text fontWeight={"600"} fontSize={"sm"} mt={1}>
                     Alamat Email
                  </Text>
                  <Input
                     fontSize={"sm"}
                     size={"md"}
                     borderRadius={"8"}
                     shadow={"0 0 0 1px lightgrey"}
                     placeholder="Masukkan Alamat Email"
                     borderColor={useColorModeValue("gray.300", "gray.500")}
                     color={useColorModeValue("gray.900", "gray.100")}
                     bg={useColorModeValue("none", "gray.700")}
                     value={data.email}
                     onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                     }
                     required
                  />

                  <Button
                     type="submit"
                     isLoading={loading}
                     w={"100%"}
                     variant={"solid"}
                     fontSize={"sm"}
                     bg={useColorModeValue("red.500", "red.400")}
                     color={"white"}
                     _hover={{ opacity: "0.9" }}
                     _after={{ bg: "red.500" }}
                     _active={{ bg: "red.500" }}
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