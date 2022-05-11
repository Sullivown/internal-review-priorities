const LocalStorage = (() => {
	const initialise = () => {
		if (!localStorage.getItem('internal-review-priorities')) {
			localStorage.setItem(
				'internal-review-priorities',
				JSON.stringify({
					fileName: null,
					rawData: null,
					processedData: null,
				})
			);
		} else {
			return JSON.parse(
				localStorage.getItem('internal-review-priorities')
			);
		}
	};

	const update = (data) => {
		localStorage.setItem(
			'internal-review-priorities',
			JSON.stringify(data)
		);
	};

	return {
		initialise,
		update,
	};
})();

export default LocalStorage;
