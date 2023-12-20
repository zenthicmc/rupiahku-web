"use client"

import { useCookies } from "react-cookie"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Logout() {
	const router = useRouter();
   const [cookies, setCookie, removeCookie] = useCookies(["token"]);
	
	useEffect(() => {
		removeCookie("token");
		return router.push("/login");
	}, [])
}
