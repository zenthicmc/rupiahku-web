import axios from "axios";
import { apiUrl } from "./api";

export async function verify(token: string) {
	const result = await axios.post(`${apiUrl}/api/captcha/verify`, {
      token: token,
   });

	return result.data;
}
