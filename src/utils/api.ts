import axios from "axios";

export const apiUrl = "https://api.rupiahku.pro";

export const ApiGet = async (url: string, token: string) => {
	const response = await axios.get(apiUrl + url, {
      headers: {
         Authorization: `Barear ${token}`,
      },
   });

	if (response.data.code == 401) {
		return window.location.replace('/login');
	}

	return response.data;
};

export const ApiPost = async (url: string, token: string, data: any,) => {
	const response = await axios.post(apiUrl + url, data, {
      headers: {
         Authorization: `Barear ${token}`,
      },
   });

	if (response.data.code == 401) {
		return window.location.replace('/login');
	}

	return response.data;
};


export const ApiPut = async (url: string, token: string, data: any) => {
   const response = await axios.put(apiUrl + url, data, {
      headers: {
         Authorization: `Barear ${token}`,
      },
   });

   if (response.data.code == 401) {
      return window.location.replace("/login");
   }

   return response.data;
};