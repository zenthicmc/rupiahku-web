import axios from "axios";

export const ApiGet = async (url: string, token: string) => {
	const response = await axios.get("https://backup-api.rupiahku.pro" + url, {
      headers: {
         Authorization: `Barear ${token}`,
      },
   });

	if (response.data.code == 401) {
		window.location.replace('/login');
	}
	return response.data;
};


export const ApiPost = async (url: string, token: string, data: any,) => {
	const response = await axios.post('https://backup-api.rupiahku.pro' + url, data, {
		headers: {
			Authorization: `Barear ${token}`,
		},
	});

	if (response.data.code == 401) {
		window.location.replace('/login');
	}

	return response.data;
};