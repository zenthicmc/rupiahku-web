export const formatDate = (date: string) => {
	return new Date(date).toLocaleDateString('id-ID', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}