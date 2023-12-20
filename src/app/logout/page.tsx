"use client"

import { useCookies } from "react-cookie"
import { useRouter } from "next/navigation"

export default function Logout() {
	const router = useRouter()
	const [cookies, setCookie, removeCookie] = useCookies(["token"])
	removeCookie("token")
	return router.push("/login")
}
