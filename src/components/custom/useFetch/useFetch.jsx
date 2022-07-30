import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (url, option = {}, dependencies = []) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [value, setValue] = useState([]);

	useEffect(
		() => {
			setLoading(true);
			const fetchData = async () => {
				try {
					const res = await axios.get(url, option);
					res.data && setValue((prev) => [...prev, res.data]);
				} catch (error) {
					setError(error);
				}
				setLoading(false);
			};
			fetchData();
		},
		[option, url],
		dependencies,
	);

	return [loading, error, value];
};
