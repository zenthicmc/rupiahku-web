"use client"

import { useCookies } from "react-cookie"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { ApiPost } from "@/utils/api"

export default function Logout() {
	const router = useRouter();
   const [cookies, setCookie, removeCookie] = useCookies(["token"]);
	
	useEffect(() => {
		async function logout() {
			ApiPost("/api/user/logout", cookies.token, {});
			removeCookie("token")
			router.push("/login")
		}
		
		logout()
	}, [])
}
