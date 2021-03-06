function totalWeights(functionMapping) {
	let total = 0;

	for (const item in functionMapping) {
		if (item !== 'totalWeight') {
			total += parseFloat(functionMapping[item].weight);
		}
	}

	return total;
}

export default totalWeights;
