export const sanitize = (str: string) => {
	return str.replace(/(<([^>]+)>)/gi, '');
};
