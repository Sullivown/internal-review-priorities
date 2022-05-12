function totalWeights(functionMapping) {
	console.log(functionMapping);
	let total = 0;

	for (const item in functionMapping) {
		if (item !== 'totalWeight') {
			total += functionMapping[item].weight;
		}
	}

	return total;
}

export default totalWeights;
