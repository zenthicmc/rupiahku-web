"use client";

import BackButton from "@/components/BackButton";
import {
   Container,
   Text,
   Box,
   Image,
   useColorModeValue,
	Button,
	Flex,
   Spinner,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { ApiGet } from "@/utils/api";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

export default function Statistik() {
	const [cookies] = useCookies(["token"]);
	const [loading, setLoading] = useState(false);
	const [filter, setFilter] = useState("all");
	const [stats, setStats] = useState({
		uangMasuk: 0,
		uangKeluar: 0,
	});

	ChartJS.register(ArcElement, Tooltip, Legend);

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top' as const,
			},
			title: {
				display: true,
			},
		},
	}

	const labels = ['Uang Masuk', 'Uang Keluar'];

	const data = {
      labels: labels,
      datasets: [
         {
            label: "Statistik",
            data: [stats.uangMasuk, stats.uangKeluar],
            backgroundColor: ["#4299e1", "#F56565"],
         },
      ],
   };

	useEffect(() => {
		setLoading(true);
      async function getData() {
         const response = await ApiGet(`/api/user/getstats?date=${filter}`, cookies.token);
			setStats(response.data);
      }

      getData();
		setLoading(false);
   }, [filter]);

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
            <Text fontWeight={"600"} fontSize={"sm"}>
               Statistik Keuangan
            </Text>

            <Flex
               justifyContent={"space-between"}
               alignItems={"center"}
               mt={2}
               mb={3}
               flexDirection={"row"}
               gap={2}
            >
               <Button
                  border={"2px solid"}
                  borderColor={"red.400"}
                  background={filter === "all" ? "red.400" : "invisible"}
                  color={filter === "all" ? "white" : "red.400"}
                  variant={"solid"}
                  size={"sm"}
                  fontSize={"xs"}
                  w={"100%"}
                  onClick={() => setFilter("all")}
                  _after={{ bg: "red.400" }}
                  _active={{ bg: "red.400" }}
                  _hover={{ bg: "red.400", color: "white" }}
               >
                  Semua
               </Button>
               <Button
                  border={"2px solid"}
                  borderColor={"red.400"}
                  background={filter === "today" ? "red.400" : "invisible"}
                  color={filter === "today" ? "white" : "red.400"}
                  variant={"solid"}
                  size={"sm"}
                  fontSize={"xs"}
                  w={"100%"}
                  onClick={() => setFilter("today")}
                  _after={{ bg: "red.400" }}
                  _active={{ bg: "red.400" }}
                  _hover={{ bg: "red.400", color: "white" }}
               >
                  Hari Ini
               </Button>
               <Button
                  border={"2px solid"}
                  borderColor={"red.400"}
                  background={filter === "week" ? "red.400" : "invisible"}
                  color={filter === "week" ? "white" : "red.400"}
                  variant={"solid"}
                  size={"sm"}
                  w={"100%"}
                  fontSize={"xs"}
                  onClick={() => setFilter("week")}
                  _after={{ bg: "red.400" }}
                  _active={{ bg: "red.400" }}
                  _hover={{ bg: "red.400", color: "white" }}
               >
                  1 Minggu
               </Button>
               <Button
                  border={"2px solid"}
                  borderColor={"red.400"}
                  background={filter === "month" ? "red.400" : "invisible"}
                  color={filter === "month" ? "white" : "red.400"}
                  variant={"solid"}
                  size={"sm"}
                  w={"100%"}
                  fontSize={"xs"}
                  onClick={() => setFilter("month")}
                  _after={{ bg: "red.400" }}
                  _active={{ bg: "red.400" }}
                  _hover={{ bg: "red.400", color: "white" }}
               >
                  1 Bulan
               </Button>
            </Flex>

            {!loading && <Pie data={data} options={options} />}
         </Box>
      </Container>
   );
}
