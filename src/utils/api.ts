import axios from "axios";

export const ApiGet = async (url: string, token: string) => {
	const response = await axios.get('https://api.rupiahku.pro' + url, {
      headers: {
         Authorization: `Barear ${token}`,
      },
   });

	if (response.data.code == 401) {
		window.location.replace('/login');
	}
	return response.data;
};
