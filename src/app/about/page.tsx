"use client";

import BackButton from "@/components/BackButton";
import {
   Container,
   Text,
   Box,
   Image,
   useColorModeValue,
} from "@chakra-ui/react";

export default function About() {
   return (
      <Container
         width={"sm"}
         background={useColorModeValue("#F6F8FB", "gray.800")}
         minHeight={"130vh"}
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
            <Text fontWeight={"600"} fontSize={"sm"} mb={3}>
               Tentang Kami
            </Text>
            <Image
               src="/rupiahku_slogan.png"
               alt="logo"
               h={"70"}
					margin={"auto"}
					mb={3}
            />
            <Text fontWeight={"300"} fontSize={"xs"}>
               Rupiahku adalah dompet digital yang aman, terpercaya, dan mudah
               digunakan. Rupiahku dapat membantu Anda untuk melakukan berbagai
               transaksi dengan mudah, mulai dari transfer uang, pembayaran
               tagihan, hingga belanja online.
            </Text>

            <Text fontWeight={"600"} fontSize={"sm"} mb={1} mt={2}>
               Visi dan Misi
            </Text>
            <Text fontWeight={"300"} fontSize={"xs"}>
               Visi Rupiahku adalah menjadi dompet digital yang terdepan di
               Indonesia, yang dicintai oleh masyarakat Indonesia. Misi Rupiahku
               adalah untuk menyediakan layanan dompet digital yang aman,
               terpercaya, dan mudah digunakan, sehingga dapat membantu
               masyarakat Indonesia untuk mengelola keuangannya dengan lebih
               baik.
            </Text>

            <Text fontWeight={"600"} fontSize={"sm"} mb={1} mt={2}>
               Produk dan Layanan
            </Text>
            <Text fontWeight={"300"} fontSize={"xs"}>
               Rupiahku menawarkan berbagai produk dan layanan, antara lain:
            </Text>
            <Box fontWeight={"300"} fontSize={"xs"}>
               <ul style={{ marginLeft: "0.7rem", marginTop: "2px" }}>
                  <li>Transfer uang</li>
                  <li>Pembayaran tagihan</li>
                  <li>Pulsa</li>
                  <li>E-Money</li>
                  <li>Voucher</li>
                  <li>Topup game</li>
                  <li>Lain-lain</li>
               </ul>
            </Box>
         </Box>
      </Container>
   );
}
