function binaryInclusion(value) {
	let score = 0;
	if (
		value.toLowerCase() === 'yes' ||
		value.toLowerCase() === 'y' ||
		parseInt(value) === 1
	) {
		score = 1;
	}

	return score;
}

export default binaryInclusion;
