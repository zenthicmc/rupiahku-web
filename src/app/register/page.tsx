"use client"; // codingan dijalankan pada sisi user
//mengimport komponen ui dari cakra ui
import {
   Box,
   Button,
   Container,
   Image,
   Input,
   Stack,
   Text,
   Select,
   InputGroup,
   InputLeftAddon,
   useToast,
} from "@chakra-ui/react";
// link dari nextlink untuk berpindah halaman
import Link from "next/link";
// library axios untuk menggunakan api
import axios from "axios";
// membuat parameter cont get & set
import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiUrl } from "@/utils/api";
// import libary untuk captcha
import Turnstile from "react-turnstile";
import { verify } from "@/utils/captcha";

// dungsi registrasi
export default function Register() {
   const toast = useToast();
   const router = useRouter();

   const [loading, setLoading] = useState(false);
   const [token, setToken] = useState("");
   const [data, setData] = useState({
      name: "",
      nohp: "",
      email: "",
      kelamin: "",
      password: "",
      confirm_password: "",
   });

   // function untuk handle submit data
   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault(); // mencegah halaman di reload
      setLoading(true); // set loading menjadi true

      // cek apakah password tidak sama dengan confirm password
      if (data.password !== data.confirm_password) {
         toast({
            title: "Confirm password tidak sama",
            position: "bottom",
            status: "error",
            isClosable: true,
         });
         setLoading(false);
         return false;
      }

      // verifikasi captcha
      const captcha = await verify(token);
      if (!captcha || !captcha.success || !token) {
         toast({
            title: "Silahkan verifikasi captcha",
            position: "bottom",
            status: "error",
            isClosable: true,
         });
         setLoading(false);
         return false;
      }

      // mengirim data ke api
      const response = await axios.post(apiUrl + "/api/auth/register", {
         name: data.name,
         nohp: "+62" + data.nohp,
         email: data.email,
         kelamin: data.kelamin,
         password: data.password,
      });

      // cek apakah terjadi error
      const blockdata = response.data;
      // Mengecek apakah respons memiliki properti 'success' yang bernilai false
      if (blockdata.success == false) {
         // Mengecek apakah respons memiliki properti 'errors' yang merupakan array dan memiliki elemen
         if (blockdata.errors.length > 0) {
            // input error handling
            blockdata.errors.forEach((element: any) => {
               toast({
                  title: element.msg,
                  position: "bottom",
                  status: "error",
                  isClosable: true,
               });
            });
            setLoading(false);
            return false;
         }

         // api error handling
         toast({
            title: blockdata.message,
            position: "bottom",
            status: "error",
            isClosable: true,
         });
         setLoading(false);
         return false;
      }

      // set email to localstorage
      localStorage.setItem("nohp", data.nohp);

      // tampilkan pesan sukses
      toast({
         title: "Akun anda berhasil dibuat!",
         position: "bottom",
         status: "success",
         isClosable: true,
      });

      // redirect ke halaman verifikasi
      router.push("/verification");
      setLoading(false);
   }

   return (
      <Container
         width={"sm"}
         minHeight={"100vh"}
         bgImage={"kuil.jpg"}
         alignItems={"center"}
         padding={5}
         paddingTop={"70px"}
         backgroundSize={"cover"}
         backgroundPosition={"center"}
      >
         <Box
            background={"white"}
            h={"fit-content"}
            w={"full"}
            margin={"auto"}
            alignItems={"center"}
            paddingBottom={"50"}
            borderRadius={"2xl"}
         >
            <Box height={"20%"} alignItems={"center"} pt={2}>
               <Image
                  src="rupiahku_slogan.png"
                  alt="logo"
                  width={200}
                  m={"auto"}
                  my={5}
               />
            </Box>
            <Box h={"20%"} w={"full"}>
               <form onSubmit={handleSubmit}>
                  <Stack spacing={3} px={5}>
                     <Input
                        name="name"
                        type="text"
                        placeholder="Nama Lengkap"
                        size="md"
                        borderRadius={"2xl"}
                        border="1px"
                        borderColor="red.500"
                        fontSize={"md"}
                        color={"gray.800"}
                        _placeholder={{ color: "gray.800" }}
                        _hover={{
                           borderColor: "red.500",
                        }}
                        value={data.name}
                        onChange={(e) =>
                           setData({ ...data, name: e.target.value })
                        }
                        required
                     />

                     <InputGroup>
                        <InputLeftAddon
                           children="+62"
                           borderLeftRadius={"2xl"}
                           borderColor="red.500"
                           borderEnd={"none"}
                           bg={"white"}
                           pe={1}
                           ps={3}
                           fontSize={"md"}
                           color={"gray.800"}
                        />
                        <Input
                           type="number"
                           name="nohp"
                           size="md"
                           ps={1}
                           borderStart={"none"}
                           borderRadius={"2xl"}
                           borderColor="red.500"
                           fontSize={"md"}
                           color={"gray.800"}
                           _placeholder={{ color: "gray.800" }}
                           required
                           _hover={{
                              borderColor: "red.500",
                           }}
                           value={data.nohp}
                           onChange={(e) =>
                              setData({ ...data, nohp: e.target.value })
                           }
                        />
                     </InputGroup>

                     <Input
                        name="email"
                        type="email"
                        placeholder="Email"
                        size="md"
                        borderRadius={"2xl"}
                        border="1px"
                        borderColor="red.500"
                        color={"gray.800"}
                        _placeholder={{ color: "gray.800" }}
                        fontSize={"md"}
                        _hover={{
                           borderColor: "red.500",
                        }}
                        value={data.email}
                        onChange={(e) =>
                           setData({ ...data, email: e.target.value })
                        }
                        required
                     />
                     <Select
                        name="kelamin"
                        placeholder="Jenis Kelamin"
                        size="md"
                        borderRadius={"2xl"}
                        border="1px"
                        borderColor="red.500"
                        fontSize={"md"}
                        color={"gray.800"}
                        _placeholder={{ color: "gray.800" }}
                        _hover={{
                           borderColor: "red.500",
                        }}
                        value={data.kelamin}
                        onChange={(e) =>
                           setData({ ...data, kelamin: e.target.value })
                        }
                        required
                     >
                        <option value="Male">Laki-Laki</option>
                        <option value="Female">Perempuan</option>
                     </Select>
                     <Input
                        name="password"
                        type="password"
                        placeholder="Password"
                        size="md"
                        borderRadius={"2xl"}
                        border="1px"
                        borderColor="red.500"
                        fontSize={"md"}
                        color={"gray.800"}
                        _placeholder={{ color: "gray.800" }}
                        _hover={{
                           borderColor: "red.500",
                        }}
                        value={data.password}
                        onChange={(e) =>
                           setData({ ...data, password: e.target.value })
                        }
                        required
                     />
                     <Input
                        name="confirm_password"
                        placeholder="Konfirmasi Password"
                        type="password"
                        size="md"
                        mb={3}
                        borderRadius={"2xl"}
                        border="1px"
                        borderColor="red.500"
                        fontSize={"md"}
                        color={"gray.800"}
                        _placeholder={{ color: "gray.800" }}
                        _hover={{
                           borderColor: "red.500",
                        }}
                        value={data.confirm_password}
                        onChange={(e) =>
                           setData({
                              ...data,
                              confirm_password: e.target.value,
                           })
                        }
                        required
                     />

                     {/* captcha */}
                     <Turnstile
                        sitekey="0x4AAAAAAAO3GwVZL4-GzsrJ"
                        onVerify={(token) => {
                           setToken(token);
                        }}
                     />

                     <Button
                        isLoading={loading}
                        boxShadow="md"
                        size={"md"}
                        width={"100%"}
                        type="submit"
                        bg={"red.500"}
                        color={"white"}
                        borderRadius={"2xl"}
                        mt={3}
                        fontSize={"md"}
                        _hover={{
                           bg: "red.400",
                        }}
                     >
                        Buat Akun Baru
                     </Button>

                     <Text
                        fontSize={"sm"}
                        textAlign={"center"}
                        color={"gray.700"}
                     >
                        Sudah punya akun?{" "}
                        <Link href="/login">
                           <Text
                              as={"span"}
                              color={"red.500"}
                              _hover={{
                                 borderColor: "red.500",
                              }}
                           >
                              Masuk
                           </Text>
                        </Link>
                     </Text>
                  </Stack>
               </form>
            </Box>
         </Box>
      </Container>
   );
}
