function mapFunctionsToData(dataHeadings) {
	const mapped = dataHeadings.reduce((obj, item) => {
		obj[item] = 3;

		return obj;
	}, {});

	return mapped;
}

export default mapFunctionsToData;
